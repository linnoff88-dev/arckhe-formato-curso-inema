const PW='/home/nmaldaner/.npm/_npx/e41f203b7505f1fb/node_modules/playwright';
const {chromium}=require(PW);
(async()=>{let b;try{b=await chromium.launch({headless:true})}catch(e){b=await chromium.launch({headless:true,executablePath:require('os').homedir()+'/.cache/ms-playwright/chromium-1223/chrome-linux/chrome'})}
const p=await(await b.newContext({viewport:{width:1200,height:850}})).newPage();
await p.goto('http://127.0.0.1:8137/curso/trilha1/modulo-1-1.html',{waitUntil:'networkidle'});
await p.waitForTimeout(400);
await p.evaluate(()=>{Object.keys(localStorage).filter(k=>k.startsWith('ARCKHÉ.')).forEach(k=>localStorage.removeItem(k));
  const ids=[...document.querySelectorAll('[data-ARCKHÉ-topic]')].map(e=>e.getAttribute('data-ARCKHÉ-topic'));
  window.ARCKHÉ.markRead(ids[0],true); window.ARCKHÉ.markRead(ids[1],true); window.ARCKHÉ.markRead(ids[2],true);
  window.ARCKHÉ.toggleDoubt(ids[3]);
  const blocks=[...document.querySelectorAll('[data-ARCKHÉ-block]')];
  function hl(blk,c,note){const tn=[...blk.childNodes].find(n=>n.nodeType===3&&n.textContent.trim().length>15)||blk.firstChild;const r=document.createRange();r.setStart(tn,0);r.setEnd(tn,Math.min(30,tn.textContent.length));window.ARCKHÉ.highlight(r,{color:c,note});}
  hl(blocks[0],'yellow',null); hl(blocks[1],'doubt','revisar isso depois');
  window.ARCKHÉ.openJourney();
});
await p.waitForTimeout(600);
await p.screenshot({path:'verify/final-journey.png'});
await b.close(); console.log('shot ok');})();
