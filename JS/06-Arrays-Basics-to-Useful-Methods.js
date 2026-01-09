// Creating arrays
let fruits = ["Apple", "Banana", "Mango"];
let colors = new Array("Red", "Green", "Blue");

// Accessing array elements
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Mango
console.log(fruits[3]); // undefined

// Updating array element
fruits[1] = "Orange";
console.log(fruits);

// Array length
console.log(fruits.length);

// push() - add at end
let numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers);

// pop() - remove from end
numbers.pop();
console.log(numbers);

// unshift() - add at start
numbers.unshift(49);
console.log(numbers);

// shift() - remove from start
numbers.shift();
console.log(numbers);

// Adding new element to fruits array
fruits.push("Kiwi");
console.log(fruits);

// slice() - non-destructive
let newFruits = fruits.slice(1, 3);
console.log(newFruits);
console.log(fruits);

// splice() - remove elements
fruits.splice(1, 2);
console.log(fruits);

// splice() - add elements
fruits.splice(1, 0, "Grapes", "Pineapple");
console.log(fruits);

// Looping using for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Looping using for...of
for (let fruit of fruits) {
  console.log(fruit);
}
