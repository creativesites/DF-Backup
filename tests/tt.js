const moment = require('moment');
let a = 'Sep 26, 7:26 PM'
let b = a.split(' ')
let c = b[1].substring(0, b[1].length - 1)
let m = new Date()
let mm = m.getMonth() + 1
let y = m.getFullYear()
let d = mm + '/' + c + '/' + y
console.log(d)
let e = a.split(',')
let f = e[0] + ' 2022'
let g = moment(f, 'MMM DD YYYY').format('MM/DD/YYYY')
console.log(g)
const jsonfile = require('jsonfile');
var timezones = require('timezones-list');
const file = './timezones.json'

const tZFile = require('./timezones.json')
const file1 = './americanTimezones.json'
let aT = [
    {"value":"America/Puerto_Rico","name":"Puerto Rico (Atlantic)"},
    {"value":"America/New_York","name":"New York (Eastern)"},
    {"value":"America/Chicago","name":"Chicago (Central)"},
    {"value":"America/Denver","name":"Denver (Mountain)"},
    {"value":"America/Phoenix","name":"Phoenix (MST)"},
    {"value":"America/Los_Angeles","name":"Los Angeles (Pacific)"},
    {"value":"America/Anchorage","name":"Anchorage (Alaska)"},
    {"value":"Pacific/Honolulu","name":"Honolulu (Hawaii)"}
]
let temp = []
let tZ = tZFile.default
// return tZFile
tZ.map((val, id) => {
    let name = val.tzCode
    // check if name is in aT.value
    let found = aT.find(element => element.value === name)
    if(found){
        temp.push(val)
    }
})
setTimeout(() => {
    jsonfile.writeFile(file1, temp, {spaces: 2}, function (err) {
        console.error(err)
    }
    )
}, 5000);

