const express = require('express')
const cors = require('cors')
require('dotenv').config();

const app = express()
app.use(express.json())
app.use(cors())



app.get('/',(req,res)=>{
    res.send('Welcome in Backend of hellobonsai!!')
})

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