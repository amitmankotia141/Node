const userModel=require("../Model/userModel")
var jwt=require("jsonwebtoken")
const {JWT_KEY}=require("../secret")
module.exports.signup=async function(req,res){
// let {email,name,password}=req.body
try{
let data=req.body;
let user= await userModel.create(data)
console.log(data);
if(user){
res.json({
msg:"user signed up",
user
})
}
else{
res.json({
msg:"user not found",
})
}
}
catch(err){
res.json({
err:err.message
})
}
}
module.exports.login=async function(req,res){
try{
let {email,password}=req.body
let user=await userModel.findOne({email:email})
if(user){
if(password==user.password){
let uid=user["_id"]
var token=jwt.sign({payload:uid},JWT_KEY)
res.cookie("login",token)
res.json({
msg:"user logged in"
})
}
else{
res.json({
msg:"wrong credentials"
})
}
}
else{
res.json({
msg:"user not found"
})
}
} 
catch (err) {
res.json({
msg:err.message})
}
}
module.exports.forgetPassword=async function(req,res){
let {email}=req.body
try{
const user=userModel.findOne({email:email})
if(user){
const resetToken=user.createResetToken();
let resetPasswordLink=`${req.protocol}://${req.get("host")}/resetPassword/${resetToken}`

}
else{
res.json({
msg:"user not found"
})
}
}
catch(err){
res.status(500).json({
msg:err.message
})
}
}
module.exports.resetPassword=async function(){
try{
const token=req.params.token
let {password,confirmPassword}=req.body
const user=await userModel.findOne({resetToken:token})
if(user){
user.resetPasswordHandler(password,confirmPassword);
await user.save()
res.json({
msg:"password changed successfully"
})
}
else{
res.json({
msg:"user not found"
})
}
}
catch(err){
res.json({
msg:err.message
})
}
}
module.exports.logout=function(req,res){
res.cookie("login"," ",{maxAge:1})
res.json({
msg:"user logged out"
})
}