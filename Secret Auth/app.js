require('dotenv').config();
const express= require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const mongoose=require("mongoose");
const session = require('express-session');
const passport=require("passport");
const passportLocalMongoose = require('passport-local-mongoose');


const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static("public"));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://127.0.0.1:27017/userDB");

const userSchema = new mongoose.Schema({
    email:String
});

const User= new mongoose.model("User",userSchema);

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User",userSchema);

const Users = require('../models/User');

passport.use(Users.createStrategy());

passport.serializeUser(Users.serializeUser());
passport.deserializeUser(Users.deserializeUser());


app.get("/",function(req,res){
    res.render("home");
})

app.get("/login",function(re,res){
    res.render("login");
})

app.get("/secret",function(req,res){
    if(req.isAuthenticated()){
        res.render("secret");
    }
});

app.post("/login",async function(req,res){

    const email=req.body.email;
    const password=req.body.password;

})

app.get("/register",function(req,res){
    res.render("register");
})

app.post("/register",function(req,res){
    User.register(new User({ email: req.body.email }), req.body.password, function (err, user) {
        if (err) {
            console.log(err);
            res.render("register");
        }
        else {
            passport.authenticate("local")(req,res,function(){
                res.redirect("/secret");
            });
        }
})});

app.listen(3000,function(){
    console.log("Server running at port 3000");
})