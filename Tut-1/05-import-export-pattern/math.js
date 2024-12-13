// Import exports Pattern
/* syntax:- (function(exports, require, module, __filename, __dirname){
    const superHero  = "Batman";
    console.log(superHero);
 })()
 */

// Pattern 1

/* const add = (a,b)=>{
    return a+b
};

module.exports = add
 */

// Pattern 2
// Module Exports in function....
// module.exports = (a, b)=>{
//     return a + b;
// };

//Pattern 3

// const add = (a,b)=>{
//     return a + b;
// };

// const subtract = (a,b) =>{
//     return a - b;
// };

// module.exports = {
//     add,
//     subtract
// };

// Most Pattern 4

// module.exports.add = (a, b) => {
//   return a + b;
// };

// module.exports.subtract = (a, b) => {
//   return a - b;
// };

// Pattern 5

exports.add = (a, b) => {
  return a + b;     
};

exports.subtract = (a, b) => {
    return a - b;     
  };
  