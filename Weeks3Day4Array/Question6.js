"use strict";
/**
 * 
 * @param {Array} arr7 
 * @param {Number} num 
 * @returns {Array}
 */
function rotateNRight(arr, numb){
    for(let i = 0 ; i< numb; i++){
    let elements = arr.pop();
    arr.unshift(elements);
    
    }
    return arr;
    
   }