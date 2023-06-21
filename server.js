const express = require("express");
const https = require("https");
const app = new express();
const path = require("path");
const cors = require("cors");

app.use("",cors);

app.use(express.static(path.join(__dirname,"public")));

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname ,"public", "news.html"));
});

app.listen(process.env.PORT || 3000,function(){
    console.log("server running");
});