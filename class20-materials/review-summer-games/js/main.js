//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
function takesInArray ( array){
    array.forEach(element => { 
        let product = 0
       product=  element * element
        console.log(product)
        
    });
}
array1 = [50, 20, 30, 40];
takesInArray(array1)