"use strict";
/**
 * 
 * @param{Number} sum is anumber
 * @param{Number} average is a number
 * @returns{Number} average is a number
 */
let sum=0;
let average;
function getAverage(users){
    for(let i=0;i<users.length;i++){

        sum=sum+user[i].age;
    }
    average=sum/users.length;
    return average;
}

let users=[{name:"bem",age:30},{name:"ddd",age:23}];

console.log(getAverage(users));