const express =require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname +"/index.html");
});

app.post("/",function(req,res){
    console.log(req.body);
    var heightInMeter=(Number)(req.body.height);
    heightInMeter *= 0.3048;
    var weight=(Number)(req.body.weight);

    var bmi= weight/(heightInMeter*heightInMeter);
    res.send("Your BMI is "+bmi+" kg/m2");
})


app.listen(3000,function(){
    console.log("port started at 3000");
});