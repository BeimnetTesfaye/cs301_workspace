const prompt=require("prompt-sync")();
let num=+prompt("please the number here");
let i;
let factorial=1;
for(i=1;i<num;i--){
factorial=factorial*i;
}
console.log(factorial);