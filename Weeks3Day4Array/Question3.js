"use strict";
/**
 * 
 * @param {*arrays} arr 
 */
function getMiddle(arr){
    for(let i=0;i<arr.length;i++){
        if(arr.length%2===0){
            let middlevalue1=arr.length/2;
            let middlevalue2=middlevalue1-1;
            let sum=arr[middlevalue1]+arr[middlevalue2];
            let average=sum/2;
            return average;
        }else {
            return Math.floor((arr.length-1)/2);
        }
       
    }
}

let arr=[2,6,8,6,4,7,6,8];
console.log(getMiddle(arr));

