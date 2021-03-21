console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, for example 'Hello, Jo!'
function helloName(name) {
  return name;
}
// Remember to call the function to test
console.log('Testing helloName function');
console.log('Hello', helloName('Jo'));
console.log('Hello', helloName('Shyla'));
console.log('Hello', helloName('Joleen'));
console.log('Hello', helloName('Sam'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
console.log('Testing addNumbers function');
console.log('Addition total =', addNumbers(1, 2));
console.log('Addition total =', addNumbers(4785.836, 337.98));
console.log('Addition total =', addNumbers(987, 654));
console.log('Addition total =', addNumbers(.467, 847));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3){
  return num1 * num2 * num3;
}
console.log('Testing multiplyThree function');
console.log('Multiplication total =', multiplyThree(1, 2, 0));
console.log('Multiplication total =', multiplyThree(.467, 3, 10));
console.log('Multiplication total =', multiplyThree(-35, 7, 98));
console.log('Multiplication total =', multiplyThree(.35, -3, 27));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0){
    return true;
  } else {
    return false;
  }//end is num positive
}//end isPositive function

// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast(array) {
 return array[array.length-1];
}
console.log('Testing getLast function');
console.log('The last element in the array is', getLast([]));
console.log('The last element in the array is', getLast([3, -5, 0, .637, 298, 11]));
console.log('The last element in the array is', getLast([2, .874, 13]));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find(value, array){
  for(let i=0; i<array.length; i++){
    if(value >= 0 || value === array[i]){
      return true;
    } else {
      return false;
    }//end conditional
  }//end for loop
}//end find function

// //find function written with a for of loop and ternary operator
// function find(value, array){
//   for(let item of array){
//     return value ? value >= 0 || value === item : false;
//   }//end for of loop
// }//end find function

console.log('Testing find function');
console.log('The value is', find(2, [])); //undefined
console.log('The value is', find(1, [5, 7, 9, 11, 13])); //true
console.log('The value is', find(0, [23, 13, 15, 19, 5])); //true
console.log('The value is', find(-1, [11, 14, 15])); //false
console.log('The value is', find(2, ['Shyla', 'Sam', 'JoJo', 'Joleen'])); //true
console.log('The value is', find('Shyla', ['Shyla', 'Sam', 'JoJo', 'Joleen'])); //true
console.log('The value is', find('John', ['Shyla', 'Sam', 'JoJo', 'Joleen'])); //false
console.log('The value is', find(11, [2, 3, 4, 11])); //true

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
 for(let i=0; i<string.length; i++){
   if(letter === string[0]){
     return true;
   } else {
     return false;
   }//end conditional
 }//end for loop
}//end isFirstLetter function
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );
console.log( 'isFirstLetter - should say true', isFirstLetter('b', 'banana') );
console.log( 'isFirstLetter - should say false', isFirstLetter('c', 'lilikoi') );

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0
  // TODO: loop to add items
  for(let i=0; i<array.length; i++){
    sum += array[i];
  }//end for loop
  return sum;
}//end sumAll function
console.log('Testing sumAll array...');
console.log('The sum of this array is:', sumAll([]));
console.log('The sum of this array is:', sumAll([3, 5, 7, 9, 11]));
console.log('The sum of this array is:', sumAll([-2, 2,-4, 1, 0]));
console.log('The sum of this array is:', sumAll([.345, 839347, 2.45]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

//declaring new variable with a value of an empty array to accept any positive integers from the input array.
let positiveArray = [];
//declaring a function to loop through an input array and add any positive integers to the variable positiveArray.
function returnAllPositives(inputArray){
 for(let i=0; i<inputArray.length; i++){
   if(inputArray[i] > 0){
     positiveArray.push(inputArray[i])
   } //end condidtional
 } //end loop
 //returns the new array of only positive integers once the input array has been looped through.
 return positiveArray;
} //end returnAllPositives function

console.log(returnAllPositives([-2, 2,-4, 1, 0]));

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

// I chose the Edabit challenge 'Boolean to String Conversion' found at
//https://edabit.com/challenge/KSTkFSnaYBJdo6PHx
//The challenge asks us to create a function that takes in an argument 'flag',
//and to convert the boolean input into a string.

//function to convert a boolean to a string that accepts an argument
function boolToString(flag){
  if(flag === true){
    return 'true';
  } else if (flag === false){
    return 'false';
  }//end conditional
}// end boolToString function

console.log(boolToString(true)); //returns the string true
console.log(boolToString(false)); //returns the string false
console.log(boolToString('Shyla'));
