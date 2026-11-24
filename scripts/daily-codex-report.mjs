#!/usr/bin/env node
// Bridge public, données et accès privés. Aucune information sensible dans stdout.
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const REPO = "DevWeb13/fam-space-qwik";
const REPORT_TO = "contact@fam-space.fr";
const FLOWS = [
  ["publication-region-codex.yml", "Publication Région"],
  ["jeux-cadeaux-codex.yml", "Jeux & Cadeaux"],
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
export function runStatus(run,log="",flow="") {
  if (["failure","timed_out"].includes(run.conclusion)) return "Échec";
  if (run.conclusion==="cancelled") return "Annulé";
  if (run.status!=="completed") return "En cours";
  if (log===null) return "Journal inaccessible";
  const status=[...log.matchAll(/CYCLE_STATUS:\s*([a-z_]+)/g)].at(-1)?.[1];
  if (status==="published") return flow==="Publication Région" ? "En attente des images" : "Publié";
  if (status==="paused") return "En pause (reprise ultérieure)";
  if (status==="quota") return "Quota atteint, reprise automatique";
  if (status==="skipped"||/Sujet écarté/i.test(log)) return "Sujet écarté";
  if (status==="already_published"||status==="already_skipped"||
    /Guide Jeux & cadeaux déjà publié|Créneau déjà publié|Position régionale .* déjà publiée|Publication régionale de la position .* déjà terminée/i.test(log)) return "Déjà traité";
  if (/Quota ChatGPT atteint|Quota Plus atteint|rate limit/i.test(log)) return "Quota atteint, reprise automatique";
  if (/Réponse vide|reprise au prochain passage|Trois essais terminés/i.test(log)) return "Reprise ultérieure";
  return run.conclusion==="success" ? "Terminé (voir Summary GitHub)" : "À vérifier";
}
function ghClient(token) {
  const request = (path,options={}) => fetch("https://api.github.com/repos/"+REPO+path,{
      headers:{Authorization:"Bearer "+token,Accept:"application/vnd.github+json",
        "X-GitHub-Api-Version":"2022-11-28","User-Agent":"fam-space-daily-report"},
      signal:AbortSignal.timeout(20000),...options,
    });
  const get = async (path) => {
    const res=await request(path);
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
  return {get,pages,request};
}
function logReader(gh) {
  return async (id) => {
    const response=await gh.get("/actions/runs/"+id+"/jobs?per_page=100");
    const job=response.jobs?.find(j=>j.name==="editorial"||j.name.endsWith(" / editorial"));
    if(!job) throw Error("Job éditorial absent");
    // Ne transmettre le jeton qu'à GitHub, jamais à l'URL temporaire de téléchargement.
    let res=await gh.request("/actions/jobs/"+job.id+"/logs",{redirect:"manual"});
    if(res.status>=300&&res.status<400){
      const location=res.headers.get("location");
      if(!location||new URL(location).protocol!=="https:") throw Error("Redirection invalide");
      res=await fetch(location,{signal:AbortSignal.timeout(20000)});
    }
    if(!res.ok) throw Error("Journal HTTP "+res.status);
    return res.text();
  };
}
function frontmatterField(front,key) {
  return (front.match(new RegExp("^"+key+":[ \\t]*(.+)$","m"))?.[1]??"")
    .trim().replace(/^["']|["']$/g,"");
}
export function classifyArticle(path,markdown,files) {
  const front=markdown.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1]??"";
  if(frontmatterField(front,"status")!=="published") return null;
  const url=articleUrl(path);
  if(!url) return null;
  const region=path.startsWith("src/routes/articles/")&&frontmatterField(front,"publicationOrigin")==="region";
  // Le guide Cadeaux et sa rotation sont publiés dans le même commit.
  const gift=path.startsWith("src/routes/(cadeaux)/")&&
    files.some(f=>f.filename==="content-data/jeux-cadeaux-partner-rotation.json");
  if(!region&&!gift) return null;
  const title=frontmatterField(front,"title")||path.split("/").at(-2).replaceAll("-"," ");
  return {type:region?"Publication Région":"Jeux & Cadeaux",title,url};
}
export async function collect(day,gh,logs) {
  const before=dayOffset(day,-1),after=dayOffset(day,1);
  const groups=[];
  for(const [file,label] of FLOWS){
    const all=await gh.pages("/actions/workflows/"+file+
      "/runs?branch=master&created="+before+".."+after,"workflow_runs");
    const runs=[];
    for(const run of all) {
      if(dayInParis(new Date(run.created_at))!==day) continue;
      let log=null;
      if(run.status==="completed"){
        try{log=await logs(run.id)}catch(error){
          const reason=String(error?.message??"").match(/HTTP \d{3}/)?.[0]??"lecture impossible";
          console.warn("::warning::Bilan Codex : journal #"+run.run_number+" ("+reason+")");
        }
      }
      const state=runStatus(run,log,label);
      runs.push({number:run.run_number,url:"https://github.com/"+REPO+"/actions/runs/"+run.id,
        state,unchecked:run.status==="completed"&&(log===null||state==="Terminé (voir Summary GitHub)"||state==="À vérifier")});
    }
    groups.push({label,runs});
  }
  // Ne récupérer que les commits touchant les articles, sans dépendre de leur message.
  const commits=new Map();
  for(const path of ["src/routes/articles","src/routes/(cadeaux)/cadeaux/guides"]){
    const matches=await gh.pages("/commits?sha=master&path="+encodeURIComponent(path)+
      "&since="+before+"T00:00:00Z&until="+after+"T23:59:59Z");
    for(const commit of matches) commits.set(commit.sha,commit);
  }
  const articles=[],seen=new Set();
  for(const c of commits.values()){
    if(dayInParis(new Date(c.commit.committer.date))!==day) continue;
    const detail=await gh.get("/commits/"+c.sha);
    for(const file of detail.files??[]){
      if(file.status!=="added"||!articleUrl(file.filename)||seen.has(file.filename)) continue;
      const path=file.filename;
      seen.add(path);
      const doc=await gh.get("/contents/"+path.split("/").map(encodeURIComponent).join("/")+"?ref="+c.sha);
      if(doc.encoding!=="base64"||typeof doc.content!=="string") throw Error("Article illisible : "+path);
      const article=classifyArticle(path,Buffer.from(doc.content,"base64").toString("utf8"),detail.files);
      if(article) articles.push(article);
    }
  }
  return {day,groups,articles};
}
export function render(report) {
  const h=escapeHtml,{day,groups,articles}=report;
  const subject="[Fam Space] Bilan Codex du "+day+" — "+articles.length+" article(s)";
  const sections=groups.map(g=>({
    label:g.label,articles:articles.filter(a=>a.type===g.label),
    incidents:g.runs.filter(r=>/^(Échec|Annulé|Quota atteint|En pause|Reprise ultérieure)/.test(r.state)),
    unchecked:g.runs.filter(r=>r.unchecked).length,
  }));
  const incomplete=sections.reduce((n,g)=>n+g.unchecked,0);
  const incidents=sections.flatMap(g=>g.incidents.map(r=>({...r,label:g.label})));
  const noIncident=incomplete?"Aucun incident confirmé.":"Aucun incident détecté.";
  const warning="Vérification incomplète : "+incomplete+" exécution(s) sans statut éditorial confirmé. Voir GitHub Actions.";
  const text=[
    "Bilan Codex du "+day+" (heure de Paris)","",
    articles.length+" article(s) publiés sur master.","",
    ...sections.flatMap(g=>[g.label+" ("+g.articles.length+")",
      ...(g.articles.length?g.articles.map(a=>"- "+a.title+"\n  "+a.url):["Aucune publication."]), ""]),
    "Incidents",
    ...(incidents.length?incidents.map(r=>"- "+r.label+" : "+r.state+" (#"+r.number+")\n  "+r.url):[noIncident]),
    ...(incomplete?[warning]:[]),
  ].join("\n");
  const html=[
    '<div style="font-family:Arial,system-ui,sans-serif;color:#173246;line-height:1.6;max-width:680px">',
    "<h1>Bilan Codex · "+h(day)+"</h1><p>"+articles.length+" article(s) publiés sur master.</p>",
    ...sections.map(g=>"<h2>"+h(g.label)+" ("+g.articles.length+")</h2>"+
      (g.articles.length?"<ul>"+g.articles.map(a=>'<li><a href="'+h(a.url)+'">'+h(a.title)+"</a></li>").join("")+"</ul>":"<p>Aucune publication.</p>")),
    "<h2>Incidents</h2>",
    incidents.length?"<ul>"+incidents.map(r=>'<li>'+h(r.label)+' : '+h(r.state)+' (<a href="'+h(r.url)+'">#'+r.number+"</a>)</li>").join("")+"</ul>":"<p>"+noIncident+"</p>",
    ...(incomplete?["<p>"+h(warning)+"</p>"]:[]),
    "</div>",
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
  const report=await collect(day,gh,logReader(gh));
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
