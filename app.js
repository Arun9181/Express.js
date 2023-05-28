const express=require("express")
let PORT=7000
const mongoose=require("mongoose")
const authRouter=require("./routes/authRouter")
const cookieParser=require("cookie-parser")

let app=express()

app.set("view engine","ejs")

//inbuilt middleware
app.use(express.urlencoded({extended:false}))
app.use(express.static("public"))
app.use(express.json())
//middleware

app.use(cookieParser())

//db connection
async function db(){
    await mongoose.connect("mongodb://127.0.0.1:27017/AuthDb")
    console.log("MongoDB Connected");
}
db()

app.use(authRouter)

// app.use((req,res)=>{
//     res.render("pnf")
// })

app.listen(PORT,(err)=>{
  if(err) console.log(err);
 else  console.log(`Server is running on ${PORT}`);
    
})

//cookies

app.get("/set-cookie",(req,res)=>{
    res.cookie("username","ironman",{maxAge:5000,httpOnly:true,secure:true})
    res.send("cookie set")
})

app.get("/get-cookie",(req,res)=>{
    console.log(req.cookies);
    res.send(req.cookies)
})

app.get("/delete",(req,res)=>{
    res.clearCookie("username")
    res.send("cookies cleared")
})