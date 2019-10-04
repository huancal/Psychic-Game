// need on key event that records any letter user inputs
// need response from computer than randomly selects a key
// Condition where if letter selected by user is same as user its a win 
// condition where if letter selected by user is different than computer its a loss
// display the wins and losses to html
// display how many guesses left
// display how many guesses so far

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ]

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

var wins = 0
var losses = 0
var guesses_left = 9
var Guesses_so_far = []

var playerGuess

// this function is when a user inputs a key
document.onkeyup = function (event) {
    // convert to lower in case user inputs upper case
    playerGuess = event.key.toLowerCase();
    guesses_left--;
    Guesses_so_far.push(playerGuess);
    // re-generating computer tries 
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    document.querySelector('#your_guesses_so_far').innerHTML = playerGuess.join(' , ');

    // in case a user wins the game
    if (playerGuess === computerGuess) {
        wins++
        document.querySelector('#wins').innerHTML = wins
        // resets all guesses and guesses so far variables
        reset_game()
    }
    if (guesses_left === 0) {
        losses++
        document.querySelector('#losses').innerHTML = losses
        reset_game()
    }



}

var reset_game = function () {
    guesses_left = 9
    Guesses_so_far = []
    document.querySelector('#guesses_left').innerHTML = guesses_left
    document.querySelector('#your_guesses_so_far').innerHTML = Guesses_so_far

}