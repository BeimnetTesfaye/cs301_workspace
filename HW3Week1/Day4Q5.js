  
const prompt = require("prompt-sync")();
let num = prompt("Please enter an integer number: ");
let sum = 0;
for(let i = 0; i<num.length; i++){
    sum = sum + Number(num.charAt(i)); 
}
console.log(sum);