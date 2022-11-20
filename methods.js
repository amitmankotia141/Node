const express=require("express")
const app=express();
app.use(express.json())
let users=[
{
    id:1,
    name:"Amit",
    age:25
},
{
    id:2,
    name:"God",
    age:1000
},
{
    id:3,
    name:"lord",
    age:26
}
]
//Query
app.get("/users",(req,res)=>{
console.log(req.query);
console.log(req.query.name);
let{name,age}=req.query
let filteredData=users.filter((userObj)=>{
return (userObj.name==name && userObj.age==age)
})
res.send(filteredData)
})
app.post("/users",(req,res)=>{
console.log(req.body);
users=req.body
res.json({
message:"data received",
user:req.body
})
})
app.patch("/users",(req,res)=>{
console.log(req.body);
let dataToBeUpdated=req.body
for(key in dataToBeUpdated){
users[key]=dataToBeUpdated[key]
}
res.json({
message:"data updated"
})
})
app.delete("/users",(req,res)=>{
users={}
res.json({
message:"data deleted"
})
})
//Params
app.get("/users/:id",(req,res)=>{
console.log(req.params.id)
res.json({msg:"user id is",
obj:req.params})
})
app.listen(5000);