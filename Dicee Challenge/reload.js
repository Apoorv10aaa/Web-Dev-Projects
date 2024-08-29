var n1=Math.random();
var n2=Math.random();
n1 *= 6;
n2 *= 6;
n1=Math.floor(n1)+1;
n2=Math.floor(n2)+1;
console.log(n1);
console.log(n2);

if(n1>n2){
    document.querySelector(".heading").textContent="Player 1 Won";
    document.querySelector(".heading").style.fontSize="7rem";
}
else if(n2>n1){
    document.querySelector(".heading").textContent="Player 2 Won";
    document.querySelector(".heading").style.fontSize="7rem";
}
else{
    document.querySelector(".heading").textContent="Draw";
}

var firstImgSource="./images/dice"+n1+".png";
var secondImgSource="./images/dice"+n2+".png";
console.log(firstImgSource);
console.log(secondImgSource);

document.querySelector(".one img").setAttribute("src",firstImgSource);
document.querySelector(".two img").setAttribute("src",secondImgSource);
