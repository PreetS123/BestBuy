const jwt= require("jsonwebtoken");
const authModel= require("../Model/Auth.model");


const isAuth= async(req,res,next)=>{
    const token= req.cokkies.token|| req.body.token || req.header("Authorization").replace("Bearer","");

    if(!token){
        return res.status(403).send({message:"token is missing"});
    }
    try{
         const decode = jwt.verify(token,'bestbuysecretkey');
         console.log(decode);

         const user= await authModel.findOne({email:decode.email});
    }
    catch(err){
      return res.status(401).send({message:"Invalid Token"});
    }
    return next();
}

module.exports=isAuth;