const express = require('express')

const tvRouter = express.Router()

const tvModel = require('../Model/Tv.model');


tvRouter.post('/',async(req,res)=>{
     try{
         const tvda = await tvModel.create(req.body)
         tvda.save();
         res.status(200).send(tvda)
     }
     catch(err){
        res.status(500).send({message:err.message})
     }
})

tvRouter.get('/',async(req,res)=>{
    try{
         const tvda = await tvModel.find()
         res.status(200).send(tvda)
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})



tvRouter.get('/:id',async(req,res)=>{
    try{
         const tvda = await tvModel.findById({_id:req.params.id})
         res.status(200).send(tvda)
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})

module.exports = tvRouter