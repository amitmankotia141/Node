const express=require("express")
const app=express();
app.get("/",function(req,res){
res.send("<h1>world 123</h1>")
})
app.get("/About",function(req,res){
res.sendFile("/Views/About.html",{root:__dirname})
})
//Redirect
app.get("/Aboutus",(req,res)=>{
res.redirect("/About")
})
//404
app.use((req,res)=>{
    res.status(404)
    res.sendFile("/Views/404.html",{root:__dirname})
})
app.listen(3000,()=>{
console.log("server is listening");
})