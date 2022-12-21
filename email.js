const puppeteer = require('puppeteer');

async function run(array){
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
    try {
        const url = 'https://www.namecheap.com/myaccount/login/?ReturnUrl=%2f'
        await page.goto(url, {
            waitUntil: 'networkidle2',
            timeout: 0
        });
        await page.setViewport({
            width: 1280,
            height: 600
        })
        let uN = 'sirneshangwenzuwa'
        let pW = '#Robert1988!'
        let uN1 = 'drwinns'
        let pW1 = 'higibertigibet'
        await page.waitForTimeout(5000);
        await page.waitForSelector('#ctl00_ctl00_ctl00_ctl00_base_content_web_base_content_home_content_page_content_left_ctl02_loginDiv > ul > li > fieldset > div:nth-child(2) > input');
        await page.type('#ctl00_ctl00_ctl00_ctl00_base_content_web_base_content_home_content_page_content_left_ctl02_loginDiv > ul > li > fieldset > div:nth-child(2) > input', uN1);
        await page.waitForTimeout(2000);
        await page.waitForSelector('#ctl00_ctl00_ctl00_ctl00_base_content_web_base_content_home_content_page_content_left_ctl02_loginDiv > ul > li > fieldset > div:nth-child(3) > input');
        await page.type('#ctl00_ctl00_ctl00_ctl00_base_content_web_base_content_home_content_page_content_left_ctl02_loginDiv > ul > li > fieldset > div:nth-child(3) > input', pW1);
        await page.waitForTimeout(2000);
        await page.waitForSelector('#ctl00_ctl00_ctl00_ctl00_base_content_web_base_content_home_content_page_content_left_ctl02_LoginButton')
        await page.click('#ctl00_ctl00_ctl00_ctl00_base_content_web_base_content_home_content_page_content_left_ctl02_LoginButton')
        await page.waitForNavigation();
        await page.waitForTimeout(25000)
        await page.waitForSelector('body > fragment:nth-child(2) > layout-header > div > header > div > div.gb-top-block > div > div > div.gb-top-block__nav.gb-col > div.gb-dropdown.gb-dropdown--bubble.gb-dropdown--user > a');
        let user = await page.$('body > fragment:nth-child(2) > layout-header > div > header > div > div.gb-top-block > div > div > div.gb-top-block__nav.gb-col > div.gb-dropdown.gb-dropdown--bubble.gb-dropdown--user > a', el => el.textContent);
        await page.hover('body > fragment:nth-child(2) > layout-header > div > header > div > div.gb-top-block > div > div > div.gb-top-block__nav.gb-col > div.gb-dropdown.gb-dropdown--bubble.gb-dropdown--user > a');

        await page.waitForTimeout(2000);
        await page.waitForSelector('body > fragment:nth-child(2) > layout-header > div > header > div > div.gb-top-block > div > div > div.gb-top-block__nav.gb-col > div.gb-dropdown.gb-dropdown--bubble.gb-dropdown--user > div > div > div > ul > li:nth-child(1) > a')
        await page.click('body > fragment:nth-child(2) > layout-header > div > header > div > div.gb-top-block > div > div > div.gb-top-block__nav.gb-col > div.gb-dropdown.gb-dropdown--bubble.gb-dropdown--user > div > div > div > ul > li:nth-child(1) > a')
        await page.waitForNavigation();
        await page.waitForTimeout(15000);

        //go to cpanel
        await page.waitForSelector('#maincontent > div > div:nth-child(5) > div > div > div.dl-wrapper.normal-view > div > div.row > div > table > tbody:nth-child(3) > tr.item > td.services > div:nth-child(3) > a')
        await page.hover('#maincontent > div > div:nth-child(5) > div > div > div.dl-wrapper.normal-view > div > div.row > div > table > tbody:nth-child(3) > tr.item > td.services > div:nth-child(3) > a')
        await page.waitForTimeout(2000);

        await page.waitForSelector('#tip-5 > div > ul.app-actions > li:nth-child(3) > a')
        await page.click('#tip-5 > div > ul.app-actions > li:nth-child(3) > a')
        await page.waitForNavigation();

        const page2 = pages[pages.length - 1];
        //go to email
        await page2.waitForTimeout(15000);
        await page2.waitForSelector('#item_email_accounts')
        await page2.click('#item_email_accounts')
        await page2.waitForNavigation();
        await page2.waitForTimeout(15000);

        //create email
        await page2.waitForSelector('#btnCreateEmailAccount')
        await page2.click('#btnCreateEmailAccount')
        await page2.waitForNavigation();
        await page2.waitForTimeout(15000);

        async function createEmail(){
            
        }

        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            const emailname = element.emailname;
            const emailpwd = element.emailpwd;
            if(index === 0){
               //fill email
                await page2.waitForSelector('#txtUserName')
                await page2.type('#txtUserName', emailname)
                await page2.waitForTimeout(2000);

                await page2.waitForSelector('#txtEmailPassword')
                await page2.type('#txtEmailPassword', emailpwd)
                await page2.waitForTimeout(2000);

                // click stay on page 
                await page2.waitForSelector('#stay')
                await page2.click('#stay')
                await page2.waitForTimeout(2000);

                await page2.waitForSelector('#btnCreateEmailAccount')
                await page2.click('#btnCreateEmailAccount')
                await page2.waitForTimeout(10000);
            }else{
                //fill email
                await page2.waitForSelector('#txtUserName')
                await page2.type('#txtUserName', emailname)
                await page2.waitForTimeout(2000);

                await page2.waitForSelector('#txtEmailPassword')
                await page2.type('#txtEmailPassword', emailpwd)
                await page2.waitForTimeout(2000);

                await page2.waitForSelector('#btnCreateEmailAccount')
                await page2.click('#btnCreateEmailAccount')
                await page2.waitForTimeout(10000);
            }
            
        }
        
        await page2.waitForTimeout(10000);
        await browser.close();
        

    } catch (error) {
        
    }
}

run()