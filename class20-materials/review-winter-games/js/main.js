//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
array1 = [51, 20, 30, 40];
function aarayOfNewNumber(arrayofnum) {
  let newArrOfEvenNum =[]
  // for ( let i=0; i< arrayofnum.length; i++){
  //     if (arrayofnum[i] % 2 === 0){
  //        newArrOfEvenNum.push(arrayofnum[i]);
  //     }
  // }  return newArrOfEvenNum


//   arrayofnum.map((ele) => {
//     if (ele % 2 === 0) {
//       newArrOfEvenNum.push(ele);
//     }
//   });
//   return newArrOfEvenNum

arrayofnum.filter((ele) => {
    if (ele % 2 === 0) {
      newArrOfEvenNum.push(ele);
   }
});
return newArrOfEvenNum

}

console.log(aarayOfNewNumber(array1));
