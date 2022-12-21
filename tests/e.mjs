import Classifier from './classifier.mjs'
//const classifier = new Classifier()
const classifier = new Classifier({
    nGramMin: 2,
    nGramMax: 2
})
let positive = [
    'This is great, so cool!',
    'Wow, I love it!',
    'It really is amazing',
]
 
let negative = [
    'This is really bad',
    'I hate it with a passion',
    'Just terrible!',
]
 
classifier.train(positive, 'positive')
classifier.train(negative, 'negative')

let predictions = classifier.predict('It sure is pretty great!')
 console.log(predictions)
if (predictions.length) {
    predictions.forEach(prediction => {
        console.log(`${prediction.label} (${prediction.confidence})`)
    })
} else {
    console.log('No predictions returned')
}