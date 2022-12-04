const express=require("express")
const app=express();
const cookieParser=require("cookie-parser");
const { endsWith } = require("lodash");
app.use(express.json())
app.use(cookieParser())
const userRouter=require("./Routers/userRouter")
const authRouter=require("./Routers/authRouter")
app.use("/users",userRouter)
app.use("/auth",authRouter)
//Query
// app.get("/users",)
// app.post("/users",)
// app.patch("/users",)
// app.delete("/users",)
//Params
// app.get("/users/:id",)
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
// let user={
// name:"Raj",
// email:"raj@gmail.com",
// password:"12345678",
// confirmPassword:"12345678"
// }
// let data= await userModel.create(user);
// console.log(data);
// })();