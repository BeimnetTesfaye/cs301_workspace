"use strict"
let prompt = require("prompt-sync")();
let numberofBoxes = +prompt("Enter number of boxes: ");
let boxesPerStack = +prompt("Enter boxes per stack: ");
let numberofStacks = Math.ceil(numberofBoxes/boxesPerStack);
console.log(numberofStacks);