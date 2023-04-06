const express = require('express')

const laptopRouter = express.Router()

const laptopModel = require('../Model/Laptop.model');


laptopRouter.post('/',async(req,res)=>{
     try{
         const laptop = await laptopModel.create(req.body)
         laptop.save();
         res.status(200).send(laptop)
     }
     catch(err){
        res.status(500).send({message:err.message})
     }
})

laptopRouter.get('/',async(req,res)=>{
    try{
         const laptop = await laptopModel.find()
         res.status(200).send(laptop)
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})



laptopRouter.get('/:id',async(req,res)=>{
    try{
         const laptop = await laptopModel.findById({_id:req.params.id})
         res.status(200).send(laptop)
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})

module.exports = laptopRouter