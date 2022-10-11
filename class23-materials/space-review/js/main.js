//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arrayOfNum = [10, 20, 30, 40]
let sum = 0
// arrayOfNum.forEach((ele) => sum += ele )

arrayOfNum.reduce((acc, c) => acc+ c, 0 )
// console.log(sum)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let newArrayofNum =[]
arrayOfNum.filter((ele) => newArrayofNum.push(ele *2))
console.log(newArrayofNum)

//Create a function that takes string
//Print the reverse of that string to the console
let str1 = "Create a function that takes string ";
function takesString(str){
    let reversedstr = str.split("").reverse().join("");
    return reversedstr
}
console.log(takesString(str1))
//Create a function that takes in a string
//Alert if the string is a palindrome or not
const palindromecheck = str => alert(str === str.split("").reverse().join(""));
palindromecheck("racecar")
 
