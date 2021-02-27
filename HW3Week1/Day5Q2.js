const prompt = require("prompt-sync")();
let r = prompt('Please enter a radius here: ');
let A;
function area(r){
A = Math.PI*r**2;
return A;
}
console.log(area(r));
// b
let H = prompt('Please enterput height of cylinder here: ');
let v;
function cylinderVolume(H){
v = area(r)*H;
return v;
}
console.log(cylinderVolume(H));