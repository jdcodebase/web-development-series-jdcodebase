// ===============================
// SYNCHRONOUS CODE (BLOCKING)
// ===============================

// These lines run one after another in order
// JavaScript will not skip or delay them

console.log("start");
console.log("middle");
console.log("End");

// ===============================
// ASYNCHRONOUS CODE (NON-BLOCKING)
// ===============================

console.log("Start");
// This runs first because it is synchronous

// setTimeout is asynchronous
// It sends the task to the Web APIs and does NOT block the main thread

setTimeout(() => {
  console.log("4000");
}, 4000); // runs after 4 seconds

setTimeout(() => {
  console.log("2000");
}, 2000); // runs after 2 seconds

setTimeout(() => {
  console.log("3000");
}, 3000); // runs after 3 seconds

setTimeout(() => {
  console.log("1000");
}, 1000); // runs after 1 second

console.log("End");
// This runs immediately after "Start"
// JavaScript does NOT wait for setTimeout

// ===============================
// CALLBACK FUNCTION EXAMPLE
// ===============================

// This function accepts another function as an argument
// That function is called a CALLBACK

function fetchData(callback) {
  // Simulating data fetching with setTimeout
  setTimeout(() => {
    callback("Data Received"); // callback runs AFTER async task
  }, 1000);
}

// Passing a function as a callback
fetchData((result) => {
  console.log("Result: " + result);
});

// ===============================
// CALLBACK HELL EXAMPLE
// ===============================

// Multiple async operations depending on each other
// This creates deeply nested callbacks

login(user, () => {
  getProfile(() => {
    getPosts(() => {
      getComments(() => {
        console.log("Done");
      });
    });
  });
});

// This structure is hard to read, debug, and maintain
// This problem is called CALLBACK HELL

// ===============================
// PROMISE EXAMPLE (MODERN WAY)
// ===============================

// Creating a Promise
// resolve → success
// reject  → error

const tempPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success"); // promise fulfilled
  }, 1000);
});

// Handling the resolved value using .then()
tempPromise.then((result) => {
  console.log(result);
});

// Promises avoid deep nesting and make async code cleaner
