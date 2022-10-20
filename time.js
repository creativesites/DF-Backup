const moment = require('moment')
let date1 = 'Aug 9, 2022'
let dt1 = 'Aug 19, 2022'
let dt2 = 'Aug 29, 2022'
// let before = moment(date1).isBefore(dt2);
// let after = moment(date1).isAfter(dt1);
// console.log(before)
// console.log(after)
//Aug 9, 2022
var bool1 = moment('2010-10-20')
    .isBefore('2010-10-21'); // true
console.log(bool1);
let tk = '2010-10-20'
let gh = '2010-10-20 to 2010-10-20' 
function checkDate(val){
    try {
        let pg = val.split(' to ')
        console.log(pg)
    } catch (error) {
        console.log('err')
    }
}
checkDate(tk)