// -----------------------------
// Example 1: Lexical Scope
// -----------------------------

function outer() {
  let name = "JD"; // outer function variable

  function inner() {
    let age = 25; // inner function variable
    console.log(name); // can access outer variable
    console.log(age); // can access its own variable
  }

  inner();

  // console.log(age); ❌ Error
  // age is not accessible here because it is inside inner()
}

outer();

// -----------------------------
// Example 2: Basic Closure
// -----------------------------

function outer() {
  let count = 0; // this variable will be remembered

  function inner() {
    count++; // updates outer variable
    console.log(count);
  }

  console.log(`Initial count: ${count}`);
  return inner; // returning inner function creates a closure
}

const counter = outer(); // outer() runs once

counter(); // 1
counter(); // 2

// -----------------------------
// Example 3: Closure with Parameters
// -----------------------------

function greet(name) {
  return function () {
    console.log(`Hello ${name}`);
  };
}

const greetJD = greet("JD");
greetJD(); // Hello JD

const greetChannel = greet("JDCodebase");
greetChannel(); // Hello JDCodebase

// -----------------------------
// Example 4: Multiple Closures
// -----------------------------

function multiply(x) {
  return function (y) {
    return x * y; // remembers value of x
  };
}

const double = multiply(2);
console.log(double(5)); // 10

const triple = multiply(3);
console.log(triple(3)); // 9
