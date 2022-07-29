const moment = require('moment');
const findRemoveSync = require('find-remove')
let a = moment().format("YYMMDD-HHmm")
console.log(a)
let b = '00-000-DEMO1-POR-8184921287.zip'
let c = b.slice(0,-4)
const result = findRemoveSync('./backup', { extensions: ['.zip'] })
console.log(result)