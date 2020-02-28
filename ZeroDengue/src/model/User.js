import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    nome: String,
    email: String,
    senha: String,
    rg: Number,
    cpf: Number,
    endereco: String,
    telefone: String,
    cidade: String,
    bairro: String,
    estado: String
});

export default model('User', userSchema);