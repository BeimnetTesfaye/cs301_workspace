/* eslint-disable valid-jsdoc */
/* eslint-disable no-undef */
"use strict";
/**
 * 
 * @param {Number} num1 
 * @param {*Number} num2 
 */
function computeHCF(num1, num2) {
    while(num2!=0) {    
      let value1 = num2;
      num2 = num1 % num2;
      num1 = value1;
    }
    return num1;
  }
  console.log(computeHCF(10, 5));

  //Using function Expression
  // eslint-disable-next-line no-unused-vars
  let computeGCD = function(value1, value2){
    while(value1) {    
        // eslint-disable-next-line no-unused-vars
        let numb = numb1;
        numb1 = value1 % value2;
        value2 = numb3;
      }
      return value2;
    };
    
    console.log(computeHCF(25, 50));
  