#!/usr/bin/env node
// Bridge public, données et accès privés. Aucune information sensible dans stdout.
import { execFileSync } from "node:child_process";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const REPO = "DevWeb13/fam-space-qwik";
const REPORT_TO = "contact@fam-space.fr";
const FLOWS = [
  ["publication-region-codex.yml", "Publication Région", 4],
  ["jeux-cadeaux-codex.yml", "Jeux & Cadeaux", 3],
];

export function dayInParis(date) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone:"Europe/Paris", year:"numeric", month:"2-digit", day:"2-digit",
  }).formatToParts(date);
  const value = (type) => parts.find((p) => p.type === type).value;
  return [value("year"),value("month"),value("day")].join("-");
}
export function dayOffset(day,n) {
  const d = new Date(day+"T12:00:00Z"); d.setUTCDate(d.getUTCDate()+n);
  return d.toISOString().slice(0,10);
}
export function articleUrl(path) {
  const a = path.match(/^src\/routes\/articles\/([^/]+)\/\(\d{4}\)\/\(\d{2}\)\/([^/]+)\/index\.md$/);
  if (a) return "https://www.fam-space.fr/articles/"+a[1]+"/"+a[2]+"/";
  const b = path.match(/^src\/routes\/\(cadeaux\)\/cadeaux\/guides\/\(\d{4}\)\/\(\d{2}\)\/([^/]+)\/index\.md$/);
  return b ? "https://www.fam-space.fr/cadeaux/guides/"+b[1]+"/" : null;
}
export function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;",
  })[c]);
}
export function runStatus(run,log="") {
  if (["failure","timed_out"].includes(run.conclusion)) return "Échec";
  if (run.conclusion==="cancelled") return "Annulé";
  if (run.status!=="completed") return "En cours";
  if (/Quota ChatGPT atteint|Quota Plus atteint|rate limit/i.test(log)) return "Quota atteint, reprise automatique";
  if (/Sujet écarté|sujet écarté/i.test(log)) return "Sujet écarté";
  if (/Guide Jeux & cadeaux déjà publié|Créneau déjà publié|Position régionale .* déjà publiée|Publication régionale de la position .* déjà terminée/i.test(log)) return "Déjà traité";
  if (/Réponse vide|reprise au prochain passage|Trois essais terminés/i.test(log)) return "Reprise ultérieure";
  return run.conclusion==="success" ? "Terminé (voir Summary GitHub)" : "À vérifier";
}
function phaseStatus(log,total) {
  if (/Article (?:régional )?publié\s*:/i.test(log)) return total+"/"+total+" validées";
  const known = new Set();
  for (const m of log.matchAll(/phase\s+([1-4])\s+(?:déjà\s+(?:validée|terminée)|validée)/gi))
    if (+m[1]<=total) known.add(m[1]);
  return known.size ? known.size+"/"+total+" observées" : "Voir Summary GitHub";
}
function ghClient(token) {
  const get = async (path) => {
    const res = await fetch("https://api.github.com/repos/"+REPO+path,{
      headers:{Authorization:"Bearer "+token,Accept:"application/vnd.github+json",
        "X-GitHub-Api-Version":"2022-11-28","User-Agent":"fam-space-daily-report"},
      signal:AbortSignal.timeout(20000),
    });
    if (!res.ok) throw Error("GitHub HTTP "+res.status+" sur "+path.split("?")[0]);
    return res.json();
  };
  const pages = async (path,key) => {
    const all=[];
    for(let n=1;n<=10;n++){
      const result=await get(path+(path.includes("?")?"&":"?")+"per_page=100&page="+n);
      const batch=key?result[key]:result;
      if(!Array.isArray(batch)) throw Error("Réponse GitHub inattendue");
      all.push(...batch);
      if(batch.length<100) return all;
    }
    throw Error("Plus de 1000 éléments, rapport incomplet");
  };
  return {get,pages};
}
function logReader(gh,token) {
  return async (id) => {
    const response=await gh.get("/actions/runs/"+id+"/jobs?per_page=10");
    const job=response.jobs?.find(j=>j.name==="editorial"||j.name.endsWith(" / editorial"));
    if(!job) return "";
    // Les journaux du dépôt privé ne quittent jamais ce sous-processus.
    return execFileSync("gh",["api","repos/"+REPO+"/actions/jobs/"+job.id+"/logs"],{
      env:{...process.env,GH_TOKEN:token}, encoding:"utf8",
      timeout:20000,maxBuffer:4*1024*1024,stdio:["ignore","pipe","ignore"],
    });
  };
}
export async function collect(day,gh,logs) {
  const before=dayOffset(day,-1),after=dayOffset(day,1);
  const groups=[];
  for(const [file,label,total] of FLOWS){
    const all=await gh.pages("/actions/workflows/"+file+
      "/runs?branch=master&created="+before+".."+after,"workflow_runs");
    const runs=[];
    for(const run of all) {
      if(dayInParis(new Date(run.created_at))!==day) continue;
      let log="";
      if(run.status==="completed") try {log=await logs(run.id)} catch {}
      runs.push({number:run.run_number,url:"https://github.com/"+REPO+"/actions/runs/"+run.id,
        state:runStatus(run,log),phases:phaseStatus(log,total),conclusion:run.conclusion});
    }
    groups.push({label,runs});
  }
  const commits=await gh.pages("/commits?sha=master&since="+before+
    "T00:00:00Z&until="+after+"T23:59:59Z");
  const articles=[];
  for(const c of commits){
    const msg=c.commit?.message?.split("\n")[0]||"";
    const type=msg.startsWith("content: publish regional ")?"Publication Région":
      msg.startsWith("content: cadeaux ")?"Jeux & Cadeaux":null;
    if(!type||dayInParis(new Date(c.commit.committer.date))!==day) continue;
    const detail=await gh.get("/commits/"+c.sha);
    const path=detail.files?.find(f=>f.status==="added"&&articleUrl(f.filename))?.filename;
    if(!path) continue;
    const url=articleUrl(path);
    const fallback=path.split("/").at(-2).replaceAll("-"," ");
    let title=fallback;
    try{
      const doc=await gh.get("/contents/"+path.split("/").map(encodeURIComponent).join("/")+"?ref="+c.sha);
      const markdown=Buffer.from(doc.content,"base64").toString("utf8");
      const front=markdown.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1];
      title=(front?.match(/^title:\s*(.+)$/m)?.[1]?.trim().replace(/^["']|["']$/g,"")||fallback).slice(0,170);
    }catch{}
    articles.push({type,title,url});
  }
  return {day,groups,articles};
}
export function render(report) {
  const h=escapeHtml,{day,groups,articles}=report;
  const stats=groups.map(g=>({...g,errors:g.runs.filter(r=>["failure","timed_out"].includes(r.conclusion)).length,
    quotas:g.runs.filter(r=>r.state.startsWith("Quota atteint")).length}));
  const subject="[Fam Space] Bilan Codex du "+day+" — "+articles.length+" article(s)";
  const text=[
    "Bilan Codex du "+day+" (heure de Paris)","",
    articles.length+" publication(s) sur master :",
    ...(articles.length?articles.map(a=>"- "+a.type+" : "+a.title+"\n  "+a.url):["Aucune publication Codex."]),"",
    ...stats.flatMap(g=>[g.label+" : "+g.runs.length+" passage(s), "+g.errors+
      " erreur(s), "+g.quotas+" quota(s) détecté(s)",
      ...(g.runs.length?g.runs.map(r=>"- #"+r.number+" : "+r.state+" · phases "+r.phases+"\n  "+r.url):["- Aucun passage"]), ""]),
    "Le détail des phases et des erreurs se trouve dans les rapports GitHub privés.",
  ].join("\n");
  const html=[
    '<div style="font-family:Arial,system-ui,sans-serif;color:#173246;line-height:1.6;max-width:680px">',
    "<h1>Bilan Codex · "+h(day)+"</h1><p>"+articles.length+" article(s) publiés sur master.</p>",
    articles.length?"<ul>"+articles.map(a=>'<li>'+h(a.type)+
      ' : <a href="'+h(a.url)+'">'+h(a.title)+"</a></li>").join("")+"</ul>":"<p>Aucune publication Codex.</p>",
    ...stats.map(g=>"<h2>"+h(g.label)+"</h2><p>"+g.runs.length+" passage(s) · "+
      g.errors+" erreur(s) · "+g.quotas+" quota(s)</p><ul>"+
      (g.runs.length?g.runs.map(r=>'<li><a href="'+h(r.url)+'">Exécution #'+r.number+
        "</a> : "+h(r.state)+" · "+h(r.phases)+"</li>").join(""):"<li>Aucun passage</li>")+"</ul>"),
    "<p>Phases détaillées consultables dans GitHub Actions (dépôt privé).</p></div>",
  ].join("\n");
  return {subject,text,html};
}
export async function main() {
  const dry=process.env.REPORT_DRY_RUN==="true";
  const needed=[["FAM_SPACE_REPORT_TOKEN",process.env.FAM_SPACE_REPORT_TOKEN]];
  if(!dry) needed.push(["RESEND_REPORT_API_KEY",process.env.RESEND_REPORT_API_KEY]);
  const missing=needed.filter(i=>!i[1]).map(i=>i[0]);
  if(missing.length){
    console.log("::notice::Bilan inactif : secrets manquants "+missing.join(", "));
    return;
  }
  const day=dayOffset(dayInParis(new Date()),-1);
  const token=process.env.FAM_SPACE_REPORT_TOKEN;
  const gh=ghClient(token);
  const report=await collect(day,gh,logReader(gh,token));
  if(dry){
    console.log("Simulation "+day+" : "+report.articles.length+" article(s), "+
      report.groups.reduce((n,g)=>n+g.runs.length,0)+" passage(s). Aucun email.");
    return;
  }
  const response=await fetch("https://api.resend.com/emails",{
    method:"POST",headers:{Authorization:"Bearer "+process.env.RESEND_REPORT_API_KEY,
      "Content-Type":"application/json"},
    body:JSON.stringify({from:"Fam Space <newsletter@fam-space.fr>",to:[REPORT_TO],...render(report)}),
    signal:AbortSignal.timeout(20000),
  });
  if(!response.ok) throw Error("Resend HTTP "+response.status+" : envoi non confirmé");
  console.log("Bilan "+day+" envoyé sans journaliser les données privées.");
}
if(process.argv[1]&&fileURLToPath(import.meta.url)===resolve(process.argv[1])){
  main().catch(e=>{console.error("Bilan Codex : "+e.message);process.exitCode=1});
}
