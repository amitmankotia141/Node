const express=require("express")
const app=express();
const userModel=require("./Model/userModel")
const cookieParser=require("cookie-parser");
const { endsWith } = require("lodash");
app.use(express.json())
app.use(cookieParser())
let users=[
{
    id:1,
    name:"Amit",
    age:25
},
{
    id:2,
    name:"God",
    age:1000
},
{
    id:3,
    name:"lord",
    age:26
}
]
const userRouter=express.Router()
const authRouter=express.Router()
app.use("/users",userRouter)
app.use("/auth",authRouter)
userRouter.route("/setCookies").get(setCookies)
userRouter.route("/getCookies").get(getCookies)
userRouter
.route("/")
.get(getUser)
.post(postUser)
.patch(updateUser)
.delete(deleteUser)
userRouter
.route("/:id")
.get(userById)
authRouter
.route("/signup")
.get(getSignup)
.post(postSignup)
//Query
// app.get("/users",)
// app.post("/users",)
// app.patch("/users",)
// app.delete("/users",)
//Params
// app.get("/users/:id",)
async function getUser(req,res){
console.log(req.query);
console.log(req.query.name);
// let{name,age}=req.query
// let filteredData=users.filter((userObj)=>{
// return (userObj.name==name && userObj.age==age)
// })
// res.send(filteredData)
let allUser=await userModel.findOne({name:"Amit"})
res.json({
msg:"users retrieved",
allUser
})
}
function postUser(req,res){
console.log(req.body);
users.push(req.body)
res.json({
message:"data received",
user:req.body
})
}
async function updateUser(req,res){
console.log(req.body);
let dataToBeUpdated=req.body
// for(key in dataToBeUpdated){
// users[key]=dataToBeUpdated[key]
// }
let doc=await userModel.findOneAndUpdate({email:"amit@gmail.com"},
dataToBeUpdated)
res.json({
message:"data updated",
dataToBeUpdated
})
}
async function deleteUser(req,res){
// users={}
// let doc=await userModel.deleteOne({name:"Sanjay"})
let doc=await userModel.findOneAndRemove({email:"raju@gmail.com"});
console.log(doc);
res.json({
message:"data deleted"
})
}
function userById(req,res){
console.log(req.params.id)
res.json({msg:"user id is",
obj:req.params})
}
function getSignup(req,res){
res.sendFile("/Views/Hello.html",{root:__dirname})
}
async function postSignup(req,res){
// let {email,name,password}=req.body
try{let data=req.body;
let user= await userModel.create(data)
console.log(data);
res.json({
msg:"user signed up",
user
})
}
catch(err){
res.json({
err:err.message
})
}
}
function setCookies(req,res){
// res.setHeader("Set-Cookie","isLoggedIn=true")
res.cookie("isLoggedIn",false)
res.cookie("password",12345678)
res.send("Cookies has been set")
}
function getCookies(req,res){
let cookie=req.cookies
console.log(cookie);
res.send("Cookies received")
}
app.listen(5000);
// userSchema.pre("save",function(){
// console.log("before saving in db");
// })
// userSchema.post("save",function(){
// console.log("after saving in db");
// })
// //models
// const userModel=mongoose.model("userModel",userSchema);

// (async function createUser(){
//     let user={
//         name:"Raj",
//         email:"raj@gmail.com",
//         password:"12345678",
//         confirmPassword:"12345678"
//     }
//     let data= await userModel.create(user);
//     console.log(data);
// })();