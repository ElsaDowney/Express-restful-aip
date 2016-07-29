var express = require('express');
const bodyParser = require('body-parser');
const CompareNumber = require('./compare-number');
const AnswerGenerate = require('./answer-generator');
const app = express();

app.use(bodyParser.json());

app.get('/',function (req,res) {
    const answer=AnswerGenerate.generate();
    res.send(answer);
})
app.post('/', function (req, res) {

    const result = CompareNumber.Compare(req.body.answer,req.body.input);
    res.send(result);
});

var server = app.listen(3000, function () {

    console.log('Example app listening at http:3000');
});


