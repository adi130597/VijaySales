var express = require('express');
var app=express();

app.get("/",(req,res)=>{

    res.send(
           "<h1>Vijay Sales</h1>"
           +"<hr/>"
           +"<h3>Smart Device for Sale</h3>"
           +"<br/>"
           +"<li>Laptops</li>"
           +"<li>Mobiles</li>"
           +"<li>Speakers</li>"
           +"<li>Camera</li>"
           +"</ol>"
    );
});
app.get("/aboutus",(req,res)=>{

    res.send(
           "<h1>Vijay Sales</h1>"
           +"<hr/>"
           +"<h3>Doing things extraordinari</h3>"
           +"<br/>"
           +"<li>Director:Aditya</li>"
           +"<li>Owner:Ananya</li>"
           +"<li>Manager:Akhil</li>"
           +"<li>Sales:Sam</li>"
           +"</ol>"
    );
});
var server=app.listen(9000);
console.log ("Vijay sales is running on port 9000");