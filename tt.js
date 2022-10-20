const moment = require('moment');
let a = 'Sep 26, 7:26 PM'
let b = a.split(' ')
let c = b[1].substring(0, b[1].length - 1)
let d = '9/' + c + '/2022'
//console.log(d)
let e = a.split(',')
let f = e[0] + ' 2022'
let g = moment(f, 'MMM DD YYYY').format('MM/DD/YYYY')
console.log(g)
//console.log(moment(d).format('YYYY-MM-DD'))