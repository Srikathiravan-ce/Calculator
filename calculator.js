const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.listen(process.env.PORT||3000,function(){
  console.log("Server started at 3000");
});

app.get("/",function(req,res){
  console.log("get request received on /");
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
  console.log("post request received on /0");
  var a = Number(req.body.a);
  var b = Number(req.body.b);
  var result = a+b;
  function sendResult(){
    document.getElementById("result").innerHTML=result;
  }
  res.sendFile(__dirname+"/index.html");
  function sendResult(){
    document.getElementById("result").innerHTML=result;
  }
  res.send("answer is "+result);
});
