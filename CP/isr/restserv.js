const http = require('http');
const express = require('express');
const app = express();

app.get('/api', (req, res)=>{
  res.send({method: "GET"})
});

app.post('/api', (req, res)=>{
  res.send({method: "POST"})
});

app.listen(7000, ()=>{
  console.log('server is listening');
});
