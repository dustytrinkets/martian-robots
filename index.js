const http = require('http');
const open = require('open');
const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const port = 3000;

app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
  res.sendfile(__dirname + '/public/index.html');
});

app.post('/start', function(req, res){
 res.send(req.body)
})
   
app.listen(port, '127.0.0.1',function(){
    console.log('Launching the browser!');
    open(`http://127.0.0.1:${port}`);
});