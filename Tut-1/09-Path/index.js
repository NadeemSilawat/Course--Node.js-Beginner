const path = require('node:path');

// console.log(__filename);
// console.log(__dirname);


// console.log(path.basename(__filename)); //This line prints the base name of the current file.
// console.log(path.basename(__dirname));  //This line prints the base name of the current directory. 
 
// console.log(path.extname(__filename))
// console.log(path.extname(__dirname))


// console.log(path.parse(__filename))
// console.log(path.parse(__dirname))

// console.log(path.format(path.parse(__dirname)))

// console.log(path.isAbsolute(__filename))
// console.log(path.isAbsolute('./data.js'))

// console.log(path.join("folder1","folder7","folder2","../../index.html"))
// console.log(path.join("/folder1","folder2","index.html"))
// console.log(path.join("/folder1","//folder2","index.html"))
// console.log(path.join("/folder1","//folder2","../index.html"))
// console.log(path.join(__dirname, "data.json"));



console.log(path.resolve("folder1","folder2","index.html"))
console.log(path.join("folder1","folder2","index.html"))
// console.log(path.resolve("/folder1","folder2","index.html"))
// console.log(path.resolve("/folder1","//folder2","index.html"))
// console.log(path.resolve("/folder1","//folder2","../index.html"))
// console.log(path.resolve(__dirname, "data.json"));



