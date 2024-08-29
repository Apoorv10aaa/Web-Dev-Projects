const express= require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const mongoose=require("mongoose");


const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/toDoList");

const itemsSchema=new mongoose.Schema({
    toDo:String
})

const Items= mongoose.model("Item",itemsSchema);

// generating date here
let  options={weekday:"long", year:"numeric", month:"long",};
let  today= new Date();
let  date=today.toLocaleDateString("en-US", options);

// home route
app.get("/",async function(req,res){
    const toDoArray=await Items.find();
    res.render("index",{dateToday:date,items:toDoArray});
});

app.post("/",function(req,res){
    let toDoItem=req.body.newItem;
    const item=new Items({
        toDo: toDoItem
    })
    item.save();
    res.redirect("/");
})

app.post("/delete",async function(req,res){
    let del=req.body.checkbox;
    await Items.findByIdAndRemove(del);
    res.redirect("/");
});

app.listen(3000,function(req,res){
    console.log("started port at 3000");
});


