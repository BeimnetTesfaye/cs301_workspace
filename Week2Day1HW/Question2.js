/* eslint-disable valid-jsdoc */
"use strict";
const prompt = require("prompt-sync")();
/**
 * 
 * @param {Number} num1 
 * @param {*Number} num2 
 */
function findLCM(num1, num2) {
    if ((typeof num1 !== "number") || (typeof num2 !== "number")) 
     return false;
   return (!num1 || !num2) ? 0 : Math.abs((num1 * num2) / computeHCF(num1, num2));
 }
 /**
  * 
  * @param {*Number} num1 
  * @param {*Number} num2 
  */
 function computeHCF(num1, num2) {
   num1 = Math.abs(num1);
   num2 = Math.abs(num2);
   while(num2) {
     let value = num2;
     num2 = num1 % num2;
     num1 = value;
   }
   return num1;
 }
let value1 = +prompt("please Enter num1 here: ");
let value2 = +prompt("please enter num2 here: ");
 console.log(findLCM(value1,value2));