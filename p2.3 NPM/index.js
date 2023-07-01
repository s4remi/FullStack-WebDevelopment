console.log("hello i am here!");
console.log("welcome to NPM: node package manager");

// generates a random name from the list of adjectives and nouns in 'node_modules
// var generateName = require("sillyname");
// var sillyName = generateName();

// console.log("my name is" + sillyName);
// console.log("little break");
// console.log(`My name is ${sillyName}.`);

// using ESM instead of CJS
import generateName from "sillyname";
var sillyName = generateName();
console.log(`the new silly name is ${sillyName}`);
var newName = generateName();
// prints out another randomly generated name each time you run this
console.log(`newest name is ${newName}`);
