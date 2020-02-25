const express = require('express');

const server = express();

// Query params = ?nome=NodeJs
// Route params = /curso/2
// Request body = {nome: 'NodeJs', tipo: 'Backend'}

var cursos = ['Node js', 'Java Script', 'React Native', 'PHP', 'Ruby on Rails'];

// localhost:porta/curso
server.get('/curso/:index',(req,res)=>{

  // const nome = req.query.nome;
  // const id = req.params.id;

  const {index} = req.params;

  // return res.send("Hello world!");
  // return res.json({curso: `Aprendendo ${nome}`});
  // return res.json({curso: `Curso: ${id}`});
  return res.json(cursos[index]);
});

server.listen(3000);