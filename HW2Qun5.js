const prompt=require("prompt-sync")();
let age=+prompt("please enter your age here");
let maxHB=220-age;
let fastestrate=0.85*maxHB;
let slowestrate=0.65*maxHB;
console.log(slowestrate);
console.log(fastestrate);

