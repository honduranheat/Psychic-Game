

//Comments
// I had to set lives == -1 or else it wouldnt count down properly. Dont know why.
// After resetGlobalBariables runs, the mouse needs to be clicked an extra time to run the game again. I couldnt figure out how to just make it restart
// automatically. 
// The guesslog shows the comma before the letter in the browser
//=======================================================================================================


// Variables
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var encouragement = ["Social anxiety is basically Conspiracy Theories about yourself.","If wookies have a 400 year life span, then Han Solo is basically like Chewbacca's third dog",
                    "Anybody that questions why you are shoveling six inches of snow in the *middle* of a snowstorm hasn't shoveled twelve inches of snow at the end of a snowstorm.",
                    'When medication says \"do not operate heavy machinery\" they\'re probably mainly referring to cars, but my mind always goes to forklift.',"At the age of 60, Snoop Dogg will be 420 in dog years",
                    'The olympics is the only time when you hear, "Great execution by North Korea" and it seems okay.',"It kinda makes sense that the target audience for fidget spinners lost interest in them so quickly",
                    'Somebody at google was just like "yea, just have someone drive down every road on earth".',"Only dead fish go with the flow.", "Zombies eat brains. You're safe.", "In the end, we only regret the chances we didn't take and all our poorly timed farts.",
                    "If you punch someone at exactly 11:59:59pm on a saturday night, you will have knocked them into next week."]
var wordsToLiveBy = encouragement[Math.floor(Math.random() * encouragement.length)];
var lives = 10;
var winTotal = 0;
var lossTotal = 0;
var guessesMade = 0;
var gameWon = false;
var gameState = "";
var guessLog = [];
var computerPick = computerChoices[Math.floor(Math.random() * computerChoices.length)];   

var playitAgain = document.querySelector(".shutupAndPlayTheHits");
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

    
    if (lives == -1) { 
        endGame();
    }

    function endGame() {
        if (gameWon) {
            alert("You win! HIP-HIP-HOORAY! WHOOPIE! YAAAAaay...alright....cool...awesome..............");
            winTotal++;
            resetGlobalVariables();
            
        } else {
            alert("You lose. The letter was " + computerPick);
            lossTotal++;
            resetGlobalVariables(); 
        }
    }




    function resetGlobalVariables() {
        playGame();
        lives = 10;
        guessesMade = 0;
        computerPick = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        wordsToLiveBy = encouragement[Math.floor(Math.random() * encouragement.length)];
        gameWon = false;
        guessLog = [];
       
    }
    
}



    
    
    
  
  




    

