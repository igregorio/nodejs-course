// const express = require('express');
// const routes = require('./routes');
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes';
import path from 'path';

class App{

  constructor(){
    this.server = express();

    mongoose.connect('mongodb+srv://dev:dev@dev-ppcg4.mongodb.net/dev?retryWrites=true&w=majority',{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    this.middleware();
    this.routes();
  }

  middleware(){
    this.server.use(cors());

    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'uploader'))
    )

    this.server.use(express.json());
  }

  routes(){ 
    this.server.use(routes);
  }
}


// module.exports = new App().server;
export default new App().server;