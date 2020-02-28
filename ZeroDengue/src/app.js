import express from 'express';
import router from './router';
import mongoose from 'mongoose';

class App{

  constructor(){
    this.server = express();

    mongoose.connect('mongodb+srv://zerodengue:zerodengue@zerodengue-wyqyf.mongodb.net/zerodengue?retryWrites=true&w=majority',{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.server.use(express.json());
  }

  routes(){
    this.server.use(router)
  }


}

export default new App().server;