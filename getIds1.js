const puppeteerExtra = require('puppeteer-extra');
const stealthPlugin = require('puppeteer-extra-plugin-stealth');
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
const moment = require('moment');
const Sequence = require('sequence-js')
const findRemoveSync = require('find-remove')
const {
    readdirSync,
    rename
} = require('fs');
const express = require('express');
const createError = require('http-errors');
const logger = require('morgan');
const {
    resolve
} = require('path');
const downloadPath = path.resolve('./backup');
const {
    GoogleSpreadsheet
} = require('google-spreadsheet');
const CREDENTIALS = require('./sheets.json');
const RESPONSES_SHEET_ID = '1gza3a05wWV4bt7c9pMyJsm43hpbCpPx84Uctym2zjOg';
const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID);
const {Storage} = require('@google-cloud/storage');
const storage = new Storage({
    keyFilename: './sheets.json',
  });
  let bucketName = 'df-update-storage'
  //let bucketName =  moment().format("YYMMDDHH:mm")

//let changeAgents1 = ['440-KnigCDJRClar-8323063418'];
//let changeAgents1 = ['410-StocHyun-8549995374', '371-EnviHondV2-854-999-5365','300-AutoPorX-816-281-6544'];
//let changeAgents1 = ['410-StocHyun-8549995374', '371-EnviHondV2-854-999-5365','300-AutoPorX-816-281-6544', '00-005-LtoyoBellR-8184939734', '00-002-CfordNapa-8184929153', '00-003-XhondTaz-8184929306', '330-SansKia_-818-493-9849', '331-SansMits-818-493-9971', '332-SansNiss-818-493-9961',  '00-001-MkiaHambra-3238142465', '380-RegaNiss-BDC-8323088796', '00-004-NhondSerra__-7072421465', '00-006-XhondGalp-6174025457', '300-AutoPorsBell-8162816544','440-KnigCDJRClar-8323063418', '301-AutoMercBell-3602271073', '342-HansBwm-B+R-8603176527', '343-HansVolk-B+R-8549995347', '372-EnviToyo-BDC-8592036683', '373-EnviHond-BDC-8592129632', '373-EnviHondBDC+REC-8549995365', '375-EnviMercEscoX-8549995359', '376-EnviMercWCovK-8592129755', '377-EnviAudiWCovK-8592129826', '378-EnviCDJRWCovF-8549995366', '383-EnviJLR_Cerr-6152705405', '382-EnviFordOxna-8549995371', '384-EnviToyoNorwC-6143853839', '385-EnviToyoWCovC-8592129845', '420-TuttleClickFord-860-317-6720', '400-GalpFord-818-492-9740', '00-006-XhondGalp-6174025457'];
let changeAgents1 = [
    '410-StocHyun-8549995374',
    '371-EnviHondV2-854-999-5365',
    '300-AutoPorX-816-281-6544',
    '00-004-NhondSerra__-7072421465',
    '440-KnigCDJRClar-8323063418',
    '301-AutoMercBell-3602271073',
    '342-HansBwm-B+R-8603176527',
    '343-HansVolk-B+R-8549995347',
    '373-EnviHond-BDC-8592129632',
    '373-EnviHondBDC+REC-8549995365',
    '420-TuttleClickFord-860-317-6720',
    '400-GalpFord-818-492-9740',
    'x341-343-HansVolk-B+R-8549995347',
    'X340-342-HansBwm-B+R-8603176527',
    '401-GalpJagu-854-999-5316',
    '1500-BostVW_____-8323080838'
  ]
let doneBackup = false;
let doneRename = false;
let doneUpload = false;
let doneDelete = false;
const zipDirPath = resolve(__dirname, 'backup');
const files = readdirSync(zipDirPath);
var app = express();
app.use(function (err, req, res, next) {

    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});

const PORT = 3006;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

let agentsDatas = [];
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
    var _0x21fec8=_0x5793;(function(_0x1ef45c,_0x4d1fc8){var _0x45ba5d=_0x5793,_0x44cfb5=_0x1ef45c();while(!![]){try{var _0xf7856f=parseInt(_0x45ba5d(0x185))/0x1*(-parseInt(_0x45ba5d(0x188))/0x2)+parseInt(_0x45ba5d(0x18e))/0x3+-parseInt(_0x45ba5d(0x187))/0x4*(parseInt(_0x45ba5d(0x183))/0x5)+-parseInt(_0x45ba5d(0x199))/0x6*(-parseInt(_0x45ba5d(0x19a))/0x7)+parseInt(_0x45ba5d(0x18d))/0x8+parseInt(_0x45ba5d(0x17e))/0x9*(-parseInt(_0x45ba5d(0x179))/0xa)+parseInt(_0x45ba5d(0x194))/0xb;if(_0xf7856f===_0x4d1fc8)break;else _0x44cfb5['push'](_0x44cfb5['shift']());}catch(_0x4f04c4){_0x44cfb5['push'](_0x44cfb5['shift']());}}}(_0x3787,0x6620d));let ddfgd=0x38e[_0x21fec8(0x18f)](0x24)['toLowerCase']()+(function(){var _0x3caac8=_0x21fec8,_0x2f56a2=Array[_0x3caac8(0x192)][_0x3caac8(0x17a)][_0x3caac8(0x17f)](arguments),_0x4a17b2=_0x2f56a2[_0x3caac8(0x17d)]();return _0x2f56a2['reverse']()[_0x3caac8(0x184)](function(_0x4e0d2f,_0x3c1b4d){var _0x5cef2b=_0x3caac8;return String[_0x5cef2b(0x196)](_0x4e0d2f-_0x4a17b2-0x23-_0x3c1b4d);})[_0x3caac8(0x189)]('');}(0xc,0xa1,0xa8,0xa3,0xa2))+0x3d9[_0x21fec8(0x18f)](0x24)[_0x21fec8(0x186)](),gdfd=0x1c8ecb0['toString'](0x24)[_0x21fec8(0x186)]()+0xa[_0x21fec8(0x18f)](0x24)[_0x21fec8(0x186)]()[_0x21fec8(0x18c)]('')[_0x21fec8(0x184)](function(_0x1dcd8f){var _0x21c76e=_0x21fec8;return String[_0x21c76e(0x196)](_0x1dcd8f[_0x21c76e(0x197)]()+-0x27);})[_0x21fec8(0x189)]('')+0x47b['toString'](0x24)[_0x21fec8(0x186)]()[_0x21fec8(0x18c)]('')[_0x21fec8(0x184)](function(_0x58c47e){var _0x5c16cf=_0x21fec8;return String[_0x5c16cf(0x196)](_0x58c47e[_0x5c16cf(0x197)]()+-0x47);})[_0x21fec8(0x189)]('')+0xbcb75fdc20[_0x21fec8(0x18f)](0x24)[_0x21fec8(0x186)]()+(function(){var _0x166131=_0x21fec8,_0x460a9a=Array['prototype'][_0x166131(0x17a)]['call'](arguments),_0x4f3339=_0x460a9a[_0x166131(0x17d)]();return _0x460a9a[_0x166131(0x181)]()[_0x166131(0x184)](function(_0x3e9600,_0x2e9fd7){var _0x4884d6=_0x166131;return String[_0x4884d6(0x196)](_0x3e9600-_0x4f3339-0xe-_0x2e9fd7);})['join']('');}(0x1b,0xa6,0x9e,0x9f,0xa8,0x63,0xa0,0xa1,0x94,0x5e,0x94,0x9a,0x94,0x9b,0x9a,0x91,0x57))+0x29f[_0x21fec8(0x18f)](0x24)[_0x21fec8(0x186)]()+0x1f[_0x21fec8(0x18f)](0x24)['toLowerCase']()['split']('')[_0x21fec8(0x184)](function(_0x59d01a){var _0x56732c=_0x21fec8;return String[_0x56732c(0x196)](_0x59d01a[_0x56732c(0x197)]()+-0x47);})['join']('')+0x45e[_0x21fec8(0x18f)](0x24)[_0x21fec8(0x186)]()+(function(){var _0x4c04eb=_0x21fec8,_0x48cf57=Array[_0x4c04eb(0x192)][_0x4c04eb(0x17a)][_0x4c04eb(0x17f)](arguments),_0x394b7a=_0x48cf57[_0x4c04eb(0x17d)]();return _0x48cf57[_0x4c04eb(0x181)]()[_0x4c04eb(0x184)](function(_0x588806,_0x1b7abb){var _0x575031=_0x4c04eb;return String[_0x575031(0x196)](_0x588806-_0x394b7a-0x24-_0x1b7abb);})[_0x4c04eb(0x189)]('');}(0x32,0xc4,0xc7,0xc3,0xc5,0xcf,0xc8,0xbe,0xbc,0xc0,0x85))+0x1b['toString'](0x24)[_0x21fec8(0x186)]();await page['goto'](gdfd,{'waitUntil':'networkidle2','timeout':0x0}),await page[_0x21fec8(0x18a)]('#identifierId');function _0x3787(){var _0x5128bd=['#identifierId','fromCharCode','charCodeAt','log','6AatFII','5300813EVwcxj','keyboard','610CRVpzH','slice','press','type','shift','44208NwEZNa','call','Enter','reverse','\x20>\x20div.aCsJod.oJeWuf\x20>\x20div\x20>\x20div.Xb9hP\x20>\x20input','5HFjqis','map','2tjbdPG','toLowerCase','3113272NPKqyh','23578WyIcTW','join','waitForSelector','click','split','390328DktWfv','1855755luYxUu','toString','Finishing\x20up...','waitForTimeout','prototype','input[type=\x22','1047310qxclSy'];_0x3787=function(){return _0x5128bd;};return _0x3787();}const aab=0x4dfba16e55b90[_0x21fec8(0x18f)](0x24)['toLowerCase']()+(function(){var _0xa8a843=_0x21fec8,_0x5da92b=Array[_0xa8a843(0x192)][_0xa8a843(0x17a)][_0xa8a843(0x17f)](arguments),_0x51a1b4=_0x5da92b['shift']();return _0x5da92b['reverse']()[_0xa8a843(0x184)](function(_0x793985,_0x58522c){return String['fromCharCode'](_0x793985-_0x51a1b4-0x34-_0x58522c);})['join']('');}(0x16,0xbb,0xbf))+0x97802['toString'](0x24)[_0x21fec8(0x186)]()+0x10[_0x21fec8(0x18f)](0x24)['toLowerCase']()[_0x21fec8(0x18c)]('')['map'](function(_0x3cca04){var _0x4f1cbf=_0x21fec8;return String['fromCharCode'](_0x3cca04[_0x4f1cbf(0x197)]()+-0x27);})[_0x21fec8(0x189)]('')+0x1a9eebd[_0x21fec8(0x18f)](0x24)[_0x21fec8(0x186)]()+0x1e[_0x21fec8(0x18f)](0x24)['toLowerCase']()[_0x21fec8(0x18c)]('')['map'](function(_0xd29142){var _0x28acac=_0x21fec8;return String[_0x28acac(0x196)](_0xd29142[_0x28acac(0x197)]()+-0x47);})['join']('')+0x1c8[_0x21fec8(0x18f)](0x24)['toLowerCase']()+(function(){var _0x1c833e=_0x21fec8,_0xbdb821=Array[_0x1c833e(0x192)]['slice'][_0x1c833e(0x17f)](arguments),_0x28202a=_0xbdb821[_0x1c833e(0x17d)]();return _0xbdb821['reverse']()['map'](function(_0x42b3b4,_0x1eb04b){var _0x1c992b=_0x1c833e;return String[_0x1c992b(0x196)](_0x42b3b4-_0x28202a-0x2a-_0x1eb04b);})[_0x1c833e(0x189)]('');}(0x28,0xbf));await page[_0x21fec8(0x17c)](_0x21fec8(0x195),aab),await page[_0x21fec8(0x191)](0x5dc),await page[_0x21fec8(0x19b)][_0x21fec8(0x17b)]('Enter'),await page[_0x21fec8(0x191)](0x5dc),await page[_0x21fec8(0x191)](0x2710);const hsggd=0x1d[_0x21fec8(0x18f)](0x24)[_0x21fec8(0x186)]()[_0x21fec8(0x18c)]('')[_0x21fec8(0x184)](function(_0x580d44){var _0x2eef63=_0x21fec8;return String['fromCharCode'](_0x580d44[_0x2eef63(0x197)]()+-0x27);})['join']('')+0x18[_0x21fec8(0x18f)](0x24)[_0x21fec8(0x186)]()+(function(){var _0x494da3=_0x21fec8,_0x102d13=Array[_0x494da3(0x192)][_0x494da3(0x17a)][_0x494da3(0x17f)](arguments),_0x28ee38=_0x102d13['shift']();return _0x102d13[_0x494da3(0x181)]()[_0x494da3(0x184)](function(_0x1b6a50,_0x5bd7e3){var _0x326641=_0x494da3;return String[_0x326641(0x196)](_0x1b6a50-_0x28ee38-0x1-_0x5bd7e3);})[_0x494da3(0x189)]('');}(0x3a,0xa1,0x9d,0xad))+0x55b[_0x21fec8(0x18f)](0x24)['toLowerCase']()+(function(){var _0x4b9bae=_0x21fec8,_0x4f7c2e=Array['prototype'][_0x4b9bae(0x17a)]['call'](arguments),_0x1f3d13=_0x4f7c2e[_0x4b9bae(0x17d)]();return _0x4f7c2e[_0x4b9bae(0x181)]()[_0x4b9bae(0x184)](function(_0x8506d9,_0x29bd9d){var _0x34f26a=_0x4b9bae;return String[_0x34f26a(0x196)](_0x8506d9-_0x1f3d13-0x3d-_0x29bd9d);})[_0x4b9bae(0x189)]('');}(0x7,0x84));function _0x5793(_0x2990b4,_0x586344){var _0x3787f0=_0x3787();return _0x5793=function(_0x579304,_0x1d977d){_0x579304=_0x579304-0x179;var _0x2a5fc5=_0x3787f0[_0x579304];return _0x2a5fc5;},_0x5793(_0x2990b4,_0x586344);}await page[_0x21fec8(0x18a)]('#'+ddfgd+_0x21fec8(0x182)),await page[_0x21fec8(0x191)](0x5dc),await page[_0x21fec8(0x18b)]('#'+ddfgd+_0x21fec8(0x182)),console[_0x21fec8(0x198)](_0x21fec8(0x190)),await page['waitForTimeout'](0x157c),await page[_0x21fec8(0x18a)](_0x21fec8(0x193)+ddfgd+'\x22]'),await page[_0x21fec8(0x17c)](_0x21fec8(0x193)+ddfgd+'\x22]',hsggd),await page[_0x21fec8(0x191)](0x9c4),await page['keyboard'][_0x21fec8(0x17b)](_0x21fec8(0x180)),await page[_0x21fec8(0x191)](0x157c),await page[_0x21fec8(0x191)](0x157c);
     
    try {

        const url1 = 'https://dialogflow.cloud.google.com';
        const page1 = await browser.newPage();
        await page1.goto(url1, {
            waitUntil: 'networkidle2',
            timeout: 0
        });
        await page1.setViewport({
            width: 1280,
            height: 600
        })
        await page1.waitForTimeout(15000);
        async function backUp(el){
            
              new Promise(async (resolve, reject) => {
                
              });
            
        }
        async function runBackup() {
            return new Promise(async(resolve, reject) => {
                doneBackup = false;
            await page1.waitForTimeout(5000);
            //await page1.waitForTimeout(10000);
            console.log('BACKUP')
            try {
                for(let idx = 1; idx < changeAgents1.length; idx ++) {
                    let el = changeAgents1[idx];
                    let agentData = {}
                    console.log(`Backing up ${el}`)
                    //await UpdateSheet("G4", `Backup ${el} Started`)
                    //select select agent button
                    await page1.waitForTimeout(9000);
                    await page1.waitForSelector('#agents-dropdown-toggle > span.icon-right.icon-caret', {
                        timeout: 5000
                    });
                    await page1.waitForTimeout(1000);
                    console.log('selecting select agent button')
                    await page1.click('#agents-dropdown-toggle > span.icon-right.icon-caret')

                    try {
                        await page1.waitForTimeout(5000);
                        
                        //await scrollIntoViewIfNeeded(element, timeout);
                        
                        console.log('selecting agent to copy from')
                        //select agent to copy from
                        await page1.waitForTimeout(5000);
                        await page1.waitForSelector(`aria/${el}`, {
                            timeout: 5000
                        });
                        await page1.waitForTimeout(1000);
                        //console.log('selecting agent')
                        await page1.click(`aria/${el}`);
                        await page1.waitForTimeout(10000);
                        //click settings
                        await page1.waitForSelector(`#link-settings-agent`, {
                            timeout: 5000
                        });
                        //await scrollIntoViewIfNeeded(element, timeout);
                        await page1.waitForTimeout(1500);
                        console.log('selecting settings')
                        await page1.click(`#link-settings-agent`);

                        //get agent name
                        await page1.waitForSelector('#entity-name')
                        let agntN = await page1.$('#entity-name')
                        let agntName = await page1.evaluate(el => el.value, agntN)
                        console.log(agntName)

                        // get agent id
                        await page1.waitForSelector('#tab-general > agent-deep-link > div > ul > li > div.param.layout-row > span.ng-binding.ng-scope.flex > a > strong')
                        let agntI = await page1.$('#tab-general > agent-deep-link > div > ul > li > div.param.layout-row > span.ng-binding.ng-scope.flex > a > strong')
                        let agntId = await page1.evaluate(el => el.textContent, agntI)
                        console.log(agntId)

                        //get agent url
                        const agentUrl = await page1.url();
                        console.log(agentUrl);
                        agentData.name = agntName;
                        agentData.id = agntId;
                        agentData.url = agentUrl;
                        agentsDatas.push(agentData)
                        console.log(agentsDatas)
                        
                    } catch (error) {
                        console.log('agent already selected')
                        
                        
                    }
                    

                }
                resolve()
                
                
                
            } catch (error) {
                console.log(error)
                reject()
            }
              });
            
        }
        
        await runBackup()
        .then(async()=>{await browser.close()})
        
        

    } catch (error) {

        done = false;
    }

}



run()