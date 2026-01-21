// ---------------- PROMISE EXAMPLE ----------------

// Creating a new Promise
const myPromise = new Promise((resolve, reject) => {
  // This variable decides success or failure
  let success = false;

  // If success is true → promise is fulfilled
  if (success) {
    resolve("Data received success");
  }
  // If success is false → promise is rejected
  else {
    reject("Something went wrong");
  }
});

// Consuming the promise
myPromise
  .then((result) => {
    // Runs when promise is resolved (success)
    console.log(result);
  })
  .catch((error) => {
    // Runs when promise is rejected (error)
    console.log(error);
  })
  .finally(() => {
    // Runs no matter success or failure
    console.log("Promise Completed");
  });

// ---------------- FETCH API WITH PROMISES ----------------

// fetch() sends a request to the given URL
// fetch() always returns a Promise
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    // Convert response into JSON
    // res.json() also returns a Promise
    return res.json();
  })
  .then((data) => {
    // Actual data received from the API
    console.log(data);
  })
  .catch((error) => {
    // Handles network or fetch-related errors
    console.log(`Error ${error}`);
  });

// ---------------- ASYNC / AWAIT EXAMPLE ----------------

console.log("async await");

// Declaring an async function
// async function always returns a Promise
async function getUsers() {
  try {
    // await pauses execution until fetch resolves
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    // Manually checking HTTP errors
    if (!res.ok) {
      throw new Error("API Error");
    }

    // Reading response body only once
    const data = await res.json();

    // Logging the fetched data
    console.log(data);
  } catch (error) {
    // Handles any error inside try block
    console.log(`Error: ${error}`);
  }
}

// Calling the async function
getUsers();
