var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var encouragement = ["Only dead fish go with the flow.", "Zombies eat brains. You're safe.", "In the end, we only regret the chances we didn't take and all our poorly timed farts.","If you punch someone at exactly 11:59:59pm on a saturday night, you will have knocked them into next week."]
var wordsToLiveBy = encouragement[Math.floor(Math.random() * encouragement.length)];
var lives = 10;
var winTotal = 0;
var lossTotal = 0;
var guessesMade = 0;
var gameWon = false;
var gameState = "";
var guessLog = [];
var computerPick = computerChoices[Math.floor(Math.random() * computerChoices.length)];           

console.log(computerPick);
var alreadyGuessed = document.querySelector(".guesses");

var output = document.querySelector(".highLow");




document.addEventListener("keypress", clickHandler, false);
document.addEventListener("click", clickHandler, false);

function clickHandler() {
    playGame();
}

function playGame() {
    var userGuess = event.key;
    
    
    
    gameState = "<br> Lives:  " + lives +
        " <br> Wins: " + winTotal + "<br>  Losses: " + lossTotal;
    
    
    if (userGuess != computerPick) {
        lives--;
        guessesMade++;
        output.innerHTML = wordsToLiveBy  + gameState; 
        guessLog.push(userGuess);
        alreadyGuessed.innerHTML = "Your guesses so far: " + guessLog;   
        console.log(guessLog);
    } else if (userGuess == computerPick) {
        gameWon = true;
        endGame();
    }

    if (lives === 0) { 
        endGame();
    }

    function endGame() {
        if (gameWon) {
            alert("You win!");
            winTotal++;
            resetGlobalVariables();
            
        } else {
            alert("You lose. The letter was " + computerPick + ".");
            lossTotal++;
            resetGlobalVariables(); 
        }
    }

    function resetGlobalVariables() {
        lives = 10;
        guessesMade = 0;
        computerPick = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        wordsToLiveBy = encouragement[Math.floor(Math.random() * encouragement.length)];
        gameWon = false;
        guessLog = [];
        
    }
    console.log(userGuess);
    console.log(lives);
}


/* document.onkeypress = function(event) {
    var outputGuess = document.querySelector(".alreadyGuessed");
    var userGuess = event.key;
    var computerPick = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    console.log(lives);
    console.log(computerPick);
    //for (i = lives; i < 1; i + 5) {
        if (userGuess == computerPick) {
            alert("Correct");
            
        } else if (userGuess != computerPick) {
            lives--;   
          //  outputGuess = userGuess;
        } 

        if (lives == 0) {
            alert("Game Over");
            lives + 5;
        }


    }
*/
   
    
    
    
  
  




    

