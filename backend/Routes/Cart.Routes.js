const express = require('express')

const cartRouter = express.Router()

const cartModel = require('../Model/Cart.model');


cartRouter.post('/',async(req,res)=>{
     try{
         const cart = await cartModel.create(req.body)
         cart.save();
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



cartRouter.get('/:id',async(req,res)=>{
    try{
         const cart = await cartModel.findById({_id:req.params.id})
         res.status(200).send(cart)
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})

module.exports = cartRouter