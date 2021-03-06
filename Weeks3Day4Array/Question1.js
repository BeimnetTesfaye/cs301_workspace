"use strict";
let arr1=[1,2,3,4];
let arr2=[1,2,3,4];
/**
 * 
 * @param {Array} arr1 the first array
 * @param {Array} arr2 the second array 
 * @returns{boolean} true or false
 */
function isArrayEqual(arr1,arr2){
    if(arr1.length!==arr2.length){
        return false;
    }
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]!==arr2[i]){
            return false;
        }
    }
    true;
}

console.log(isArrayEqual(arr1,arr2));