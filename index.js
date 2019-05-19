const Open = require('open');
const express = require('express');
const bodyParser = require('body-parser');
const Start = require('./lib/start.js')

const app = express();
const port = 3000;

app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
  res.sendfile(__dirname + '/public/index.html');
});

app.post('/start', function(req, res){
  let start = new Start(req.body.value)
  let response = start.returnRes();
  res.send(response)
})
   
app.listen(port, '127.0.0.1',function(){
    console.log('Launching the browser!');
    Open(`http://127.0.0.1:${port}`);
});