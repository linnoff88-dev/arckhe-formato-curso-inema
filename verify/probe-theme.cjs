const PW='/home/nmaldaner/.npm/_npx/e41f203b7505f1fb/node_modules/playwright';
const {chromium}=require(PW);
(async()=>{let b;try{b=await chromium.launch({headless:true})}catch(e){b=await chromium.launch({headless:true,executablePath:require('os').homedir()+'/.cache/ms-playwright/chromium-1223/chrome-linux/chrome'})}
const p=await(await b.newContext()).newPage();
await p.goto('http://127.0.0.1:8137/curso/trilha1/modulo-1-1.html',{waitUntil:'networkidle'});
await p.waitForTimeout(300);
await p.evaluate(()=>Object.keys(localStorage).filter(k=>k.startsWith('ARCKHÉ.')).forEach(k=>localStorage.removeItem(k)));
const probe=await p.evaluate(()=>{
  const h=document.documentElement, body=document.body;
  const out=[];
  function snap(label){ out.push({label, htmlClass:h.className, dt:h.getAttribute('data-theme'), bodyBg:getComputedStyle(body).backgroundColor, bodyColor:getComputedStyle(body).color, varBg:getComputedStyle(h).getPropertyValue('--bg').trim()}); }
  snap('inicial');
  window.ARCKHÉ.setPref('theme','claro'); snap('claro(setPref)');
  h.classList.remove('dark'); snap('claro(remove .dark manual)');
  window.ARCKHÉ.setPref('theme','sepia'); snap('sepia');
  window.ARCKHÉ.setPref('theme','contraste'); snap('contraste');
  window.ARCKHÉ.setPref('theme','ARCKHÉ-dark'); snap('ARCKHÉ-dark');
  return out;
});
console.log(JSON.stringify(probe,null,2));
await b.close();})();
