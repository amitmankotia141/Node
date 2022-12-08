const express=require("express")
const authRouter=express.Router()
const userModel=require("../Model/userModel")
var jwt=require("jsonwebtoken")
const {JWT_KEY}=require("../Helper")
// authRouter
// .route("/signup")
// .get(getSignup)
// .post(postSignup)
// authRouter
// .route("/login")
// .post(loginUser)
module.exports=authRouter