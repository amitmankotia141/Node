const express=require("express")
const userRouter=express.Router()
const userModel=require("../Model/userModel")
var jwt=require("jsonwebtoken")
const JWT_KEY="qwerty141"
userRouter.route("/setCookies").get(setCookies)
userRouter.route("/getCookies").get(getCookies)
userRouter
.route("/")
.get(protectRoute,getUser)
.post(postUser)
.patch(updateUser)
.delete(deleteUser)
userRouter
.route("/:id")
.get(userById)
async function getUser(req,res){
    console.log(req.query);
    console.log(req.query.name);
    // let{name,age}=req.query
    // let filteredData=users.filter((userObj)=>{
    // return (userObj.name==name && userObj.age==age)
    // })
    // res.send(filteredData)
    let allUser=await userModel.find()
    res.json({
    msg:"users retrieved",
    allUser
    })
    }
    // let isLoggedIn=true
    function protectRoute(req,res,next){
    if(req.cookies.login){
    let token=req.cookies.login
    let isVerified=jwt.verify(token,JWT_KEY)
    if(isVerified){
    next()  
    }
    else{
    res.json({
        msg:"user not verified"
    })
    }
    }
    else{
    res.json({
    msg:"operation not allowed"
    })
    }
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
        
        module.exports=userRouter