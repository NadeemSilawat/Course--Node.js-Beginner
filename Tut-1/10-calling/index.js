function greet(name){
    console.log(`Hello ${name}`)
}

function greetVishwas(greetfn){
    const name = "Vishwas";
    greetfn(name);
}
greetVishwas(greet);