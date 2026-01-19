// ===============================
// let vs const
// ===============================

let count = 1;
console.log(count); // 1

count = 2;
console.log(count); // 2

const PI = 3.14;
console.log(PI);

// Not allowed (const cannot be reassigned)
// PI = 3.15;
// console.log(PI);

// ===============================
// const with objects
// ===============================

const user = { name: "JD" };
console.log(user);

// Allowed: modifying object properties
user.name = "JDCodebase";
console.log(user);

// Not allowed: reassigning object
// user = {};

// ===============================
// const with arrays
// ===============================

const arr = [10, 20, 30];
console.log(arr);

// Allowed: modifying array elements
arr[2] = 50;
console.log(arr);

// ===============================
// Normal function
// ===============================

function add(a, b) {
  return a + b;
}

console.log(add(3, 4)); // 7

// ===============================
// Arrow function
// ===============================

const add1 = (a, b) => a + b;
console.log(add1(5, 6)); // 11

const greet = (name) => {
  return `Hello ${name}`;
};

console.log(greet("JD"));

// ===============================
// this in normal function
// ===============================

function show() {
  console.log(this);
}

show(); // global object (Node.js)

// ===============================
// this inside object
// ===============================

const user1 = {
  name: "JD",
  age: 25,

  // Normal function (method)
  sayHello: function () {
    console.log("Hey");
    console.log(this); // refers to user1
  },

  // Arrow function
  show: () => {
    console.log("arrow function");
    console.log(this); // NOT user1
  },
};

user1.sayHello();
user1.show();

// ===============================
// Arrow function at top level
// ===============================

const arrowFunc = () => {
  console.log(this);
};

arrowFunc(); // {}

// ===============================
// Spread operator (arrays)
// ===============================

const nums = [10, 20, 30];
console.log(nums);

const newNums = [...nums, 40, 50];
console.log(newNums);

// ===============================
// Spread operator (objects)
// ===============================

const user3 = {
  name: "JD",
};

const updatedUser = {
  ...user3,
  role: "admin",
};

console.log(user3);
console.log(updatedUser);

// ===============================
// Rest operator
// ===============================

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4)); // 10

// ===============================
// Object destructuring
// ===============================

const user4 = {
  name: "JD",
  age: 25,
  role: "dev",
};

// Rename while destructuring
const { name: username, role } = user4;
console.log(username, role);
