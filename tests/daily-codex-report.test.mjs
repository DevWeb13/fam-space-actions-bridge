import test from "node:test";
import assert from "node:assert/strict";
import { dayInParis, dayOffset, articleUrl, escapeHtml, runStatus, render } from "../scripts/daily-codex-report.mjs";
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
  assert.match(msg.text,/Aucun passage/);
});
