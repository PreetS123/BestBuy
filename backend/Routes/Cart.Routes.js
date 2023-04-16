const express = require('express')

const cartRouter = express.Router()

const cartModel = require('../Model/Cart.model');


cartRouter.post('/',async(req,res)=>{
     try{
         const cart = await cartModel.create(req.body)
         res.status(200).send(cart)
     }
     catch(err){
        res.status(500).send({message:err.message})
     }
})

cartRouter.get('/',async(req,res)=>{
    try{
         const cart = await cartModel.find()
         res.status(200).send(cart)
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})

cartRouter.delete('/:id',async(req,res)=>{
    try{
         const cart = await cartModel.findByIdAndDelete({_id:req.params.id});
         res.status(200).send(cart)
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})


module.exports = cartRouter