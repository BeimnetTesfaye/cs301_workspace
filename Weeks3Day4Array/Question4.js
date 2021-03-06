"use strict";
/**
 * 
 * @param {Array} arr 
 * @returns {Array} 
 /
function rotateLeft(arr){
    let value1=arr.pop();
    arr.unshift(value1);
    return arr;
}

let arr=[1,2,3,4];
console.log(rotateLeft(arr));