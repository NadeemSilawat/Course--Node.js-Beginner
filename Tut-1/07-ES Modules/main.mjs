import conditions from './math-esm.mjs';
// import * as conditions from './math-esm.mjs'
// import {add, multiply} from './math-esm.mjs'

/* 
const {add , multiply} = conditions

console.log(add(9,4))
console.log(multiply(0,4))
 */

console.log(conditions.add(9, 4));
console.log(conditions.multiply(0, 4));

/* ES Module Summary:-


    ES Modules is the ECMAScript standard for modules

    It was introduced with ES2015

    Node.js 14 and above support ES Modules Instead of module.exports,
    we use the export keyword We import the exported variables or functions 
    using the import keyword If it is a default export, we can assign any name while importing

    The export can be default or named

    If it is a named export, the import name must be the same

*/
