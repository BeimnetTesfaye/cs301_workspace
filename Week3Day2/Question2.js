"use strict";
function Count(num){
    if(num.length===0){
        return 0;
    }esleif(num.length===1){
        return 1
    }esle{return 1+Count(num.substring(1,num.length-1) )}
}