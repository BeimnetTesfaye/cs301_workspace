"use strict";
/**
 * 
 * @param {Array} arr arrays of number
 *@return sum of numbers/
function addend(arr){
    for(let i=0;i<arr.length;i++){
        let sum=arr[0]+arr[arr.length-1];
        return sum;
    } 
}

let arr=[2,5,6,8,9];
console.log(addend(arr));