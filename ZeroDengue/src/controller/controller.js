import User from "../model/User";

// Method: index, show, store, destroy, update

class Controller{

  async store(req,res){
    const {nome} = req.body;
    const {email} = req.body;
    const {senha} = req.body;
    const {rg} = req.body;
    const {cpf} = req.body;
    const {endereco} = req.body;
    const {telefone} = req.body;
    const {cidade} = req.body;
    const {bairro} = req.body;
    const {estado} = req.body;

     user = await User.findOne({nome});
     user = await User.findOne({email});
     user = await User.findOne({senha});
     user = await User.findOne({rg});
     user = await User.findOne({cpf});
     user = await User.findOne({endereco});
     user = await User.findOne({telefone});
     user = await User.findOne({cidade});
     user = await User.findOne({bairro});
     user = await User.findOne({estado});

    if(!user){
      user = await user.create({nome});
      user = await user.create({email});
      user = await user.create({senha});
      user = await user.create({rg});
      user = await user.create({cpf});
      user = await user.create({endereco});
      user = await user.create({telefone});
      user = await user.create({cidade});
      user = await user.create({bairro});
      user = await user.create({estado});
    }

    return res.json({user});
  }


}

export default new Controller();