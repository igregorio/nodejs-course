const express = require('express');

const server = express();
// localhost:porta/curso
server.get('/curso',(req,res)=>{
  // return res.send("Hello world!");
  return res.json({curso: "Node js"});
});

server.listen(3000);