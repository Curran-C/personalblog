const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine", "ejs");


////////////////////////////////////    GET METHODS     ////////////////////////////////////

//GET HOME
app.get("/", function(req, res) {
    res.render("homepage");
});

//GET CONTACT   
app.get("/contact", function(req, res) {
    res.render("contact");
});

//GET WORK
app.get("/work", function(req, res) {
    res.render("work");
});


////////////////////////////////////    POST METHODS    ////////////////////////////////////




app.listen(3000, function(){
    console.log("Server started at 3000");
});