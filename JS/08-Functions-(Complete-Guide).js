// ------------------------------------------
// FUNCTION DECLARATION

function greet() {
  console.log("Hello World");
}

greet();
greet();

// ------------------------------------------
// PARAMETERS & ARGUMENTS

function greetUser(name) {
  console.log(`Hello ${name}`);
}

greetUser("JD");

// ------------------------------------------
// MULTIPLE PARAMETERS

function add(a, b) {
  console.log(a + b);
}

add(5, 10);

// ------------------------------------------
// RETURN STATEMENT

function multiply(num1, num2) {
  return num1 * num2;

  // This line will never run
  console.log("first");
}

let result = multiply(4, 5);
console.log(result);

// ------------------------------------------
// FUNCTION WITHOUT RETURN

function showMessage() {
  console.log("Welcome");
}

let output = showMessage();
console.log(output); // undefined

// ------------------------------------------
// DEFAULT PARAMETERS

function greet1(name = "Guest") {
  console.log(`Hello ${name}`);
}

greet1();
greet1("JD");

// ------------------------------------------
// ARROW FUNCTIONS

const add1 = (a, b) => {
  return a + b;
};

const add2 = (a, b) => a + b;

const result1 = add1(7, 8);
const result2 = add2(7, 8);

console.log(result1);
console.log(result2);

// ------------------------------------------
// ARROW FUNCTION EXAMPLES

const square = (x) => x * x;
console.log(square(5));

const sayHi = () => console.log("Hi");
sayHi();
