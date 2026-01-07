// String basic example
let name = "JavaScript";
console.log(name);

// String methods
let text = " Hello JavaScript ";

console.log(text.length); // Length of string
console.log(text.toUpperCase()); // Convert to uppercase
console.log(text.trim()); // Remove extra spaces
console.log(text.includes("Java")); // Check if word exists
console.log(text.slice(1, 6)); // Extract part of string

// Template literals
let name1 = "JD";
let course = "JavaScript";
console.log(`Hello ${name1}. Welcome to ${course}`);

// Escape characters
console.log('Hello "JavaScript"');
console.log("Line1\nLine2");

// Numbers
let age = 25;
let price = 99.99;
console.log(age, price);

// Number conversion
let value = "10";

console.log(typeof value); // string
console.log(typeof Number(value)); // number
console.log(parseInt(value)); // integer
console.log(parseFloat(value)); // float

// Decimal formatting
let num = 5.496387;
console.log(num.toFixed(2)); // 2 decimal places

// NaN example
console.log("abc" * 10);

// Infinity example
console.log(1 / 0);
console.log(-1 / 0);

// Math methods
console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

// Random number (0–10)
console.log(Math.round(Math.random() * 10));

// Max and Min
console.log(Math.max(10, 20, 5, 40, 7));
console.log(Math.min(10, 20, 6, 7, 41));

// Square root
console.log(Math.sqrt(25));
