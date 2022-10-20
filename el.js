const puppeteer = require('puppeteer');
const moment = require('moment');
const jsonfile = require('jsonfile')
const file = './subjects.json'
let obj = []
async function run() {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: [
            '--disable-web-security',
            '--disable-features=IsolateOrigins,site-per-process'
        ]
    });


    const page = await browser.newPage();
    const pages = await browser.pages();
    pages[0].close();
 
    const url1 = 'https://www.zedpastpapers.com/downloads/grade12/';
        await page.goto(url1, {
            waitUntil: 'networkidle2',
            timeout: 0
        });
        await page.setViewport({
            width: 1280,
            height: 600
        })
        await page.waitForTimeout(5000);
        //  /html/body/div[3]/section/div/div[1]/blockquote/div[1]/p[1]/a
        // 37
        // #sciencepapers > p:nth-child(2) > a
        //${subjectId} > p:nth-child(2) > a
        // /html/body/div[3]/section/div/div[1]/blockquote/div[10]
        //  /html/body/div[3]/section/div/div[1]/blockquote/div[1]
        for (let index = 1; index < 38; index++) {
            let subj = {}
            await page.waitForXPath(`/html/body/div[3]/section/div/div[1]/blockquote/a[${index}]`);
            let subject = await page.$x(`/html/body/div[3]/section/div/div[1]/blockquote/a[${index}]`);
            const [subject1] = await page.$x(`/html/body/div[3]/section/div/div[1]/blockquote/a[${index}]`);
            const getMsg = await page.evaluate(name => name.innerText, subject1);
            await page.waitForXPath(`/html/body/div[3]/section/div/div[1]/blockquote/div[${index}]`);
            subj.subject = getMsg
            await page.waitForTimeout(500)
            //console.log(getMsg)
            await page.waitForTimeout(1000);
            
            const attributes = await page.evaluate(el => el.getAttribute('id'), (await page.$x(`/html/body/div[3]/section/div/div[1]/blockquote/div[${index}]`))[0])
            
            let subjectId = '#' + attributes
            let mId = subjectId + ' > p'
            console.log(mId)
            await subject[0].click();
            await page.waitForTimeout(1000);
            let materialLen = await page.$$(mId)
            //console.log(materialLen.length)
            let notes = []
            let tests = []
            let note = true
            async function details(){
                for (let index = 0; index < materialLen.length; index++) {
                    let kl = index + 2
                    let vn = {}
                    
                    try {
                        await page.waitForSelector(`${subjectId} > p:nth-child(${kl}) > a`, {timeout: 5000})
                        await page.waitForTimeout(1000)
                        let sg = await page.$(`${subjectId} > p:nth-child(${kl}) > a`)
                        const txt = await page.evaluate(name => name.innerText, sg);
                        await page.waitForTimeout(1000);
                        // ${subjectId} > p:nth-child(16) > a:nth-child(1)
                        // ${subjectId} > p:nth-child(13) > a
                        const url = await page.evaluate(el => el.getAttribute("href"), sg);
                        vn.name = txt;
                        vn.url = url;
                        //console.log(vn)
                        if(note){notes.push(vn)}else{tests.push(vn)}
                        
                    } catch (error) {
                        kl = kl + 2
                        note = false
                        try {
                            await page.waitForSelector(`${subjectId} > p:nth-child(${kl}) > a:nth-child(1)`)
                        await page.waitForSelector(`${subjectId} > p:nth-child(${kl}) > a:nth-child(2)`)
                        await page.waitForTimeout(1000)
                        let sg1 = await page.$(`${subjectId} > p:nth-child(${kl}) > a:nth-child(1)`)
                        let sg2 = await page.$(`${subjectId} > p:nth-child(${kl}) > a:nth-child(2)`)
                        const txt1 = await page.evaluate(name => name.innerText, sg1);
                        const txt2 = await page.evaluate(name => name.innerText, sg2);
                        await page.waitForTimeout(1000);
                        // ${subjectId} > p:nth-child(16) > a:nth-child(1)
                        // ${subjectId} > p:nth-child(16) > a:nth-child(2)
                        const url1 = await page.evaluate(el => el.getAttribute("href"), sg1);
                        const url2 = await page.evaluate(el => el.getAttribute("href"), sg2);
                        vn.exam = {
                            name: txt1.replace(/ +(?= )/g,''),
                            url: url1
                        };
                        vn.answer = {
                            name: 'Answers',
                            url: url2
                        };
                        
                        //console.log(vn)
                        if(note){notes.push(vn)}else{tests.push(vn)}
                        } catch (error) {
                            console.log('Error Here')
                            console.log(`${subjectId} > p:nth-child(${kl}) > a:nth-child(1)`)
                            continue
                        }
                    }
                }
            }
            async function psh(){
                subj.notes = notes
                subj.tests = tests
                obj.push(subj)
            }
            await details()
            await psh()
            continue

        }
        
}
async function second(){
    await jsonfile.writeFileSync(file, obj, { flag: 'a' })
}
//run()
async function all(){
    try {
        await run()
        await second()
    } catch (error) {
        await second()
    }
}
  
    `14 `

all()