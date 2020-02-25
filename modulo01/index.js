const express = require('express');
const server = express();
// para poder inserir, deletar e atualizar
server.use(express.json());

const cursos = ['Node js', 'Javascript', 'React Native'];
// CRUD => CREAT, READ, UPDATE, DELETE

// Middlewares
// função criada para verificar se o nome  digitado no json está correto
function checkNome(req,res,next){
  if(!req.body.nome){
    return res.status(400).json({error: "Nome do curso digitado não existe"});
  }

  return next();
}

// função criada para verificar se a index como parâmetro digitada existe entre os cursos
function checkIndex(req,res,next){
  const curso = cursos[req.params.index];
  if(!curso){
    return res.status(400).json({error: "Index do curso não existe"});
  }

  // criando variável que vai receber as informações cursos[req.params.index];
  req.curso = curso;

  return next();
}


// get um curso
server.get('/cursos/:index',checkIndex,(req,res)=>{
    // const { index } = req.params;
    //cursos[index]
    return res.json("curso: " +  req.curso);
});

// get todos os cursos
server.get('/cursos',(req,res)=>{
  return res.json(cursos);
});

// post cursos
server.post('/cursos',checkNome,(req,res)=>{
  // criar nome pelo body, método push(adicionar elemento final do array)
  const {nome} = req.body;
  cursos.push(nome);
  return res.json(cursos);
});

// put cursos index
server.put('/cursos/:index',checkNome,(req,res)=>{
  // será atualizado o nome no array cursos que estiver recebendo a index como parâmetro
  const {index} = req.params;
  const {nome} = req.body;

  cursos[index] = nome;

  return res.json(cursos);
});

// delete curso index
server.delete('/cursos/:index',checkIndex,(req,res)=>{
  // deletar curso que vai receber index como parâmetro
  // usei o método splice do js
  const {index} = req.params;
  cursos.splice(index,1);
  return res.json(cursos);
});



server.listen(3000);