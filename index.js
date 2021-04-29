// alert("working") // testing

//more step
// var randomNumber1 = Math.random() * 6;
// randomNumber1 = Math.floor(randomNumber1) + 1;


//dice player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1 - 6

var randomDiceImg = ("dice" + randomNumber1 + ".png"); //dice1.png -dice6.png

var randomImageSouce1 = "images/" + randomDiceImg; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSouce1);


//dice player 2 ( all combine compare player 1 scripts)
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1 - 6

var randomImageSouce2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSouce2);

//Show winer & draw results in title
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = ("🎆Player 1 Wins!")
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = ("Player 2 Wins🎊!")
} else {
    document.querySelector("h1").innerHTML = ("🤝Draw🤝")
}