"use strict";
/** */
let arr=["(",")","[","{","}","]"];
let copy=[];
for(let i=0;i<arr.length;i++){
    copy[i]=arr.pop();
}
console.log(copy);

for(let j=0;arr.length;i++){
    if(arr[i]!==copy[j]){
    console.log("Not Balanced");
    }else{
        console.log("balanced");
    }
}