var express = require("express");
var request = require("request");
var bodyparser = require("body-parser");
var app = express();

app.listen(3000);

app.get("/webhook", function(req,res){
	if(req.query["hub.verify_token"] == "try123"){
		res.send(req.query["hub.challenge"]);
	}
});

app.post("/webhook", function(req,res){
	console.log("done");
	
});