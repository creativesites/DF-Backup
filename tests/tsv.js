// create an express server
var express = require('express');
var app = express();
var fs = require('fs');
const PORT = 3068;

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
// create a route for the app
app.get('/', function(req, res) {
    res.send('Hello World');
});

app.listen(PORT, () => console.log(`backend running on port ${PORT}`))
