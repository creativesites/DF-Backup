import jsonfile from 'jsonfile';
const file = './tmp.json';
const file1 = './tmp1.json'
let arr = [];

jsonfile.writeFile(file, arr)
  .then(res => {
    console.log('Write complete1')
  })
  .catch(error => console.error(error))