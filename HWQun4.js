const prompt=require("prompt-sync")();
let beginingodometer=+prompt("please enter the begining odometer");
let endingodometer=+prompt("please enter the ending odometer");
let numberofgas=+prompt("please enter the number of gas");
let totaldistance=endingodometer-beginingodometer;
let mileage=totaldistance/numberofgas;
console.log(mileage);