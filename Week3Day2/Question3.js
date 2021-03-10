"use strict";
let empty="";
function Reverse(str){
    if(str.length===0){
        return empty;
    }elseif(str.length===1){
        return str;
    }else {
        return CharAt[str.length-1] + Reverse(str.subString(str.length-2,0));
    }
}