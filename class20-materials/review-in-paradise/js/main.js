// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favoriteFood = "subway sandwitch"
// alert(favoriteFood)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let favoriteFoodTwo = "pizza"
let newStr =favoriteFoodTwo.split( '')
console.log(newStr[1])


// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

// function takesInThreeNum  


// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.


// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"


//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function takesINOneNum (num1){

    for ( let i=0; i<num1; i++){
        if (i%5 !== 0){
console.log(i)
        }

    } 
} 

console.log(takesINOneNum(10))