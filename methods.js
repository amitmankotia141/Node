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
const userRouter=express.Router()
app.use("/users",userRouter)
userRouter
.route("/")
.get(getUser)
.post(postUser)
.patch(updateUser)
.delete(deleteUser)
userRouter
.route("/:id")
.get(userById)
//Query
// app.get("/users",)
// app.post("/users",)
// app.patch("/users",)
// app.delete("/users",)
//Params
// app.get("/users/:id",)
function getUser(req,res){
console.log(req.query);
console.log(req.query.name);
// let{name,age}=req.query
// let filteredData=users.filter((userObj)=>{
// return (userObj.name==name && userObj.age==age)
// })
// res.send(filteredData)
res.send(users)
}
function postUser(req,res){
console.log(req.body);
users.push(req.body)
res.json({
message:"data received",
user:req.body
})
}
function updateUser(req,res){
console.log(req.body);
let dataToBeUpdated=req.body
for(key in dataToBeUpdated){
users[key]=dataToBeUpdated[key]
}
res.json({
message:"data updated"
})
}
function deleteUser(req,res){
users={}
res.json({
message:"data deleted"
})
}
function userById(req,res){
console.log(req.params.id)
res.json({msg:"user id is",
obj:req.params})
}
app.listen(5000);