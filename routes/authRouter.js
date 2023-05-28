const express=require("express")
const User=require("../model/auth")

let authRouter=express.Router()


//function to handle errors
function handleError(err){
    console.log(err.message,err.code);
    let errors={email:"",password:""}

    if(err.code===11000){
        errors["email"]="email already exists";
        return errors;
    }
    if(err.message.includes("user validation failed")){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path]=properties.message
        })
    }
    return errors;
}

authRouter.get("/",(req,res)=>{
    res.render("home")
})

authRouter.get("/signup",(req,res)=>{
    res.render("signup")
})

authRouter.get("/secret",(req,res)=>{
    res.render("secret")
})


authRouter.get("/login",(req,res)=>{
    res.render("login")
})

authRouter.post("/login",(req,res)=>{
    res.send("login")
})


authRouter.post("/signup",async (req,res)=>{
    const {email,password}=req.body
    try {
      let user=  await User.create({email,password})
      res.status(201).json(user)
    } catch (err) {
        // console.log(error);
       let errors= handleError(err)
       res.status(400).json({errors})
        // res.send("user not created")
    }
})

module.exports=authRouter;