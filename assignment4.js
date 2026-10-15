
 // Assignment 4: Loop Control Structures

// 1. Print multiplication table of 5 using for loop
console.log("-- Multiplication Table of 5 --");

for (let i = 1; i <= 5; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// 2. Find first number greater than 10 divisible by 6
console.log("\n-- First number > 10 divisible by 6 --");

let num = 11;

while (num > 10) {
    if (num % 6 === 0) {
        console.log("Found:", num);
        break;
    }
    num++;
}

// 3. Demonstrate continue
console.log("\n-- Skipping number 3 using continue --");

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}

// 4. Demonstrate do...while
console.log("\n-- do...while loop --");

let j = 1;

do {
    console.log(j);
    j++;
} while (j <= 3);
