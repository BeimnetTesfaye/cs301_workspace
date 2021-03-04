"use strict"
//function add(numb1,numb2){
 //   return numb1+numb2;
//}

function compute(sum,value1,value2){
    return sum(value1,value2)
}

let add=function(numb1,numb2){
    return numb1+numb2;
}

let compute=function(sum,value1,value2){
    return sum(value1,value2);
}