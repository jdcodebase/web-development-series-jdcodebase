// try...catch...finally example
try {
  // Normal code starts here
  let x = 10;
  let result = x + 10;

  // This will run if there is NO error
  console.log(result);
} catch (error) {
  // This block runs only if an error occurs
  console.log(error.message); // shows the actual error message
  console.log("Something went wrong");
} finally {
  // This block always runs (error ho ya na ho)
  console.log("This will always run");
}

// Function to check age
function checkAge(age) {
  // If age is less than 18, throw a custom error
  if (age < 18) {
    throw new Error("You must be 18 or older");
  }

  // If no error, return success message
  return "Access granted";
}
