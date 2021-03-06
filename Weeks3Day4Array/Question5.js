"use strict";
/**
 * 
 * @param {Array} arr array of numbers
 * @return {Array}
 */
function rotateRight( arr ){
    let value1 = arr.shift();
    arr.push(value1);
    return arr;
   }
   console.log(rotateRight([1,2,3,4]));