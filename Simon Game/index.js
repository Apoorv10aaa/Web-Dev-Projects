$(document).keydown(function(){ 
    var level=1;
    $("h1").text("Level "+level);
    var n = generateFurther();
    nextStep(n);

});


   

function generateFurther(){
    var num=Math.random();
    num =Math.floor(num * 4);
    num += 1;
    return num;
}

function nextStep(num){
    switch (num) {
        case 1:
            var green= new Audio("./sounds/green.mp3");
            green.play();
            $("#green").css("opacity","0.5");
            $("#green").css("opacity","1");
            break;
        case 2:
            var red= new Audio("./sounds/red.mp3");
            red.play();
            $("#red").css("opacity","0.5");
            $("#red").css("opacity","1");
            break;
        case 3:
            var yellow= new Audio("./sounds/yellow.mp3");
            yellow.play();
            $("#yellow").css("opacity","0.5");
            $("#yellow").css("opacity","1");
            break;
        case 4:
            var blue= new Audio("./sounds/blue.mp3");
            blue.play();
            $("#blue").css("opacity","0.5");
            $("#blue").css("opacity","1");
            break;
    
        default:
            break;
    }

}

