const AuthServices = require("../services/auth.services");
const transporter = require('../utils/mailer');


const register = async (req, res) => {
try {
    const user = req.body;
    const result = await AuthServices.register(user);
    if(result){
        res.status(201).json({message: 'user created'});
        await transporter.sendMail({
            to: result.email,
            from: 'katiajauregui@gmail.com',
            subject: 'Email confimation',
            html: '<h1> WELCOME TO THE ECOMMERCE</h1> <p>Please confirm your email in the following <a href="#">link</a></p>'
        })
    } else {
         res.status(400).json({message: "something went wrong"})
    }
} catch (error) {
    res.status(400).message(error.message);
}
};

const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        if(!email) {
          return  res.status(400).json({
              error: "Missing data",
              message: "Not email provided"
            })
          } 
          if(!password) {
           return res.status(400).json({
              error: "Missing data",
              message: "Not password provided"
            })
          }
          const result = await AuthServices.login({email, password});
          if (result.isValid){
            const {username, id, email} = result.user;
            const userData = {username, id, email};
            const token = AuthServices.genToken(userData);
            // result.user.token = token;
            console.log(token);
            res.json(result.user)
          } else {
            res.status(400).json("user not found")
          }
    } catch (error) {
        res.status(400).json({message: 'something went wrong'});
    }
}

module.exports = {
    register, login
}