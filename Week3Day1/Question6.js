"use strict";
/**
 * 
 * @param {String} num1 is a string
 * @param {String} num2 is a string
 * @returns {undefined}
 */
function Swap(num1,num2){
    let temp=num1;
    num1=num2;
    num2=temp;
}
console.log(Swap(5,7))