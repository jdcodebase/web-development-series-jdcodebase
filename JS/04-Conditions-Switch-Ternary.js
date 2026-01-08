// Simple if condition
let age = 17;

if (age >= 18) {
  console.log("You are eligible to vote");
}

// if else example
let isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome User");
} else {
  console.log("Please Login");
}

// else if example
let marks = 10;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 60) {
  console.log("Grade B");
} else {
  console.log("Fail");
}

// Nested if else
let age1 = 51;
let hasId = false;

if (age1 >= 18) {
  if (hasId) {
    console.log("Welcome");
  } else {
    console.log("ID required");
  }
} else {
  console.log("You are not allowed");
}

// Logical OR operator
if (age1 >= 18 || hasId) {
  console.log("Welcome");
}

// Truthy & falsy example
let userName = undefined;

if (userName) {
  console.log("Welcome user");
} else {
  console.log("Username required");
}

// Switch statement
let day = 1;

switch (day) {
  case 1:
    console.log("Mon");
    break;
  case 2:
    console.log("Tue");
    break;
  case 3:
    console.log("Wed");
    break;
  default:
    console.log("Invalid day");
}

// Ternary operator
let age3 = 19;

let result = age3 >= 18 ? "Adult" : "Minor";
console.log(result);
