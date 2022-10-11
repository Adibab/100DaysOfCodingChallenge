//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let powerRangers = ["Mighty Morphin", "Alien Rangers", "Zeo"];
// powerRangers.forEach((Element) => console.log(Element))

//Create and array of numbers
let nums1 = [21, 56, 88, 24, 99,710]
//Return a new array of numbers that includes every even number from the previous Arrays
// let evens = arr => arr.filter ( item => item%2 === 0)
// console.log(evens(nums1))

//  function ArrayOfEvenNum (num){
//  let newArrayOfEvenNum = [];
//   num.map((item) => {
//     if ( item % 2 === 0){
// newArrayOfEvenNum.push(item)
//     }
// }); return newArrayOfEvenNum
// } ; 
// console.log(ArrayOfEvenNum(nums1))


//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function sumSecondLowAndHigh(num) {
    let sorted = num.sort((a, b) => a-b)
    return (sorted[1] + sorted[ sorted.length -2])
}
console.log(sumSecondLowAndHigh(nums1))

//  let newArrayOfEvenNum = [];
//   num.map((item) => {
//     if ( item % 2 === 0){
// newArrayOfEvenNum.push(item)
//     }
// }); return newArrayOfEvenNum
// } ; 
// console.log(ArrayOfEvenNum(nums1))


















// 

// powerRangers.forEach( show => console.log( show ) 

// function sumSecondLowAndHigh(arr){
//     let sorted = arr.sort((a,b)=> a-b)
//     alert( sorted[1] + sorted[ sorted.length - 2] )
// }
// sumSecondLowAndHigh([2,3,1,5,4])


// let onlyEvens = (arr) => arr.filter((n) => n % 2 === 0);

// console.log(onlyEvens(nums));