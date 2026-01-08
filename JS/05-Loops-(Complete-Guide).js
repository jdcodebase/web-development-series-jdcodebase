// for loop with continue
console.log("For Loop");
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // skip when i is 3
  }
  console.log(i);
}

// while loop
console.log("While Loop");
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

// do-while loop
console.log("do while Loop");
i = 6;

do {
  console.log(i);
  i++;
} while (i <= 5);
