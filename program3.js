
const prompt=require("prompt-sync")();
let r=prompt("please enter radius here");
let numr=Number(r);
let h=prompt("please enter height");
let numh=Number(h);
 const p=3.14;
let result=p*Math.pow(numr,2)*numh;

console.log(result);