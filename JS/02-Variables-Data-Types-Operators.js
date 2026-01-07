// ================================
// Variables (let, var, const)
// ================================

let age = 25;
console.log(age);

var name = "John";
console.log(name);

var name = "Alex"; // re-declaration allowed with var
console.log(name);

let score = 10;
console.log(score);

score = 20; // re-assignment allowed with let
console.log(score);

const PI = 3.14;
console.log(PI);

// PI = 3.15; // Error: cannot re-assign const
// console.log(PI);

// ================================
// Numbers & Calculations
// ================================

let price = 99.99;
let quantity = 2;

console.log(price * quantity);

// ================================
// Strings
// ================================

let user1 = "JD";
let user2 = "John";
let user3 = `Alex`; // backticks

console.log(user1, user2, user3);

// ================================
// Boolean
// ================================

let isLoggedIn = true;
console.log(isLoggedIn);

// ================================
// typeof Operator
// ================================

console.log(typeof 10); // number
console.log(typeof "hello"); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object (JS bug)

// ================================
// Arithmetic Operators
// ================================

let a = 10;
let b = 3;

console.log(a + b); // addition
console.log(a - b); // subtraction
console.log(a * b); // multiplication
console.log(a / b); // division
console.log(a % b); // modulus (remainder)
console.log(a ** b); // exponent

// ================================
// Comparison Operators
// ================================

console.log(5 == 5); // true
console.log(5 === 5); // true
console.log(5 == "5"); // true (value only)
console.log(5 === "5"); // false (value + type)

// ================================
// Logical Operators
// ================================

let age1 = 20;
let hasId = true;

console.log(age1 > 18 && hasId); // AND operator
