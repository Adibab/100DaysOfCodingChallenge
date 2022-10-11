// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
function takesArray(arrayofnum) {
  if (arrayofnum[0] < arrayofnum[arrayofnum.length - 1]) {
    console.log("Hi");
  } else if (arrayofnum[0] > arrayofnum[arrayofnum.length - 1]) {
    console.log("Bye");
  } else {
    console.log("We close in an hour");
  }
}
array1 = [50, 20, 30, 40];

takesArray(array1);
