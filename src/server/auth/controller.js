const User = require('../models/User');
const {hashSync} = require('bcrypt');

class Controller {
   async registration(req, res) {
    try{
      const {username, password} = req.body;
      const candidate = await User().findOne({username});
      if(candidate){
        return res.status(400).json({message: 'User with the same name already exists'});
      }

      const hashPassword = hashSync(password, 7)
      const user = new User({username, password: hashPassword});
      await user.save();

      return res.json({message: 'User successfully created'});
    } catch (e) {
      console.error(e);
    }
   }

   async login(req, res) {
    try {

    } catch(e){

    }
   }

   async getUsers(req, res){
    try {

    } catch(e){

    }
   }

}

module.exports = new Controller();