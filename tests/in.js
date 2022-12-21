const { execSync } = require('child_process');
const fs = require('fs');

const package = JSON.parse(fs.readFileSync('package.json'));

let keys = Object.keys(package.dependencies);
let values = Object.values(package.dependencies);
let df = ''

async function run(){
    for (let index = 0; index < keys.length; index++) {
        const key = keys[index];
        let value = values[index].replace("~", "").replace("^", "");
        df += `${key}@${value} `
        console.log(`Installing: ${key}@${value} globally`,);
        //execSync('npm i -g ' + `${key}@${value}`);
    }
}
run()

setTimeout(() => {
    console.log(df);
}, 5000);