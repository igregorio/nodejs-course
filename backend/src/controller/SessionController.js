// Métodos: index, store, show, update, destroy
// index: retorna todas as sessões
// store: criar uma sessão
// show: mostrar uma sessão
// update: alterar sessão
// destroy: deletar sessão

// importar informações do Schema criado no User.js
import User from '../model/User';

// Classe
class SessionController{

  // médoto store
  async store(req,res){
    const {email} = req.body;

    // verificar se tem usuário cadastrado
    let user = await User.findOne({email});

    if(!user){
      user = await User.create({email});
    }

    return res.json(user);
  }
}

export default new SessionController();