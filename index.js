// console.log("hey node js");
// console.log("We will do it");

const lodash = require('lodash')

const names = ['neha', 'rahul', 'shweta', 'rishika'];
const capitalize = lodash.map(names, lodash.capitalize);

console.log(capitalize);
