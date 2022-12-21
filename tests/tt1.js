let a = [
    'aWordsOperator',     'aWordsUnhandled',
    'aWordsVoicemail',    'carMake',
    'carMakeAll',         'carMakeAllLessCurrent',
    'carModels',          'FAQ',
    'serviceOptions',     'serviceOptions000',
    'transportation',     'wordsAfternoon',
    'wordsAppointment',   'wordsCarYear',
    'wordsChangeAppt',    'wordsDropIn',
    'wordsEvening',       'wordsExceptions',
    'wordsIssues',        'wordsNext',
    'wordsNo',            'wordsNo',
    'wordsNoAppointment', 'wordsNotSure',
    'wordsOddHours',      'wordsOperator',
    'wordsOther',         'wordsParts',
    'wordsPre',           'wordsQuote',
    'wordsRecall',        'wordsRepair',
    'wordsSales',         'wordsSearchAppt',
    'wordsService',       'wordsStatus',
    'wordsTakeIt',        'wordsTime',
    'wordsTransport',     'wordsVague',
    'wordsYes'
]
let b = a.map((item, idx) => {
    let c = {
        "name": item,
        "index": idx + 1
    }
    return c
})
//console.log(JSON.stringify(b, null, 2))
let f = [
    '1-Voicemail','2-ScheduleAppt','3-GetYMM','4-GetServices','4-Transport','5-Recalls','5-Recalls','7-Book'
]
let g = f.map((item, idx) => {
    let c = {
        "name": item,
        "index": idx + 1
    }
    return c
})
//console.log(JSON.stringify(g, null, 2))
let iz = [
    {
      "name": "1-Voicemail",
      "index": 1
    },
    {
      "name": "2-ScheduleAppt",
      "index": 2
    },
    {
      "name": "3-GetYMM",
      "index": 3
    },
    {
      "name": "4-GetServices",
      "index": 4
    },
    {
      "name": "4-Transport",
      "index": 5
    },
    {
      "name": "5-Recalls",
      "index": 6
    },
    {
      "name": "5-Recalls",
      "index": 7
    },
    {
      "name": "7-Book",
      "index": 8
    }
]
let siw = [ '1-Voicemail ', ' 3-GetYMM' ]
siw = siw.map(function (x) { return x.trim(); });
console.log(siw)
let ints1 = siw.map((x) => {
    // find if x is in iz
    let found = iz.find((y) => {
        return y.name === x
    })
    let r = found.index
    return r
})
setTimeout(() => {
    console.log(ints1)
}, 3000);

let allAgentsL =  [
  
  {
    name: '00-002-CfordNapa-8184929153',
    id: 'j0c-002-hondaxttaz--itii',
    url: 'https://dialogflow.cloud.google.com/#/editAgent/j0c-002-hondaxttaz--itii/'
  },
  {
    name: '00-003-XhondTaz-8184929306',
    id: 'h6-0-demo-toyota-drcvsv',
    url: 'https://dialogflow.cloud.google.com/#/editAgent/h6-0-demo-toyota-drcvsv/'
  },
  {
    name: '00-004-NhondSerra__-7072421465',
    id: 'b0v-alexh-fxfa',
    url: 'https://dialogflow.cloud.google.com/#/editAgent/b0v-alexh-fxfa/'
  },
  {
    name: '00-006-XhondGalp-6174025457',
    id: 'ea5-mtpc',
    url: 'https://dialogflow.cloud.google.com/#/editAgent/ea5-mtpc/'
  },
  
  {
    name: '300-AutoPorsBell-8162816544',
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
    name: '382-EnviFordOxna-8549995371',
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
    url: 'https://dialogflow.cloud.google.com/#/editAgent/e384-envitoyonorwc--lrve/'
  },
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
    name: '404-GalpLinc-516-274-7227',
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
    name: '420-TuttleClickFord-8603176720',
    id: 'tuttleclickford-exuq',
    url: 'https://dialogflow.cloud.google.com/#/editAgent/tuttleclickford-exuq/'  },
  {
    name: '420-TuttleClickFord-8603176720',
    id: 'newagent-hw9g',
    url: 'https://dialogflow.cloud.google.com/#/editAgent/newagent-hw9g/'
  },
  {
    name: '440-KnigCDJRClar-8323063418',
    id: 'newagent-9uws',
    url: 'https://dialogflow.cloud.google.com/#/editAgent/newagent-9uws/'
  },
  {
    name: '500-BostVW_____-8323080838',
    id: 'newagent-cwer',
    url: 'https://dialogflow.cloud.google.com/#/editAgent/newagent-cwer/'
  },
  {
    name: '510-NortFordCoun-8323080811',
    id: 'newagent-lmgu',
    url: 'https://dialogflow.cloud.google.com/#/editAgent/newagent-lmgu/'
  },
  {
    name: '540-MorgHyunFtMy-8603170801',
    id: 'newagent-jwmt',
    url: 'https://dialogflow.cloud.google.com/#/editAgent/newagent-jwmt/'
  },
  {
    name: '541-PremKia_Carl-8323080831',
    id: 'kiahambra3-jiacnd',
    url: 'https://dialogflow.cloud.google.com/#/editAgent/kiahambra3-jiacnd/'
  },
  {
    name: '2100-VistNiss-9712135763',
    id:'new-fjqt',
    url: 'https://dialogflow.cloud.google.com/#/editAgent/new-fjqt/'
  },
  {
    name: '2101-VistToyo-9712135624',
    id: 'new-kpmn',
    url: 'https://dialogflow.cloud.google.com/#/editAgent/new-kpmn/'
  },
  {
    name: '2102-OremMercElCa-9712138190',
    id: 'agent1-pweu',
    url: 'https://dialogflow.cloud.google.com/#/editAgent/agent1-pweu/'
  },
  {
    name: '700-AutoAudiSpok-9712135264',
    id: 'new-btdx',
    url: 'https://dialogflow.cloud.google.com/#/editAgent/new-btdx/'
  },
  {
    name: '701-AutoVW__Spok-9712135263',
    id: 'v701-autovw-spok--miia',
    url: 'https://dialogflow.cloud.google.com/#/editAgent/v701-autovw-spok--miia/'
  },
  {
    name: '702-AutoSubaSpok-9712135627',
    id:'n702-autosubaspok--hhbc',
    url: 'https://dialogflow.cloud.google.com/#/editAgent/n702-autosubaspok--hhbc/'
  },
  {
    name: '703-AutoAudiBell-9712135622',
    id: 'l703-autoaudibell--fakj',
    url: 'https://dialogflow.cloud.google.com/#/editAgent/l703-autoaudibell--fakj/'
  },
  {
    name: '704-AutoBMW_Bell-9712135449',
    id: 'i704-autobmw-bell--rnna',
    url: 'https://dialogflow.cloud.google.com/#/editAgent/i704-autobmw-bell--rnna/'
  }
]