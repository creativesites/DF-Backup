const brain = require('brain.js');
const data = require('./trainingData2.json')
const net = new brain.recurrent.LSTM();



// net.train([
//   { input: 'I feel great about the world!', output: 'happy' },
//   { input: 'The world is a terrible place!', output: 'sad' },
// ]);

// const output = net.run('I feel great about the world!');

let trainingArr = []

for (let index = 0; index < data.length; index++) {
    const element = data[index];
    let obj = {}
    obj.input = element.TrainingString;
    obj.output = element.Type;
    trainingArr.push(obj)
}
setTimeout(async() => {
    console.log(trainingArr.length)
    await net.train(trainingArr);
    setTimeout(async() => {
        const output = await net.run('I was just wondering about the status of my 09 Muranos service.');
        console.log(output)
    }, 10000);
}, 4000);
