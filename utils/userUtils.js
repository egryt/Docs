const userModel = require('../models/user.js');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const SECRET_KEY="TODOWORK"

const signup = async (req,res) => {

     //Existing User Check
     const {username, email, password} = req.body;
    try{
        const existingUser = await userModel.findOne({email : email});
        if (existingUser){
            return res.status(400).jsoon({message: "User already Exists"});
        }
         //Hashed Password
     const hashedPassword = await bcrypt.hash(password,10);
     //User Creation
     const result = await userModel.create({
        email : email,
        password: hashedPassword,
        username: username     });
     
     //Token Generation
     const token = jwt.sign({email: result.email, id: result._id}, SECRET_KEY)
     res.status(201).json({user: result, token: token});
     
     
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: "Something Went Wrong!"});
    };
    

}

const signin = (req,res) => {
    
}

module.exports ={signup, signin};