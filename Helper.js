// let isLoggedIn=true
var jwt=require("jsonwebtoken")
const userModel = require("./Model/userModel")
const JWT_KEY=require("./secret")
module.exports.isAuthorised=function(roles){
return function(req,res,next){
let role=req.role
if(roles.includes(role)){
next()
}
res.status(401).json({
msg:"operation not allowed"
})
}
}
module.exports.protectRoute=async function (req,res,next){
if(req.cookies.login){
let token=req.cookies.login
let payloaObj=jwt.verify(token,JWT_KEY)
const user=await userModel.findById(payloadObj.payload)
req.id=user.id
req.role=user.role
if(user){
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