"use strict";
/**
 * 
 * @param {*arrays} arr 
 */
function getMiddle(arr){
    for(let i=0;i<arr.length;i++){
        if(arr.length%2===0){
            let middlevalue1=arr.length/2;
            let middlevalue2=middlevalue2-1;
            let sum=middlevalue1+middlevalue2;
            let average=sum/2;
            return average;
        }
       
    }
}

let arr=[2,6,8,6,4,7,6,8];
console.log(getMiddle(arr));