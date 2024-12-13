//Pattern 1
const math = require('./math.js');

const { add, subtract } = math;         //(Destructuring Feature.)This line extracts the add & subtract functions from the math module.

console.log(add(2, 3));
console.log(subtract(4, 3));

// Patttern 2
// console.log(math.add(2, 3));
// console.log(math.subtract(4, 3));

