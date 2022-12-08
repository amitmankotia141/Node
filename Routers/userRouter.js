const express=require("express")
const userRouter=express.Router()
const {isAuthorised,protectRoute}=require("../Helper")
const {getUser,postUser,updateUser,deleteUser,getAllUser}=require("../Controller/userController")
const {signup,login}=require("../Controller/authController")
// userRouter.route("/setCookies").get(setCookies)
// userRouter.route("/getCookies").get(getCookies)
//user option
userRouter
.route("/:id")
.patch(updateUser)
.delete(deleteUser)
userRouter
.route("/login")
.post(login)
userRouter
.route("/signup")
.post(signup)
//profile page
userRouter.use(protectRoute)
userRouter
.route("/profile")
.get(getUser)
//admin specific function
userRouter.use(isAuthorised(["admin"]))
userRouter.route("")
.get(getAllUser)
module.exports=userRouter