// Creating an object
let user = {
  name: "JD",
  age: 25,
  city: "Delhi",
};

console.log(user);

// Accessing properties
console.log(user.city);
console.log(user["age"]);

// Updating existing property
user.age = 72;
console.log(user);

// Adding new property
user.email = "jd@gmail.com";
console.log(user);

// Deleting a property
delete user.city;
console.log(user);

// Adding a method to the object
user.greet = function () {
  console.log("Hello JD");
};

console.log(user);
user.greet();

// Another object with method and this keyword
let user1 = {
  name: "John",
  age: 50,
  greet() {
    console.log("Hello " + this.name);
  },
};

console.log(user1);
user1.greet();

// Adding nested object
user1.address = {
  city: "Goa",
  pincode: 101010,
};

console.log(user1);
console.log(user1.address.pincode);

// Object destructuring
let { name, age } = user;
console.log(name, age);

// Destructuring with new variable name
let { name: userName } = user1;
console.log(userName);

// Using spread operator to merge objects
let fullUsers = { ...user, ...user1 };
console.log(fullUsers);
