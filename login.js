/*  const mysql=require("mysql");
 const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sonali9@",
    database: "node.js"
 });

 connection.connect(function(error){
    if (error) throw error
    else console.log("connected to database!")
 }) */
 var mysql      = require('mysql2');
 const express= require("express");
 const app = express();
 const bodyParser = require("body-parser");
 const encoder = bodyParser.urlencoded();
var connection = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "sonali9@",
   database: "ishadb2"

});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});


app.get("/",function(req,res){
 res.sendFile(__dirname +"/index.html");   
})

app.post("/",encoder,function(req,res){
   var Email=req.body.Email_Address;
   var user_password =req.body.password;

   connection.query("select * from loginuser where Email =? and user_password =?",[Email,user_password],function(error,results,fields){
      if(results.length>0){
         res.redirect("/event");
      } else{
         res.redirect("/");
      }
      res.end();
   })
})

app.get("/event",function(req,res){
res.sendFile(__dirname + "/event.html")
})

app.listen(4500);
