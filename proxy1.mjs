import puppeteer from 'puppeteer';
import {
  proxyRequest,
} from 'puppeteer-proxy';

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
        args: [
            '--disable-web-security',
            '--disable-features=IsolateOrigins,site-per-process'
        ]
  });
  const page = await browser.newPage();

  await page.setRequestInterception(true);

  page.on('request', async (request) => {
    await proxyRequest({
      page,
      proxyUrl: 'http://127.0.0.1:3000',
      request,
    });
  });

  await page.goto('https://www.google.com');
})();