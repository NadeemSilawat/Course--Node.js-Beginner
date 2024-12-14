// Pattern 1
/* const add = (a,b)=>{
    return a + b
};

export default add ; */

// Pattern 2

/* export default (a, b )=>{
    return a + b;
}
 */

// Pattern 3
 
const add = (a,b)=>{
    return a + b
};
const multiply = (a,b)=>{
    return a * b
};


export default {
    add,
    multiply
};

