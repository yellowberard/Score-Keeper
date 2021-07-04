console.log("hi");

const p1Button= document.querySelector('.p1button');
const p2Button= document.querySelector(".p2button");

const p1Display= document.querySelector('.p1scrdisp');
const p2Display= document.querySelector('.p2scrdisp');

let p1Score=0;
let p2Score=0;
let limit =5;
 if(p1Score<limit)
 {
p1Button.addEventListener('click',function(evt){
     console.log("You pressed player 1");
     p1Score+=1;
     p1Display.textContent= p1Score;
 });
 }













