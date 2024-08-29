const express = require ("express");
const bodyParser=require("body-parser");
const https=require("https");
const ejs=require("ejs");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("./public"));

app.set("view engine","ejs");

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
    const cityName=req.body.cityName;
    const apiid="ec1d52d6fc4f4653301a0e2b37e8f2b1";
    const units="metric";
    const url="https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+apiid+"&units="+units;
    https.get(url,function(response){
        response.on("data",function(data){
            var weatherData=JSON.parse(data);
            var temp=weatherData.main.temp;
            var description=weatherData.weather[0].description;
            var icon=weatherData.weather[0].icon;
            var feelsLike=weatherData.main.feels_like;
            var imageUrl="https://openweathermap.org/img/wn/"+icon+"@2x.png";
            
            res.render("weather",{cityName:cityName, url:imageUrl, temperature:temp, feel:feelsLike});

        })
    })
})

app.listen(3000,function(){
    console.log("port started at 3000");
});
