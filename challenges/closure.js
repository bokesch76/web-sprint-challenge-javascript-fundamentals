// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
// ***Since the function is nested inside of another function it can access outer variables and as such no matter where it is used, it will still have access to those outer variables. Nested functions are quite common in JavaScript and help to better organize code.***

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function summation(Num) {
  return Num * (Num + 1) / 2;
} 

console.log( summation(4) )