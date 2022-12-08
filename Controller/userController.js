const userModel=require("../Model/userModel")
module.exports.getUser=async function (req,res){
try{
console.log(req.query);
console.log(req.query.name);
// let{name,age}=req.query
// let filteredData=users.filter((userObj)=>{
// return (userObj.name==name && userObj.age==age)
// })
// res.send(filteredData)
let id=req.id
let user=await userModel.findById(id)
res.json({
msg:"users retrieved",
user
})
}
catch(err){
res.json({
msg:err.message
})
}
}
// module.exports.postUser=function (req,res){
// console.log(req.body);
// users.push(req.body)
// res.json({
// message:"data received",
// user:req.body
// })
// }
module.exports.updateUser=async function (req,res){
console.log(req.body);
let id=req.params.id;
let user=await userModel.findById(id)
let dataToBeUpdated=req.body
try{
if(user){
const keys=[]
for(let key in dataToBeUpdated){
keys.push(key) 
}
for(let i=0; i<keys.length;i++){
user[keys[i]]=dataToBeUpdated[keys[i]] 
}
const updatedData=await user.save();
res.json({
message:"data updated",
updatedData
})
}
else{
res.json({
message:"user not found",
})
}
}
catch(err){
res.json({
message:err.message
})
}
}
module.exports.deleteUser=async function (req,res){
try{
let id =req.params.id
let user=await userModel.findByIdAndDelete(id);
res.json({
message:"data deleted",
user
})
}
catch(err){
res.json({
msg:err.message,

})
}
}
module.exports.getAllUser=async function (req,res){
try{
let allUsers=await userModel.find();
res.json({msg:"user id is",
allUsers})
}
catch(err){
res.json({
msg:err.message,
})
}
}
// module.exports.setCookies=function (req,res){
// // res.setHeader("Set-Cookie","isLoggedIn=true")
// res.cookie("isLoggedIn",false)
// res.cookie("password",12345678)
// res.send("Cookies has been set")
// }
// module.exports.getCookies=function (req,res){
// let cookie=req.cookies
// console.log(cookie);
// res.send("Cookies received")
// }