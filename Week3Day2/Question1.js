"use strict";
function Power(base,expo){
    if(expo===0){
        return 1;
    }else if(expo===1){
        return base;
    }esle {return base*Power(expo-1);}
}