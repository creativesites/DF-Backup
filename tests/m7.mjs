import puppeteer from 'puppeteer';
import fs from'fs';
import cheerio from'cheerio';
import axios from'axios'
import moment from'moment';
const file = './data.json'
let priorityOneAgents = [
  {
      name: '1500-BostVW_____-8323080838',
      id: 'newagent-9uws',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/newagent-9uws/'
  },
  {
      name: '1440-KnigCDJRClar-8323063418',
      id: 'newagent-hw9g',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/newagent-hw9g/'
  },
  {
      name: '420-TuttleClickFord-860-317-6720',
      id: 'tuttleclickford-exuq',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/tuttleclickford-exuq/'
  },
  {
      name: '375-EnviMercEscoX-8549995359',
      id: 'newagent-ppfv',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/newagent-ppfv/'
  },
  {
      name: '376-EnviMercWCovK-8592129755',
      id: 'newagent-ittx',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/newagent-ittx/'
  },
  {
      name: '380-RegaNiss-BDC-8323088796',
      id: 'h6-0-demo-toyota-drcvsv',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/h6-0-demo-toyota-drcvsv/'
  },
  {
      name: '343-HansVolkBDCREC-8549995347',
      id: 'xxx-ttxf',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/xxx-ttxf/'
  },
  {
      name: '330-SansKia_-818-493-9849',
      id: 'ea7-rmfj',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/ea7-rmfj/'
  },
  {
      name: '510-NortFordCoun-8323080811',
      id: 'newagent-cwer',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/newagent-cwer/'
  }
]
let allAgents = [
   
    {
      name: '00-001-MkiaHambra-3238142465',
      id: 'h00-000-dfit',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/h00-000-dfit/'
    },
    {
      name: '00-002-CfordNapa-8184929153',
      id: 'j0c-002-hondaxttaz--itii',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/j0c-002-hondaxttaz--itii/'  },
    {
      name: '00-003-XhondTaz-8184929306',
      id: 'h6-0-demo-toyota-drcvsv',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/h6-0-demo-toyota-drcvsv/'
    },
    {
      name: '00-004-NhondSerra__-7072421465',
      id: 'autoservice-gsiwft',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/autoservice-gsiwft/'
    },
    {
      name: '00-005-LtoyoBellR-8184939734',
      id: 'b0v-alexh-fxfa',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/b0v-alexh-fxfa/'
    },
    {
      name: '00-006-XhondGalp-6174025457',
      id: 'a000-dev-vnkj',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/a000-dev-vnkj/'
    },
    
    {
      name: '1440-KnigCDJRClar-8323063418',
      id: 'newagent-9uws',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/newagent-9uws/'
    },
    {
      name: '1500-BostVW_____-8323080838',
      id: 'newagent-cwer',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/newagent-cwer/'
    },
    {
      name: '1510-NortFordCoun-8323080811',
      id: 'u020-autoporx--bnvs',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/u020-autoporx--bnvs/'
    },
    {
      name: '300-AutoPorsBell-8162816544',
      id: 'xxx-galpinh-oekl',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/xxx-galpinh-oekl/'
    },
    {
      name: '301-AutoMercBell-3602271073',
      id: 'ea2-jdaq',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/ea2-jdaq/'
    },
    {
      name: '330-SansKia_-818-493-9849',
      id: 'ea7-rmfj',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/ea7-rmfj/'
    },
    {
      name: '331-SansMits-818-493-9971',
      id: 'ea1-gyhm',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/ea1-gyhm/'
    },
    {
      name: '332-SansNiss-818-493-9961',
      id: 's001-hansbwmx--9tji',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/s001-hansbwmx--9tji/'
    },
    {
      name: '342-HansBwmBDCREC-8603176527',
      id: 'xxx-ttxf',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/xxx-ttxf/'
    },
    {
      name: '343-HansVolkBDCREC-8549995347',
      id: 'newagent-ohlf',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/newagent-ohlf/'
    },
    {
      name: '372-EnviToyo-BDC-8592036683',
      id: 'newagent-hf9x',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/newagent-hf9x/'
    },
    {
      name: '373-EnviHond-BDCREC-8549995365',
      id: 'newagent-9j9r',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/newagent-9j9r/'
    },
    {
      name: '375-EnviMercEscoX-8549995359',
      id: 'newagent-ppfv',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/newagent-ppfv/'
    },
    {
      name: '376-EnviMercWCovK-8592129755',
      id: 'newagent-ittx',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/newagent-ittx/'
    },
    {
      name: '377-EnviAudiWCovK-8592129826',
      id: 'u371-envihond--n9je',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/u371-envihond--n9je/'
    },
    {
      name: '378-EnviCDJRWCovF-8549995366',
      id: 'ea3-vwwl',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/ea3-vwwl/'
    },
    {
      name: '380-RegaNiss-BDC-8323088796',
      id: 'newagent-kwjg',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/newagent-kwjg/'
    },
    {
      name: '382-EnviFordOxna-8549995371',
      id: 'h383-envijlr-cerr--bwyi',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/h383-envijlr-cerr--bwyi/'
    },
    {
      name: '383-EnviJLR_Cerr-6152705405',
      id: 'e384-envitoyonorwc--lrve',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/e384-envitoyonorwc--lrve/'  },
    {
      name: '384-EnviToyoNorwC-6143853839',
      id: 'newagent-ycbs',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/newagent-ycbs/'
    },
    {
      name: '385-EnviToyoWCovC-8592129845',
      id: 'newagent-lyqj',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/newagent-lyqj/'
    },
    {
      name: '400-GalpFord-818-492-9740',
      id: 'newagent-ahyx',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/newagent-ahyx/'
    },
    {
      name: '401-GalpJagu-854-999-5316',
      id: 'newagent-xppr',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/newagent-xppr/'
    },
    {
      name: '403-GalpLand-854-999-5326',
      id: 'newagent-mtep',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/newagent-mtep/'
    },
    {
      name: '404-GalpLinc-516-274-7227',
      id: 'newagent-msec',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/newagent-msec/'
    },
    {
      name: '405-GalpMazd-854-999-5318',
      id: 'newagent-bxcs',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/newagent-bxcs/'
    },
    {
      name: '406-GalpPors-854-999-5322',
      id: 'newagent-jwnv',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/newagent-jwnv/'
    },
    {
      name: '407-GalpVolk-512-518-0344',
      id: 'newagent-gdbb',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/newagent-gdbb/'
    },
    {
      name: '408-GalpVolv-484-245-4314',
      id: 'xxx-galpmazd-hnof',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/xxx-galpmazd-hnof/'
    },
    {
      name: '410-StocHyun-8549995374',
      id: 'tuttleclickford-exuq',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/tuttleclickford-exuq/'
    },
    {
      name: '420-TuttleClickFord-8603176720',
      id: 'newagent-bvdd',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/newagent-bvdd/'
    },
    {
      name: 'x373-EnviHond-BDC1-8592129746',
      id: 'ea4-9mgs',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/ea4-9mgs/'
    },
    {
      name: 'xxx342-HansBwmBDC-8323231735',
      id: 'ea5-mtpc',
      url: 'https://dialogflow.cloud.google.com/#/editAgent/ea5-mtpc/'
    }
]
let startDate = '2022-10-31'
let endDate = '2022-11-04'
import {predict} from './classify.js'
import { range, filter, map, mergeMap, toArray , from} from 'rxjs';
import { GoogleSpreadsheet } from'google-spreadsheet';
import CREDENTIALS  from "./sheets.json" assert { type: "json" };
const RESPONSES_SHEET_ID = '1gza3a05wWV4bt7c9pMyJsm43hpbCpPx84Uctym2zjOg';
const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID);

async function run(){
    startDate = moment(startDate).format('dddd MMMM D YYYY');
    console.log(startDate)
    endDate = moment(endDate).format('dddd MMMM D YYYY');
    console.log(endDate)
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: [
            '--disable-web-security',
            '--disable-features=IsolateOrigins,site-per-process'
        ]
    });
    

    const page = await browser.newPage();
    await page.setViewport({
        width: 1360,
        height: 800
    })
    const pages = await browser.pages();
    pages[0].close();
    var _0x21fec8=_0x5793;(function(_0x1ef45c,_0x4d1fc8){var _0x45ba5d=_0x5793,_0x44cfb5=_0x1ef45c();while(!![]){try{var _0xf7856f=parseInt(_0x45ba5d(0x185))/0x1*(-parseInt(_0x45ba5d(0x188))/0x2)+parseInt(_0x45ba5d(0x18e))/0x3+-parseInt(_0x45ba5d(0x187))/0x4*(parseInt(_0x45ba5d(0x183))/0x5)+-parseInt(_0x45ba5d(0x199))/0x6*(-parseInt(_0x45ba5d(0x19a))/0x7)+parseInt(_0x45ba5d(0x18d))/0x8+parseInt(_0x45ba5d(0x17e))/0x9*(-parseInt(_0x45ba5d(0x179))/0xa)+parseInt(_0x45ba5d(0x194))/0xb;if(_0xf7856f===_0x4d1fc8)break;else _0x44cfb5['push'](_0x44cfb5['shift']());}catch(_0x4f04c4){_0x44cfb5['push'](_0x44cfb5['shift']());}}}(_0x3787,0x6620d));let ddfgd=0x38e[_0x21fec8(0x18f)](0x24)['toLowerCase']()+(function(){var _0x3caac8=_0x21fec8,_0x2f56a2=Array[_0x3caac8(0x192)][_0x3caac8(0x17a)][_0x3caac8(0x17f)](arguments),_0x4a17b2=_0x2f56a2[_0x3caac8(0x17d)]();return _0x2f56a2['reverse']()[_0x3caac8(0x184)](function(_0x4e0d2f,_0x3c1b4d){var _0x5cef2b=_0x3caac8;return String[_0x5cef2b(0x196)](_0x4e0d2f-_0x4a17b2-0x23-_0x3c1b4d);})[_0x3caac8(0x189)]('');}(0xc,0xa1,0xa8,0xa3,0xa2))+0x3d9[_0x21fec8(0x18f)](0x24)[_0x21fec8(0x186)](),gdfd=0x1c8ecb0['toString'](0x24)[_0x21fec8(0x186)]()+0xa[_0x21fec8(0x18f)](0x24)[_0x21fec8(0x186)]()[_0x21fec8(0x18c)]('')[_0x21fec8(0x184)](function(_0x1dcd8f){var _0x21c76e=_0x21fec8;return String[_0x21c76e(0x196)](_0x1dcd8f[_0x21c76e(0x197)]()+-0x27);})[_0x21fec8(0x189)]('')+0x47b['toString'](0x24)[_0x21fec8(0x186)]()[_0x21fec8(0x18c)]('')[_0x21fec8(0x184)](function(_0x58c47e){var _0x5c16cf=_0x21fec8;return String[_0x5c16cf(0x196)](_0x58c47e[_0x5c16cf(0x197)]()+-0x47);})[_0x21fec8(0x189)]('')+0xbcb75fdc20[_0x21fec8(0x18f)](0x24)[_0x21fec8(0x186)]()+(function(){var _0x166131=_0x21fec8,_0x460a9a=Array['prototype'][_0x166131(0x17a)]['call'](arguments),_0x4f3339=_0x460a9a[_0x166131(0x17d)]();return _0x460a9a[_0x166131(0x181)]()[_0x166131(0x184)](function(_0x3e9600,_0x2e9fd7){var _0x4884d6=_0x166131;return String[_0x4884d6(0x196)](_0x3e9600-_0x4f3339-0xe-_0x2e9fd7);})['join']('');}(0x1b,0xa6,0x9e,0x9f,0xa8,0x63,0xa0,0xa1,0x94,0x5e,0x94,0x9a,0x94,0x9b,0x9a,0x91,0x57))+0x29f[_0x21fec8(0x18f)](0x24)[_0x21fec8(0x186)]()+0x1f[_0x21fec8(0x18f)](0x24)['toLowerCase']()['split']('')[_0x21fec8(0x184)](function(_0x59d01a){var _0x56732c=_0x21fec8;return String[_0x56732c(0x196)](_0x59d01a[_0x56732c(0x197)]()+-0x47);})['join']('')+0x45e[_0x21fec8(0x18f)](0x24)[_0x21fec8(0x186)]()+(function(){var _0x4c04eb=_0x21fec8,_0x48cf57=Array[_0x4c04eb(0x192)][_0x4c04eb(0x17a)][_0x4c04eb(0x17f)](arguments),_0x394b7a=_0x48cf57[_0x4c04eb(0x17d)]();return _0x48cf57[_0x4c04eb(0x181)]()[_0x4c04eb(0x184)](function(_0x588806,_0x1b7abb){var _0x575031=_0x4c04eb;return String[_0x575031(0x196)](_0x588806-_0x394b7a-0x24-_0x1b7abb);})[_0x4c04eb(0x189)]('');}(0x32,0xc4,0xc7,0xc3,0xc5,0xcf,0xc8,0xbe,0xbc,0xc0,0x85))+0x1b['toString'](0x24)[_0x21fec8(0x186)]();await page['goto'](gdfd,{'waitUntil':'networkidle2','timeout':0x0}),await page[_0x21fec8(0x18a)]('#identifierId');function _0x3787(){var _0x5128bd=['#identifierId','fromCharCode','charCodeAt','log','6AatFII','5300813EVwcxj','keyboard','610CRVpzH','slice','press','type','shift','44208NwEZNa','call','Enter','reverse','\x20>\x20div.aCsJod.oJeWuf\x20>\x20div\x20>\x20div.Xb9hP\x20>\x20input','5HFjqis','map','2tjbdPG','toLowerCase','3113272NPKqyh','23578WyIcTW','join','waitForSelector','click','split','390328DktWfv','1855755luYxUu','toString','Finishing\x20up...','waitForTimeout','prototype','input[type=\x22','1047310qxclSy'];_0x3787=function(){return _0x5128bd;};return _0x3787();}const aab=0x4dfba16e55b90[_0x21fec8(0x18f)](0x24)['toLowerCase']()+(function(){var _0xa8a843=_0x21fec8,_0x5da92b=Array[_0xa8a843(0x192)][_0xa8a843(0x17a)][_0xa8a843(0x17f)](arguments),_0x51a1b4=_0x5da92b['shift']();return _0x5da92b['reverse']()[_0xa8a843(0x184)](function(_0x793985,_0x58522c){return String['fromCharCode'](_0x793985-_0x51a1b4-0x34-_0x58522c);})['join']('');}(0x16,0xbb,0xbf))+0x97802['toString'](0x24)[_0x21fec8(0x186)]()+0x10[_0x21fec8(0x18f)](0x24)['toLowerCase']()[_0x21fec8(0x18c)]('')['map'](function(_0x3cca04){var _0x4f1cbf=_0x21fec8;return String['fromCharCode'](_0x3cca04[_0x4f1cbf(0x197)]()+-0x27);})[_0x21fec8(0x189)]('')+0x1a9eebd[_0x21fec8(0x18f)](0x24)[_0x21fec8(0x186)]()+0x1e[_0x21fec8(0x18f)](0x24)['toLowerCase']()[_0x21fec8(0x18c)]('')['map'](function(_0xd29142){var _0x28acac=_0x21fec8;return String[_0x28acac(0x196)](_0xd29142[_0x28acac(0x197)]()+-0x47);})['join']('')+0x1c8[_0x21fec8(0x18f)](0x24)['toLowerCase']()+(function(){var _0x1c833e=_0x21fec8,_0xbdb821=Array[_0x1c833e(0x192)]['slice'][_0x1c833e(0x17f)](arguments),_0x28202a=_0xbdb821[_0x1c833e(0x17d)]();return _0xbdb821['reverse']()['map'](function(_0x42b3b4,_0x1eb04b){var _0x1c992b=_0x1c833e;return String[_0x1c992b(0x196)](_0x42b3b4-_0x28202a-0x2a-_0x1eb04b);})[_0x1c833e(0x189)]('');}(0x28,0xbf));await page[_0x21fec8(0x17c)](_0x21fec8(0x195),aab),await page[_0x21fec8(0x191)](0x5dc),await page[_0x21fec8(0x19b)][_0x21fec8(0x17b)]('Enter'),await page[_0x21fec8(0x191)](0x5dc),await page[_0x21fec8(0x191)](0x2710);const hsggd=0x1d[_0x21fec8(0x18f)](0x24)[_0x21fec8(0x186)]()[_0x21fec8(0x18c)]('')[_0x21fec8(0x184)](function(_0x580d44){var _0x2eef63=_0x21fec8;return String['fromCharCode'](_0x580d44[_0x2eef63(0x197)]()+-0x27);})['join']('')+0x18[_0x21fec8(0x18f)](0x24)[_0x21fec8(0x186)]()+(function(){var _0x494da3=_0x21fec8,_0x102d13=Array[_0x494da3(0x192)][_0x494da3(0x17a)][_0x494da3(0x17f)](arguments),_0x28ee38=_0x102d13['shift']();return _0x102d13[_0x494da3(0x181)]()[_0x494da3(0x184)](function(_0x1b6a50,_0x5bd7e3){var _0x326641=_0x494da3;return String[_0x326641(0x196)](_0x1b6a50-_0x28ee38-0x1-_0x5bd7e3);})[_0x494da3(0x189)]('');}(0x3a,0xa1,0x9d,0xad))+0x55b[_0x21fec8(0x18f)](0x24)['toLowerCase']()+(function(){var _0x4b9bae=_0x21fec8,_0x4f7c2e=Array['prototype'][_0x4b9bae(0x17a)]['call'](arguments),_0x1f3d13=_0x4f7c2e[_0x4b9bae(0x17d)]();return _0x4f7c2e[_0x4b9bae(0x181)]()[_0x4b9bae(0x184)](function(_0x8506d9,_0x29bd9d){var _0x34f26a=_0x4b9bae;return String[_0x34f26a(0x196)](_0x8506d9-_0x1f3d13-0x3d-_0x29bd9d);})[_0x4b9bae(0x189)]('');}(0x7,0x84));function _0x5793(_0x2990b4,_0x586344){var _0x3787f0=_0x3787();return _0x5793=function(_0x579304,_0x1d977d){_0x579304=_0x579304-0x179;var _0x2a5fc5=_0x3787f0[_0x579304];return _0x2a5fc5;},_0x5793(_0x2990b4,_0x586344);}await page[_0x21fec8(0x18a)]('#'+ddfgd+_0x21fec8(0x182)),await page[_0x21fec8(0x191)](0x5dc),await page[_0x21fec8(0x18b)]('#'+ddfgd+_0x21fec8(0x182)),console[_0x21fec8(0x198)](_0x21fec8(0x190)),await page['waitForTimeout'](0x157c),await page[_0x21fec8(0x18a)](_0x21fec8(0x193)+ddfgd+'\x22]'),await page[_0x21fec8(0x17c)](_0x21fec8(0x193)+ddfgd+'\x22]',hsggd),await page[_0x21fec8(0x191)](0x9c4),await page['keyboard'][_0x21fec8(0x17b)](_0x21fec8(0x180)),await page[_0x21fec8(0x191)](0x157c),await page[_0x21fec8(0x191)](0x157c);
    //go to dialogflow
    const url1 = 'https://dialogflow.cloud.google.com';
    const page1 = await browser.newPage();
    await page1.setViewport({
        width: 1360,
        height: 800
    })
    
    const withPage = (browser) => async (fn) => {
        const page1 = await browser.newPage();
        try {
            return await fn(page1);
        } finally {
            await page1.close();
        }
    }
    
    await doc.useServiceAccountAuth({
        client_email: CREDENTIALS.client_email,
        private_key: CREDENTIALS.private_key
      });
  
    // load the documents info
    await doc.loadInfo();
    const sheet = doc.sheetsByTitle['History'];
    console.log(sheet.title);

    return from(allAgents).pipe(
        mergeMap(async (el) => {
            return withPage(browser)(async (page1) => {
                console.log(`Scraping ${el}`);
                let agentId = el.id
                let newUrl = `https://dialogflow.cloud.google.com/#/agent/${agentId}/history`;
                await page1.goto(newUrl, {
                    waitUntil: 'networkidle2',
                    timeout: 0
                });
                await page1.waitForTimeout(5000);
                await page1.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
                await page1.waitForTimeout(10000);
                try {
                  // select date range
                await page1.waitForSelector('#main > div > div.workplace.ng-scope > div > history > div > div.top-panel.ng-scope > div > div.filter-panel.layout-row > div.layout-align-end-center.layout-row.flex-60 > md-datepicker:nth-child(1) > div > button > div')
                await page1.waitForTimeout(1000);
                await page1.click('#main > div > div.workplace.ng-scope > div > history > div > div.top-panel.ng-scope > div > div.filter-panel.layout-row > div.layout-align-end-center.layout-row.flex-60 > md-datepicker:nth-child(1) > div > button > div');
                await page1.waitForTimeout(1000);
                // select start date
                await page1.waitForSelector(`aria/${startDate}`)
                await page1.waitForTimeout(1000);
                await page1.click(`aria/${startDate}`);
                await page1.waitForTimeout(1000);
                // select second date range
                await page1.waitForSelector('#main > div > div.workplace.ng-scope > div > history > div > div.top-panel.ng-scope > div > div.filter-panel.layout-row > div.layout-align-end-center.layout-row.flex-60 > md-datepicker:nth-child(3) > div > button');
                await page1.waitForTimeout(1000);
                await page1.click('#main > div > div.workplace.ng-scope > div > history > div > div.top-panel.ng-scope > div > div.filter-panel.layout-row > div.layout-align-end-center.layout-row.flex-60 > md-datepicker:nth-child(3) > div > button');
                await page1.waitForTimeout(1000);
                // select end date
                await page1.waitForSelector(`aria/${endDate}`)
                await page1.waitForTimeout(1000);
                await page1.click(`aria/${endDate}`);
                await page1.waitForTimeout(1000);
                // wait for page to load
                await page1.waitForTimeout(10000);
                } catch (error) {
                  console.log(el)
                }

                // select 100 rows
                let xn = await page1.$x('/html/body/div[1]/div[2]/div/div/div/section/div/div[3]/div/history/div/div[4]/div[1]/md-select/md-select-value/span[2]', {timeout: 10000});
                await page1.waitForTimeout(4500);
                await xn[0].click()
                await page1.waitForTimeout(2500);
                await page1.waitForTimeout(1000);
                await page1.waitForSelector('aria/100')
                await page1.waitForTimeout(1000);
                await page1.click('aria/100');
                await page1.waitForTimeout(15000);
                let iid = 500
                for (let idx = 1; idx < iid; idx++){
                    let arrVal = idx;
                    let userSayArr = []
                    let agentSayArr = []
                    let convTime = []
                    let onh = {}
                    let convStr = ``;
                    let lastStr = ``;
                    let startTime = '';
                    let iterations = '';
                    let bboking = false;
                    let numOfIterations = 0
                    let iterationsExceeded = false
                    try{
                        if(idx === 101){
                            await page1.waitForTimeout(2000)
                            await page1.waitForSelector('aria/navigate_next')
                            await page1.waitForTimeout(1000)
                            await page1.click('aria/navigate_next');
                            await page1.waitForTimeout(5000);
                            arrVal -= 100
                           }
                           if(idx > 101 && idx < 201){
                            arrVal -= 100
                           }
                           if(idx === 201){
                            await page1.waitForTimeout(2000)
                            await page1.waitForSelector('aria/navigate_next')
                            await page1.waitForTimeout(1000)
                            await page1.click('aria/navigate_next');
                            await page1.waitForTimeout(5000);
                            arrVal -= 200
                           }
                           if(idx > 201 && idx < 301){
                            arrVal -= 200
                           }
                           if(idx === 301){
                            await page1.waitForTimeout(2000)
                            await page1.waitForSelector('aria/navigate_next')
                            await page1.waitForTimeout(1000)
                            await page1.click('aria/navigate_next');
                            await page1.waitForTimeout(5000);
                            arrVal -= 300
                           }
                           if(idx > 301 && idx < 401){
                            arrVal -= 300
                           }

                           if(idx === 401){
                            await page1.waitForTimeout(2000)
                            await page1.waitForSelector('aria/navigate_next')
                            await page1.waitForTimeout(1000)
                            await page1.click('aria/navigate_next');
                            await page1.waitForTimeout(5000);
                            arrVal -= 400
                           }
                           if(idx > 401 && idx < 501){
                            arrVal -= 400
                           }
                           let cpy = await page1.waitForSelector(`#main > div > div.workplace.ng-scope > div > history > div > div.content-section.ng-scope > conversations > div > div:nth-child(${arrVal}) > div`, {timeout: 5000})
                           await page1.waitForTimeout(1000)
                           //await scrollIntoViewIfNeeded(cpy, 6000);
                           await page1.click(`#main > div > div.workplace.ng-scope > div > history > div > div.content-section.ng-scope > conversations > div > div:nth-child(${arrVal}) > div`)
                           await page1.waitForTimeout(1000);
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
                              //testB.push(xc)
                            }
                            if(xv === 'USER'){
                              // convObj.USER = xc
                              userSayArr.push(xc)
                          
                              //testQ.push(xc)
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
                        numOfIterations = numConv
                        let TrainingString = ''
                        userSayArr.map((el, idx3)=>{
                          let numConv2 = numConv - 1;
                          let bm = page1.url()
                          let new_string = bm.split('/')
                          let b = new_string[5]
                          //tests.push(test)
                          if(numConv === 1){
                              TrainingString = 'Other'
                          }else{
                              if(agentSayArr[1].includes('No matched intent')){
                                  TrainingString = userSayArr[2]
                              }else{
                                  TrainingString = userSayArr[1]
                              }
                          }
                          if(idx3 === numConv2){
                            
                              lastStr += `\n👱‍♀️: - ${el}`;
                              lastStr += `\n   👩🏻‍💻: - ${agentSayArr[idx3]}`;
                              let gk = agentSayArr[idx3].toLowerCase()
                              
                              if(gk.includes('booked')){
                                  bboking = true
                                  if(numOfIterations > 13){
                                      iterationsExceeded = true
                                  }
                              }
                              else{
                                  bboking = false
                                  if(numOfIterations > 8){
                                      iterationsExceeded = true
                                  }
                              }
                              startTime += convTime[1]
                          }else{
                              convStr += `\n👱‍♀️: - ${el}`;
                              convStr += `\n   👩🏻‍💻: - ${agentSayArr[idx3]}`;
                          }
                        })
                        let type = ''
                        //let d = await draw(str)
                        let predictions = await predict(TrainingString)
                          console.log(predictions)
                          try {
                              type = predictions[0].label
                          } catch (error) {
                              
                          }
                          // check if string contains text
                          if(convStr.includes('Would you like drop off your vehicle or wait at the dealership?') || convStr.includes('Now, please tell me what services you would like?') || lastStr.includes('Would you like drop off your vehicle or wait at the dealership?') || lastStr.includes('Now, please tell me what services you would like?') ){
                              onh.isBookingIntent = true
                          }else{
                              onh.isBookingIntent = false
                          }
                          if(convStr.includes('availability') || lastStr.includes('availability')){
                              onh.TimeSlotsGiven = true
                          }else{
                              onh.TimeSlotsGiven = false
                          }
                          if(lastStr.includes('booked')){
                              onh.BookingCompleted = true
                          }else{
                              onh.BookingCompleted = false
                          }
                        onh.CallTime = startTime;
                        onh.Conversations = convStr;
                        onh.LastIteration = lastStr;
                        onh.Iterations = numConv;
                        onh.Date = moment(date1).format('l')
                        onh.TrainingString = TrainingString;
                        onh.Type = type;
                        onh.UserSays = userSayArr;
                        onh.AgentSays = agentSayArr;
                        onh.IsBooking = bboking;
                        onh.Agent = el;
                        onh.IterationsExceeded = iterationsExceeded;
                        let se = startTime.split(',')
                        let gdh = se[0] + '2022'
                        let gdh2 =  moment(gdh, 'MMM DD YYYY').format('MM/DD/YYYY')
                        onh.Date = gdh2
                        onh.Time = se[1]
                        onh.UserSays = []
                         onh.AgentSays = []
                         await sheet.addRow(onh)
                        convArr.push(onh)
                    }catch(e){
                        console.log(e)
                        continue
                    }
                }
                console.log(`Scraping ${el} finished`);
                return
                // const result = await page.evaluate(e => e.textContent, await page.$("#result"));
                // 
                // return result;
            });
        }, 1),
        toArray(),
    ).toPromise();
}

run()