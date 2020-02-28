// requeriu mongoose
var mongoose = require('mongoose');
// conexão
mongoose.connect('mongodb://localhost/apitest');

// criou um Schema com informações do banco, na collection o mesmo nome do banco
var customerSchema = new mongoose.Schema({
  name: String,
  email: String
},
{collection:'customers'}
);

// exportação do mongoose e do customerSchema
module.exports = {Mongoose: mongoose, CustomerSchema: customerSchema};