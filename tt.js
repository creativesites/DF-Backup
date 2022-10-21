const moment = require('moment');
let a = 'Sep 26, 7:26 PM'
let b = a.split(' ')
let c = b[1].substring(0, b[1].length - 1)
let d = '9/' + c + '/2022'
//console.log(d)
let e = a.split(',')
let f = e[0] + ' 2022'
let g = moment(f, 'MMM DD YYYY').format('MM/DD/YYYY')
//console.log(g)
//console.log(moment(d).format('YYYY-MM-DD'))

// array of strings
const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
// array of strings
const arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
// join all elements of the array into a string
const str = arr.join('. ');
const str2 = arr2.join('. ');
//join two strings
const str3 = str + '. ' + str2
console.log(str3);