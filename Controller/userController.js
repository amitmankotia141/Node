const userModel=require("../Model/userModel")
module.exports.getUser=async function (req,res){
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
module.exports.postUser=function (req,res){
console.log(req.body);
users.push(req.body)
res.json({
message:"data received",
user:req.body
})
}
module.exports.updateUser=async function (req,res){
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
module.exports.deleteUser=async function (req,res){
// users={}
// let doc=await userModel.deleteOne({name:"Sanjay"})
let doc=await userModel.findOneAndRemove({email:"raju@gmail.com"});
console.log(doc);
res.json({
message:"data deleted"
})
}
module.exports.userById=function (req,res){
console.log(req.params.id)
res.json({msg:"user id is",
obj:req.params})
}
module.exports.setCookies=function (req,res){
// res.setHeader("Set-Cookie","isLoggedIn=true")
res.cookie("isLoggedIn",false)
res.cookie("password",12345678)
res.send("Cookies has been set")
}
module.exports.getCookies=function (req,res){
let cookie=req.cookies
console.log(cookie);
res.send("Cookies received")
}