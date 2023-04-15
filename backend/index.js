const express = require('express')
const cors = require('cors')
require('dotenv').config();

const app = express()
app.use(express.json())
app.use(cors())

const connection=require('./config');
const tvRouter= require('./Routes/Tv.Routes');
const phoneRouter= require('./Routes/Phone.Routes');
const laptopRouter= require('./Routes/Laptop.Routes');
const cartRouter= require('./Routes/Cart.Routes');

app.get('/',(req,res)=>{
    res.send('Welcome in Backend of Bestbuy_Clone!!')
})
app.use('/tv',tvRouter);
app.use('/phone',phoneRouter);
app.use('/laptop',laptopRouter);
app.use('/cart',cartRouter);

const PORT = process.env.PORT || 8080

app.listen(PORT,async()=>{
    try{
        await connection
        console.log('db connected')
    }
    catch(err){
       console.log('check config',err)
    }
    console.log(`listening on port ${PORT}`)
})