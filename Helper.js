// let isLoggedIn=true
var jwt=require("jsonwebtoken")
const JWT_KEY=require("./secret")
module.exports.protectRoute=function (req,res,next){
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