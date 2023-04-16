const express= require('express');
const authRouter=express.Router();
const bcrypt = require("bcryptjs");
const jwt= require("jsonwebtoken");

const authModel= require('../Model/Auth.model');


authRouter.post('/signup',async(req,res)=>{
    try{
      const {firstname,lastname,mobileno,email,password}= req.body;
      if(!(firstname && lastname && mobileno && email && password)){
        res.status(400).send({message:"All fields are required"});
      }
      const existingUser= await authModel.findOne({email});
      if(existingUser){
        res.status(401).send({message:"User already exists"});
      }
      let myEncPassword= await bcrypt.hash(password,10);
      const user= await authModel.create({
        firstname,
        lastname,
        mobileno,
        email,
        password:myEncPassword,
      })
      //token creation
      const token= jwt.sign(
        {user_id:user._id,email},
        'bestbuysecretkey',
        {
            expiresIn:'24h',
        }
      );
      user.token= token;

      //password handeling
      user.password=undefined;

      res.status(201).json(user);
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})

authRouter.post('/login',async(req,res)=>{
    try{
       const {email,password}= req.body;
       if(!(email && password)){
        res.status(400).send({message:"Email or password are wrong"});
       }
       const user= await authModel.findOne({email});

       if(user && (await bcrypt.compare(password,user.password))){
        const token= jwt.sign(
            {user_id:user._id,email},
            'bestbuysecretkey',
            {expiresIn:'24h'}
        );
        user.token= token;
        user.password= undefined;
        res.status(200).json({
            success:true,
            token,
            user
        })
       }
       res.status(400).send({message:'email or password is incorrect'});
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})

module.exports=authRouter;