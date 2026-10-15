
 // Assignment 3: Conditional Logic Implementation

let score = Number(prompt("Enter your test score (0-100):"));

// Using if...else to determine the grade category
let grade;

if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else if (score >= 0) {
    grade = "F";
} else {
    grade = "Invalid";
}

// Using switch to display the letter grade
switch (grade) {
    case "A":
        console.log("Grade: A");
        break;
    case "B":
        console.log("Grade: B");
        break;
    case "C":
        console.log("Grade: C");
        break;
    case "D":
        console.log("Grade: D");
        break;
    case "F":
        console.log("Grade: F");
        break;
    default:
        console.log("Invalid score!");
}

// Using ternary operator to determine pass or fail
if (grade !== "Invalid") {
    let status = score >= 40 ? "Passed" : "Failed";
    console.log("Score:", score);
    console.log("Status:", status);
}
