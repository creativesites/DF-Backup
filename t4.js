let a = '10/1/162022'
let b = a .split('/')
let c = b[0] + '/' + b[2].substring(0, 2) + '/' + '2022'
console.log(c)