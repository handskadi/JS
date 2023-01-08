//document.querySelectorAll(".dice img")[0].setAttribute("src","images/dice4.png");r

//Getting a number fom 1 - 6 
var rnp1 = Math.random();
    rnp1 = rnp1 * 6;
    rnp1 = Math.floor(rnp1) + 1;

var rnp2 = Math.random();
    rnp2 = rnp2 * 6;
    rnp2 = Math.floor(rnp2) + 1;


// Checking the given random number and assinging the matched images to it. 

if (rnp1 === 1) {
     document.querySelectorAll(".dice img")[0].setAttribute("src","images/dice1.png");
} else if (rnp1 === 2) {
     document.querySelectorAll(".dice img")[0].setAttribute("src","images/dice2.png");
} else if (rnp1 === 3) {
     document.querySelectorAll(".dice img")[0].setAttribute("src","images/dice3.png");
} else if (rnp1 === 4) {
     document.querySelectorAll(".dice img")[0].setAttribute("src","images/dice4.png");
} else if (rnp1 === 5) {
     document.querySelectorAll(".dice img")[0].setAttribute("src","images/dice5.png");
} else {
     document.querySelectorAll(".dice img")[0].setAttribute("src","images/dice6.png");
}

if (rnp2 === 1) {
     document.querySelectorAll(".dice img")[1].setAttribute("src","images/dice1.png");
} else if (rnp2 === 2) {
     document.querySelectorAll(".dice img")[1].setAttribute("src","images/dice2.png");
} else if (rnp2 === 3) {
     document.querySelectorAll(".dice img")[1].setAttribute("src","images/dice3.png");
} else if (rnp2 === 4) {
     document.querySelectorAll(".dice img")[1].setAttribute("src","images/dice4.png");
} else if (rnp2 === 5) {
     document.querySelectorAll(".dice img")[1].setAttribute("src","images/dice5.png");
} else {
     document.querySelectorAll(".dice img")[1].setAttribute("src","images/dice6.png");
}

// Check who is the winner! 
if (rnp1 > rnp2) {
    document.querySelector("h1").innerHTML = "&#128681  Player 1 Wins";
} else if (rnp1 < rnp2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins &#128681";
} else {
    document.querySelector("h1").textContent = "Draw!";
}