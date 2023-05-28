let{Schema,model}=require("mongoose")
const {isEmail}=require("validator")
// const bcrypt=require("bcrypt")

let userSchema=new Schema({
   
    password:{
        type:String,
        required:["password is required"],
        minlength:[6,"minimum length of characters are 6"]
    },
    email:{
        type:String,
        unique:true,
        lowercase:true,
        required:[true,"email is required"],
        validate:[isEmail,"enter valid email"]

    }
},{timestamps:true})

// userSchema.pre("save", async function(next){
//     let salt=await bcrypt.genSalt(10)
//     this.password= await bcrypt.hash(this.password,salt)
//     next()
// })

module.exports=model("user",userSchema)