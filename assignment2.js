
 // Assignment 2: Operators, Expressions, and Input Handling

let bill = Number(prompt("Enter the bill amount:"));
let tipPercentage = Number(prompt("Enter the tip percentage:"));

// Calculate the tip
let tip = bill * tipPercentage / 100;

// Calculate the total amount
let total = bill + tip;

// Display the result
console.log(`Subtotal: $${bill}`);
console.log(`Tip Percentage: ${tipPercentage}%`);
console.log(`Calculated Tip: $${tip}`);
console.log(`Total Amount to Pay: $${total}`);
