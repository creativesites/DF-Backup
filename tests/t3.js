const puppeteer = require('puppeteer');
const fs = require('fs');
const cheerio = require('cheerio');
const axios = require('axios')
const {
    resolve
} = require('path');
let changeAgents1 = ['371-EnviHondV2-854-999-5365','300-AutoPorX-816-281-6544', '00-005-LtoyoBellR-8184939734', '00-002-CfordNapa-8184929153', '00-003-XhondTaz-8184929306', '330-SansKia_-818-493-9849', '331-SansMits-818-493-9971', '332-SansNiss-818-493-9961',  '00-001-MkiaHambra-3238142465', '380-RegaNiss-BDC-8323088796'];
const zipDirPath = resolve(__dirname, 'backup');
const { GoogleSpreadsheet } = require('google-spreadsheet');
const CREDENTIALS = require('./sheets.json');
const RESPONSES_SHEET_ID = '1gza3a05wWV4bt7c9pMyJsm43hpbCpPx84Uctym2zjOg';
const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID);
const readline = require('readline');
const prompt = (query, hidden = false) =>
  new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    try {
      if (hidden) {
        const stdin = process.openStdin();
        process.stdin.on('data', (char) => {
          char = char + '';
          switch (char) {
            case '\n':
            case '\r':
            case '\u0004':
              stdin.pause();
              break;
            default:
              process.stdout.clearLine(0);
              readline.cursorTo(process.stdout, 0);
              process.stdout.write(query + Array(rl.line.length + 1).join('*'));
              break;
          }
        });
      }
      rl.question(query, (value) => {
        resolve(value);
        rl.close();
      });
    } catch (err) {
      reject(err);
    }
}); 

let timeout = 5000;
async function scrollIntoViewIfNeeded(element, timeout) {
    await waitForConnected(element, timeout);
    const isInViewport = await element.isIntersectingViewport({
      threshold: 0
    });
    if (isInViewport) {
      return;
    }
    await element.evaluate(element => {
      element.scrollIntoView({
        block: 'center',
        inline: 'center',
        behavior: 'auto',
      });
    });
    await waitForInViewport(element, timeout);
  }

  async function waitForConnected(element, timeout) {
    await waitForFunction(async () => {
      return await element.getProperty('isConnected');
    }, timeout);
  }

  async function waitForInViewport(element, timeout) {
    await waitForFunction(async () => {
      return await element.isIntersectingViewport({
        threshold: 0
      });
    }, timeout);
  }
  

  async function waitForFunction(fn, timeout) {
    let isActive = true;
    setTimeout(() => {
      isActive = false;
    }, timeout);
    while (isActive) {
      const result = await fn();
      if (result) {
        return;
      }
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    throw new Error('Timed out');
  }
  (async () => {
    var xvfb = new Xvfb({
        silent: true,
        xvfb_args: ["-screen", "0", '1280x720x24', "-ac"],
    });
    xvfb.start((err)=>{if (err) console.error(err)})
    const browser = await puppeteer.launch({
        executablePath: '/usr/bin/chromium',
        headless: false,
        defaultViewport: null, //otherwise it defaults to 800x600
        args: ['--no-sandbox', 
        '--start-fullscreen', 
        '--disable-web-security',
        '--disable-features=IsolateOrigins,site-per-process',
        '--display='+xvfb._display]
        });
        const page = await browser.newPage();
        const pages = await browser.pages();
        pages[0].close();
        await page.goto('https://accounts.google.com/signin/v2/identifier', { waitUntil: 'networkidle2', timeout: 0 });
        await page.waitForSelector('#identifierId');
        const email = await prompt('Email or phone: ');
        await page.type('#identifierId', email);
        await page.waitForTimeout(1500);
        await page.keyboard.press('Enter');
        await page.waitForTimeout(1500);
        const password = await prompt('Enter your password: ', true);
        console.log('Finishing up...');
        await page.waitForSelector('input[type="password"]');
        await page.type('input[type="password"]', password);
        await page.waitForTimeout(2500);
        await page.keyboard.press('Enter');
        await page.waitForTimeout(15000);
        console.log('logged in')
        try {
    
            const url1 = 'https://dialogflow.cloud.google.com';
            const page1 = await browser.newPage();
            await page1.goto(url1, {
                waitUntil: 'networkidle2',
                timeout: 0
            });
            
            await page1.waitForTimeout(15000);
            
            let convArr = [];
            async function UpdateSheet(cell, cellVal){
                await doc.useServiceAccountAuth({
                  client_email: CREDENTIALS.client_email,
                  private_key: CREDENTIALS.private_key
                });
            
                // load the documents info
                await doc.loadInfo();
            
                
                const sheet = doc.sheetsByTitle['UpdateDF'];
                console.log(sheet.title);
                await sheet.loadCells('G4:J4');
                const c6 = await sheet.getCellByA1(cell);
                c6.value = cellVal
                await sheet.saveUpdatedCells();
                console.log('update written to sheet')
              }
            async function runBackup() {
                convArr = []
                await page1.waitForTimeout(20000);
                
                
                try {
                    for (let index = 0; index < changeAgents1.length; index++) {
                        const el = changeAgents1[index]
                        console.log(`running ${el}`)
                        let oj = {
                          USER: el
                      }
                      await doc.useServiceAccountAuth({
                        client_email: CREDENTIALS.client_email,
                        private_key: CREDENTIALS.private_key
                      });
                  
                      // load the documents info
                      await doc.loadInfo();
                      const sheet = doc.sheetsByTitle[el];
                        console.log(sheet.title);
                      convArr.push(oj)
                        let agent = el
                        //await UpdateSheet("G4", `Backup ${el} Started`)
                        //select select agent button
                        await page1.waitForTimeout(20000);
                        try {
                          console.log('selecting select agent button')
                        await page1.waitForSelector('#agents-dropdown-toggle > span.icon-right.icon-caret', {
                            timeout: 15000
                        });
                        await page1.waitForTimeout(1000);
                        
                        await page1.click('#agents-dropdown-toggle > span.icon-right.icon-caret')
                        } catch (error) {
                          console.log(error)
                          continue
                        }
        
                        try {
                            //select agent
                            //scroll if needed
                            await page1.waitForTimeout(5000);
                            await page1.waitForSelector(`aria/${el}`, {
                                timeout: 5000
                            });
                            //await scrollIntoViewIfNeeded(element, timeout);
                            await page1.waitForTimeout(1000);
                            console.log('selecting agent')
                            await page1.click(`aria/${el}`);
                            await page1.waitForTimeout(10000);
                            //click history
                            await page1.waitForSelector(`#link-history`, {
                                timeout: 5000
                            });
                            //await scrollIntoViewIfNeeded(element, timeout);
                            await page1.waitForTimeout(1500);
                            console.log('selecting history')
                            await page1.click(`#link-history`);
                            await page1.waitForTimeout(25000);
                            //click import/export
                            let iid = 100
                            
                            
                            
                            let xn = await page1.$x('/html/body/div[1]/div[2]/div/div/div/section/div/div[3]/div/history/div/div[4]/div[1]/md-select/md-select-value/span[2]', {timeout: 10000});
                            await page1.waitForTimeout(4500);
                            await xn[0].click()
                            await page1.waitForTimeout(2500);
                            await page1.waitForTimeout(1000);
                            await page1.waitForSelector('aria/100')
                            await page1.waitForTimeout(1000);
                            await page1.click('aria/100');
                            await page1.waitForTimeout(15000);
                            await page1.waitForSelector('aria/navigate_next')
                            await page1.waitForTimeout(1000)
                            await page1.click('aria/navigate_next');
                            await page1.waitForTimeout(10000)
                            
                                    // let selNum = await page1.waitForSelector('#select_value_label_20 > span.md-select-icon')
                                    // await scrollIntoViewIfNeeded(selNum, 6000);
                                    // await page1.waitForTimeout(1000);
                                    // await selNum.click();
        
                                    //aria/navigate_next
                                    
                            let convRow = []
                            async function getC(){
                                console.log('in conv')
                                await page1.waitForTimeout(15000);
                              for (let idx = 1; idx < 100; idx++) {
                                
                                  let convObj = {}
                                  let srt ={
                                    USER: "New Conversation",
                                    CHATBOT: agent
                                }
                               convArr.push(srt)
                               let userSayArr = []
                               let agentSayArr = []
                               let convTime = []
                               let onh = {}
                               let convStr = ``;
                               let lastStr = ``;
                               let startTime = '';
                               let iterations = '';
                                  let cpy = await page1.waitForSelector(`#main > div > div.workplace.ng-scope > div > history > div > div.content-section.ng-scope > conversations > div > div:nth-child(${idx}) > div`, {timeout: 5000})
                                  await page1.waitForTimeout(1000)
                                  await scrollIntoViewIfNeeded(cpy, 6000);
                                  await page1.click(`#main > div > div.workplace.ng-scope > div > history > div > div.content-section.ng-scope > conversations > div > div:nth-child(${idx}) > div`)
                                  await page1.waitForTimeout(2000);
                                  await page1.waitForTimeout(2000);
                                  //#main > div > div.workplace.ng-scope > div > history > div > div.content-section.ng-scope > conversations > div > div:nth-child(20) > interactions > div > div.content-section-interactions > div:nth-child(2) > div.user.layout-align-start-center.layout-row > div.layout-align-end-center.layout-row.flex-45 > span.date.ng-binding
                                  //let d = await page1.$$('span.date.ng-binding');
                                   await page1.waitForTimeout(5000);
                                    
                                      await page1.waitForTimeout(2000);
                                  const html1 = await page1.evaluate(()=>{
                                      return{
                                          html: document.documentElement.innerHTML
                                      }
                                  })
                                  const $1 = cheerio.load(html1.html);
                                  console.log('s2')
                                  $1('.flex-55').each((idx, el) => {
                                      // convObj.CHATBOT = agent
                                      let xv = $1(el)
                                          .find('span.member-icon')
                                          .text()
                                          .replace(/\s\s+/g, '');
                                      let xc = $1(el)
                                          .find('span.text.ng-binding')
                                          .text()
                                          .replace(/(<([^>]+)>)/gi, "")
                                          .replace(/(\r\n|\n|\r)/gm, "");
                                      if(xv === 'AGENT'){
                                        // convObj.AGENT = xc
                                        agentSayArr.push(xc)
                                      }
                                      if(xv === 'USER'){
                                        // convObj.USER = xc
                                        userSayArr.push(xc)
                                      }
                                      
                                  });
                                  $1('.flex-45').each((idx, el) => {
                                      
                                      let xb = $1(el)
                                          .find('span.date.ng-binding')
                                          .text()
                                          .replace(/(<([^>]+)>)/gi, "")
                                          .replace(/(\r\n|\n|\r)/gm, "");
                                      // convObj.TIME = xb
                                      convTime.push(xb)
                                  });
                                  
                                  await page1.waitForTimeout(5000);
                                  let numConv = userSayArr.length;
                                  userSayArr.map((el, idx3)=>{
                                    let numConv2 = numConv - 1;
                                    
                                    
                                    if(idx3 === numConv2){
                                        lastStr += `\n👱‍♀️: - ${el}`;
                                        lastStr += `\n   👩🏻‍💻: - ${agentSayArr[idx3]}`;
                                        startTime += convTime[1]
                                    }else{
                                        convStr += `\n👱‍♀️: - ${el}`;
                                        convStr += `\n   👩🏻‍💻: - ${agentSayArr[idx3]}`;
                                    }
                                    
                                  })
                                  onh.CallTime = startTime;
                                  onh.Conversations = convStr;
                                  onh.LastIteration = lastStr;
                                  onh.Iterations = numConv;
                                  const moreRows = await sheet.addRow(onh);
                                  convArr.push(onh)
                                  await page1.waitForTimeout(1000);
                                  await page1.waitForSelector(`#main > div > div.workplace.ng-scope > div > history > div > div.content-section.ng-scope > conversations > div > div:nth-child(${idx}) > interactions > div > div.header.layout-align-center-center.layout-row > div.action-buttons.unselectable.flex-45`, {timeout: 15000});
                                  await page1.waitForTimeout(1000);
                                  await page1.click(`#main > div > div.workplace.ng-scope > div > history > div > div.content-section.ng-scope > conversations > div > div:nth-child(${idx}) > interactions > div > div.header.layout-align-center-center.layout-row > div.action-buttons.unselectable.flex-45`);
                                  
                                  
                              }
                          }
                          try {
                            await getC()
                          } catch (error) {
                            console.log(error)
                          }
                          
                            
        
                            
                            
        
                            console.log('Scraping Done...');
                        } catch (error) {
                            console.log(error)
                            continue
                        }
                        
        
                    }
                } catch (error) {
                    console.log(error);
                    
                }
                
                
            }
    
            async function pushData(){
                var data = JSON.stringify(convArr);
                console.log(convArr.length)
                var config = {
                    method: 'post',
                    url: 'https://script.google.com/macros/s/AKfycbw9OYAd3AQd4IBPBjpWovKVbUJwUrnnUSmAZlNNAGwNbaCgMKODo9iFAN_AADMAUZvh/exec?gid=1258845929',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    data: data
                };
    
                axios(config)
                .then(function (response) {
                console.log(JSON.stringify(response.data));
                })
                .catch(function (error) {
                console.log(error);
                });
            }
            
            try {
                await runBackup()
            } catch (error) {
                console.log(error)
            }
            //await pushData()
            //.then(async()=>{await browser.close()})
            
            
    
        } catch (error) {
    
            console.log(error)
        }
    xvfb.stop();
})()


