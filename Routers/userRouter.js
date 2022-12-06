const express=require("express")
const userRouter=express.Router()
const {protectRoute}=require("../Helper")
const {getUser,postUser,updateUser,deleteUser,userById,setCookies,getCookies}=require("../Controller/userController")
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
module.exports=userRouter