//hello world program

// const express=require("express")

// //top level function
// let app=express()

// app.get("/",(req,res)=>{
//     res.end("HELLO WORLD!")
// })

// app.listen(5000,(err)=>{
//     if(err){
//         throw err
//     }else{
//         console.log("server is running ion port 5000.....");
//     }
// })


//************ */
// const express=require("express")

// //top level function
// let app=express()

// app.get("/",users,arun,(req,res)=>{
//     console.log("this is app.get");
//     res.end("HELLO WORLD!")
// })
// function users(req,res,next){
//     console.log("this is middleware this is logged before app.get");
//     next()
// }
// function arun(req,res,next){
//     console.log("this is arun logged before app.get");
//     next()
// }

// app.listen(5000,(err)=>{
//     if(err){
//         throw err
//     }else{
//         console.log("server is running ion port 5000.....");
//     }
// })


//middleware stalk

// const express=require("express")

// let app=express()

// // mount middleware (we are going to use it globally)
// app.use(users)


// //handler functions
// app.get("/", (req,res)=>{
//     console.log("this is app.get");
//     res.send("<h1> admin</h1>")
// })

// app.get("/admin",(req,res)=>{
//     console.log("this is admin");
//     res.send("<h1>admin</h1>")
// })

// function users(req,res,next){
//     console.log("this is middleware logged before");
//     next()
// }
// app.listen(5000,(err)=>{
//     if (err) {
//         throw err
//     }
//     else{
//         console.log("server is running on port 5000......");
//     }

// })




// const express=require("express")

// let app=express()

// //application middleware

// // app.use('/resource',auth,(req,res,next)=>{
// //     console.log("this is application level middleware");
// //     next()

// // })


// //error handling middleware
// app.use('/resource',auth,(err,req,res,next)=>{
//    console.error(err)
//    console.log("this is app mid");
//    next()
// })

// //end point
// app.get('/resource', (req,res)=>{
//     console.log("this is end point");
//     res.send("hello")

// })
// app.get('/',(req,res)=>{
//     console.log("this is json data");
//     res.json({"name":"rachit"})
// })


// function auth(req,res,next){
//     console.log("this is auth");
//     next()
// }
// app.listen(5000,(err)=>{
//     if (err) {
//         throw err
//     }
//     else{
//         console.log("server is running on port 5000......");
//     }

// })

// const express=require("express")
// let app=express()

// app.use(express.json())       //for post method

// const friends=[{
//     id:0,
//     "name":"Aditya"
// },{
//     id:1,
//     "name":"Naresh"

// }]

// // parametrized route   //friends/22
// app.get("/friends/:friendId",(req,res)=>{
    
//     let friendId=+req.params.friendId
//     let friend=friends[friendId]
//     if (friend) {
//         res.status(200).json(friend)
//     } else {
//         res.status(404).json({
//             error:"Friend doesn't exists"
//         })
//     }
   

// })

// app.post("/friends",(req,res)=>{
//     if (!req.body.name) {
//         res.status(400).json({
//             error:"not able to post"
//         })
//     }
//     let newFriend={
//         id:friends.length,
//         "name":req.body.name
//     }
//     friends.push(newFriend)
//     res.status(201).json(newFriend)
// })

// app.listen(5000,(err)=>{
//     if(err)throw err
//     console.log("server us running on port 5000...");
// })



const express=require("express")
let app=express()
const friendscontroller=require("./controller/friendsController")

app.use(express.json())      




app.get("/friends/:friendId",friendscontroller.getfriend)

app.post("/friends",friendscontroller.addfriend)

app.get("/friends",friendscontroller.getfriends)

app.listen(5000,(err)=>{
    if(err)throw err
    console.log("server us running on port 5000...");
})