// forEach example
let numbers = [10, 20, 30, 40, 50];
console.log(numbers);

numbers.forEach((num) => {
  console.log(num * 2);
});

// map example
let prices = [100, 200, 300];

let discounted = prices.map((price) => {
  return price - 20;
});

console.log(prices);
console.log(discounted);

// filter example
let ages = [12, 18, 25, 14];

let adults = ages.filter((age) => {
  return age >= 18;
});

console.log(adults);

// reduce example
let total = prices.reduce((sum, price) => {
  return sum + price;
}, 10);

console.log(total);

// find example
let users = [
  { id: 1, name: "Alex" },
  { id: 2, name: "John" },
  { id: 2, name: "JD" },
];

let user = users.find((u) => {
  return u.id === 2;
});

console.log(user);

// some & every example
let scores = [45, 80, 30];

let hasPassed = scores.some((score) => {
  return score >= 50;
});
console.log(hasPassed);

let hasPassed1 = scores.every((score) => {
  return score >= 50;
});
console.log(hasPassed1);

// real-world example (products)
let products = [
  { name: "Phone", price: 15000 },
  { name: "PC", price: 60000 },
  { name: "Tablet", price: 50000 },
];

let prices1 = products.map((pdt) => {
  return pdt.price;
});
console.log(prices1);

let expensive = products.filter((pdt) => {
  return pdt.price > 20000;
});
console.log(expensive);

let total1 = prices1.reduce((sum, price) => {
  return sum + price;
}, 0);

console.log(total1);
