const PW = '/home/nmaldaner/.npm/_npx/e41f203b7505f1fb/node_modules/playwright';
const { chromium } = require(PW);
(async () => {
  let b; try { b = await chromium.launch({ headless: true }); }
  catch (e) { b = await chromium.launch({ headless: true, executablePath: require('os').homedir() + '/.cache/ms-playwright/chromium-1223/chrome-linux/chrome' }); }
  const p = await (await b.newContext()).newPage();
  await p.goto('http://127.0.0.1:8137/curso/trilha1/modulo-1-1.html', { waitUntil: 'networkidle' });
  await p.waitForTimeout(400);
  const out = await p.evaluate(() => {
    Object.keys(localStorage).filter(k=>k.startsWith('ARCKHÉ.')).forEach(k=>localStorage.removeItem(k));
    const ids = [...document.querySelectorAll('[data-ARCKHÉ-topic]')].map(e=>e.getAttribute('data-ARCKHÉ-topic'));
    window.ARCKHÉ.markRead(ids[0], true);
    window.ARCKHÉ.openJourney();
    const dialogs = [...document.querySelectorAll('[role="dialog"]')].map(d => ({ cls: d.className, role: d.getAttribute('role'), len: d.textContent.length }));
    const j = document.querySelector('.ARCKHÉ-journey');
    const txt = j ? j.textContent.replace(/\s+/g,' ').trim() : '(sem .ARCKHÉ-journey)';
    return { nDialogs: dialogs.length, dialogs, journeyText: txt.slice(0, 600) };
  });
  console.log(JSON.stringify(out, null, 2));
  await b.close();
})();
