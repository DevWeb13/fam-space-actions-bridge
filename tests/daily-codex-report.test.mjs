import test from "node:test";
import assert from "node:assert/strict";
import { dayInParis, dayOffset, articleUrl, escapeHtml, runStatus, render, classifyArticle } from "../scripts/daily-codex-report.mjs";
test("jour précédent et fuseau horaire",()=>{
  assert.equal(dayInParis(new Date("2026-10-25T23:40:00Z")),"2026-10-26");
  assert.equal(dayOffset("2026-10-26",-1),"2026-10-25");
});
test("liens réels et échappement HTML",()=>{
  assert.equal(articleUrl("src/routes/articles/sorties/(2026)/(10)/visite/index.md"),"https://www.fam-space.fr/articles/sorties/visite/");
  assert.equal(articleUrl("src/routes/(cadeaux)/cadeaux/guides/(2026)/(10)/puzzle/index.md"),"https://www.fam-space.fr/cadeaux/guides/puzzle/");
  assert.equal(escapeHtml("<script>"),"&lt;script&gt;");
});
test("quota distinct de l'échec",()=>{
  assert.match(runStatus({status:"completed",conclusion:"success"},"Quota Plus atteint"),/Quota atteint/);
  assert.equal(runStatus({status:"completed",conclusion:"failure"},"Quota Plus atteint"),"Échec");
  assert.equal(runStatus({status:"completed",conclusion:"success"},"Phase 1 déjà terminée"),"Terminé (voir Summary GitHub)");
});
test("email vide et données échappées",()=>{
  const msg=render({day:"2026-10-21",articles:[{type:"Jeux & Cadeaux",title:"<Jouet> & famille",url:"https://www.fam-space.fr/cadeaux/guides/jeu/"}],
    groups:[{label:"Publication Région",runs:[]},{label:"Jeux & Cadeaux",runs:[]}]});
  assert.match(msg.html,/&lt;Jouet&gt; &amp; famille/);
  assert.doesNotMatch(msg.html,/<Jouet>/);
  assert.match(msg.text,/Aucune publication/);
  assert.match(msg.text,/Aucun incident détecté/);
});

test("seuls les articles Codex publiés sont retenus",()=>{
  const region="src/routes/articles/sorties/(2026)/(11)/visite/index.md";
  const gift="src/routes/(cadeaux)/cadeaux/guides/(2026)/(11)/jeu/index.md";
  const published="---\ntitle: Guide\nstatus: published\n";
  assert.equal(classifyArticle(region,published+"publicationOrigin: region\n---\nTexte",[]).type,"Publication Région");
  assert.equal(classifyArticle(region,published+"---\nTexte",[]),null);
  assert.equal(classifyArticle(gift,published+"---\nTexte",[]),null);
  assert.equal(classifyArticle(gift,published+"---\nTexte",[{filename:"content-data/jeux-cadeaux-partner-rotation.json"}]).type,"Jeux & Cadeaux");
  assert.equal(classifyArticle(region,published.replace("published","draft")+"publicationOrigin: region\n---\nTexte",[]),null);
});
test("un journal inaccessible ne vaut pas absence d'incident",()=>{
  const msg=render({day:"2026-11-22",articles:[],groups:[
    {label:"Publication Région",runs:[{state:"Journal inaccessible",unchecked:true}]},
    {label:"Jeux & Cadeaux",runs:[{number:131,state:"En pause (reprise ultérieure)",url:"https://github.com/DevWeb13/fam-space-qwik/actions/runs/1"}]}
  ]});
  assert.match(msg.text,/Vérification incomplète/);
  assert.match(msg.text,/En pause/);
  assert.doesNotMatch(msg.text,/Aucun incident détecté|Journal inaccessible/);
});
