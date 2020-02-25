const express = require('express');

const server = express();

// Query params = ?nome=NodeJs
// Route params = /curso/2
// Request body = {nome: 'NodeJs', tipo: 'Backend'}

// localhost:porta/curso
server.get('/curso/:id',(req,res)=>{

  // const nome = req.query.nome;
  const id = req.params.id;

  // return res.send("Hello world!");
  // return res.json({curso: `Aprendendo ${nome}`});

  return res.json({curso: `Curso: ${id}`});
});

server.listen(3000);