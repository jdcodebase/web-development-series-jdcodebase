// try {
//   let x = 10;
//   let result = x + 10;
//   console.log(result);
// } catch (error) {
//   console.log(error.message);
//   console.log("Something went wrong");
// } finally {
//   console.log("This will always run");
// }

function checkAge(age) {
  if (age < 18) {
    throw new Error("You must be 18 or older");
  }

  return "Access granted";
}

try {
  console.log(checkAge(25));
} catch (error) {
  console.log(error);
  console.log(error.message);
}
