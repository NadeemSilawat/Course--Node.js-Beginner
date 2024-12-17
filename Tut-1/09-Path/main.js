const fs = require('fs');
const path = require('path');

const imagePath = '../assets/images/updated.jpeg'; // or './abc.png', etc.

fs.access(imagePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.log(`Image ${imagePath} does not exist.`);
    } else {
      console.log(`Image ${imagePath} exists!`);
    }
  });