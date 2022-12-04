const http=require("http")
const fs=require("fs")
const _=require("lodash")
const server=http.createServer((req,res)=>{
console.log("request from browser to server");
console.log(req.method);
console.log(req.url);
let greet=_.once(()=>{
console.log("bye");
})
greet()
greet()
res.setHeader("Content-Type","text/html");
// res.write("<h1>Hello World</h1>")
// res.write("<h2>Hello World</h2>")
// res.end("<h3>Bye</h3>");
let path="./Views"
switch (req.url) {
case "/":
path=path+'/Index.html'
break;
case "/About":
path+='/About.html'
break; 
case "/Aboutus":
res.statusCode=301;
res.setHeader("Location","/About")
res.end()
break; 
default:
path+='/404.html'
res.statusCode=404;
break;
}
fs.readFile(path,(err,file)=>{
if(err){
console.log(err);
}
else{
res.write(file);
res.end()
}
})
})
server.listen(3000,"localhost",()=>{
console.log("server is listening on port 3000");
})