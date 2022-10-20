const puppeteer = require('puppeteer');
const moment = require('moment');
const jsonfile = require('jsonfile');
const { link } = require('fs');
const file = './jobs.json'
let obj = []
function checkNum(n){
    if(n === 1){
        return false
    }else{
        let rem = n % 36
    if(rem === 1){
        return true
    }else{
        return false
    }
    }
    
}
let controller = 0
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
 
    const url1 = 'https://jobsbwana.com/';
        await page.goto(url1);
        console.log(0)
        // await page.setViewport({
        //     width: 1280,
        //     height: 600
        // })
        console.log(1)
        await page.waitForTimeout(5000);
        console.log('start')
        
        await page.waitForTimeout(1000)
       for (let index = 1; index < 943; index++) {
        await page.waitForTimeout(6000);
        let jbDtls = {}
        controller ++
        console.log(`index: ${index}`)
        console.log(`controller: ${controller}`)
        let numU = checkNum(index)
        console.log(numU)
        if(numU){
            console.log(`opening new page`)
            controller = 1
            await page.waitForXPath('/html/body/div/div[4]/div[3]/div/div/div[2]/div[2]/div/div[8]/a')
            let nxtB = await page.$x('/html/body/div/div[4]/div[3]/div/div/div[2]/div[2]/div/div[8]/a')
            await page.waitForTimeout(1000)
            await nxtB[0].click()
            await page.waitForTimeout(8000)
        }
        await page.waitForTimeout(1000)
        await page.waitForXPath(`/html/body/div/div[4]/div[3]/div/div/div[2]/div[1]/div[${controller}]/div/div[2]/div/div/a`)
        let jb = await page.$x(`/html/body/div/div[4]/div[3]/div/div/div[2]/div[1]/div[${controller}]/div/div[2]/div/div/a`)
        await page.waitForTimeout(1000)
        await jb[0].click()
        await page.waitForTimeout(1000)
        await page.waitForSelector('.line-clamp-2')
        let company = await page.$(`.line-clamp-2`);
        let company1 = await page.evaluate(element => element.textContent, company);
        console.log(company1)
        await page.waitForSelector('.text-3xl')
        let title = await page.$('.text-3xl')
        let title1 = await page.evaluate(element => element.textContent, title);
        console.log(title1)
        
        var linkTexts = await page.$$eval(".text-gray-600",
                elements=> elements.map(item=>item.textContent))
       // await console.log(linkTexts)
        let date = linkTexts[0]
        let email = linkTexts[1]
        console.log(date)
        console.log(email)
        // ext-gray-600
        await page.waitForSelector('.prose')
        let details = await page.$(`.prose`);
        let details1 = await page.evaluate(element => element.textContent, details);
        //console.log(details1)
        try {
            await page.waitForSelector('.ext-gray-600')
            let em = await page.$(`.ext-gray-600`);
            let em1 = await page.evaluate(element => element.textContent, em);
            email = em1
            console.log(email)
        } catch (error) {
            
        }
        jbDtls.company = company1
        jbDtls.title = title1
        jbDtls.lastDate = date
        jbDtls.email = email
        jbDtls.details = details1
        //console.log(jbDtls)
        obj.push(jbDtls)
        await page.waitForTimeout(1000)
        await page.goBack();
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
        console.log(obj.length)
        await second()
    }
}
  
  

all()