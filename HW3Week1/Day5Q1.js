/* eslint-disable valid-jsdoc */
"use strict";
/**
 * 
 * @param {Number} num 
 */
function isPrime(value) {
    for(let i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}
console.log(isPrime(28));