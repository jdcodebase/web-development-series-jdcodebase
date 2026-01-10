// ===============================
// GLOBAL SCOPE
// ===============================

let course = "JS";

function showCourse() {
  console.log(course);
}

showCourse();

// ===============================
// FUNCTION (LOCAL) SCOPE
// ===============================

function greet() {
  let message = "Hello";
  console.log(message);
}

greet();

// console.log(message); // Error: message is function scoped

// ===============================
// BLOCK SCOPE (let & const)
// ===============================

{
  let age = 25;
  const city = "Delhi";
  console.log(age, city);
}

// console.log(age, city); // Error: block scoped

// ===============================
// LEXICAL SCOPE & SCOPE CHAIN
// ===============================

let username1 = "john";

function outer() {
  let username = "JD";

  function inner() {
    let num = 25;
    console.log(username); // from outer function
    console.log(num); // local to inner function
    console.log(username1); // from global scope
  }

  inner();

  // console.log(num); // Error: num is inner function scoped
}

outer();

// ===============================
// HOISTING WITH var
// ===============================

console.log(x); // undefined
var x = 10;
console.log(x); // 10

var a;
console.log(a); // undefined
var a = 10;
console.log(a); // 10

// ===============================
// HOISTING WITH let
// ===============================

// console.log(b); // ReferenceError (TDZ)
let b = 20;
console.log(b);

// ===============================
// FUNCTION HOISTING
// ===============================

hello();

function hello() {
  console.log("Hello");
}

// ===============================
// FUNCTION EXPRESSION HOISTING
// ===============================

sayHi(); // Error: sayHi is undefined

var sayHi = function () {
  console.log("Hi");
};
