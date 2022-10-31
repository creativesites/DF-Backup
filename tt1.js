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