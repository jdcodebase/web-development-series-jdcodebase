// main.js
// This is the main entry file for the application

// Named import
import { PI, add } from "./math.js";

// Default import
import multiply from "./calculator.js";

console.log("PI value:", PI);
console.log("Addition:", add(2, 3));
console.log("Multiplication:", multiply(4, 5));
