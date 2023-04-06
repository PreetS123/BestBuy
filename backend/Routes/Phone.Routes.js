const express = require('express')

const phoneRouter = express.Router()

const PhoneModel = require('../Model/Phone.model');


phoneRouter.post('/',async(req,res)=>{
     try{
         const phone = await PhoneModel.create(req.body)
         phone.save();
         res.status(200).send(phone)
     }
     catch(err){
        res.status(500).send({message:err.message})
     }
})

phoneRouter.get('/',async(req,res)=>{
    try{
         const phone = await PhoneModel.find()
         res.status(200).send(phone)
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})



phoneRouter.get('/:id',async(req,res)=>{
    try{
         const phone = await PhoneModel.findById({_id:req.params.id})
         res.status(200).send(phone)
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})

module.exports = phoneRouter