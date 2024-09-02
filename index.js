// Producing the dice image for image 1 and image 2
var rollButton = document.querySelector("button");

// Function for roll button click
rollButton.addEventListener("click", function () {
    // Random Numbers Generated from 1-6
    var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6 random number
    var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6 random number

    // Create the dice image paths
    var randomDiceImage1 = "./images/dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
    var randomDiceImage2 = "./images/dice" + randomNumber2 + ".png"; //dice1.png - dice6.png

    // Saves original images into variables
    var image1 = document.querySelector(".img1");
    var image2 = document.querySelector(".img2");

    // Set the new images
    image1.setAttribute("src", randomDiceImage1);
    image2.setAttribute("src", randomDiceImage2);

    // Changing the H1 to show which player wins
    var h1 = document.querySelector("h1");

    if (randomNumber1 > randomNumber2) { // if Player 1 wins
        h1.innerText = "🚩 Player 1 wins!";
    } else if (randomNumber2 > randomNumber1) { // if Player 2 wins
        h1.innerText = "Player 2 wins! 🚩";
    } else { // If none wins
        h1.innerText = "It's a draw!";
    }

});
