// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
// let sentanceString = `Alert if the sentance is a question`;
// if (sentanceString.endsWith("?")){
// alert(sentanceString)
// }


//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
// let stringOfMultipleWords = `string of multiple jr.dev of developer.`
// console.log(stringOfMultipleWords.replace('jr. dev','software engineer'));

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
 function rockPaperScissors (){
    let random = Math.random()
    if ( random < 0.33){
        return "Rock"
    } else if ( random < 0.66){
        return "Paper"
    } else{
        return "Scissors"
    }
 }
  



// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function choices(playerChoice){
    let botChoice = rockPaperScissors();
     if ( (playerChoice === "Rock" && botChoice === "Scissors") || ( playerChoice ==="Paper" && botChoice ==="Rock") || ( playerChoice ==="Scissors" && botChoice ==="Paper") ){
        console.log("Win")
    } else if ( playerChoice === botChoice) {
        console.log("Tie")
    } else {
        console.log("You lost")
    }
}

choices("Paper")
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

 