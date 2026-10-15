
 // Assignment 5: Function Architecture and Scope

// 1. Normal function to calculate rectangle area
function calculateArea(length, width = 5) {
    return length * width;
}

console.log("Area of Rectangle:", calculateArea(10, 5));
console.log("Area with Default Width:", calculateArea(10));

// 2. Arrow function to calculate square
const calculateSquare = (side) => side * side;

console.log("Area of Square:", calculateSquare(4));

// 3. Demonstrate global scope
let message = "Hello JavaScript";

function showMessage() {
    console.log("Inside Function:", message);
}

showMessage();
console.log("Outside Function:", message);

// 4. Demonstrate block scope
if (true) {
    let blockMessage = "Inside Block";
    console.log(blockMessage);
}

// Uncommenting the next line will cause an error
// console.log(blockMessage);

