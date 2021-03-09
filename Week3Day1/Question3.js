"use strict";
/**
 * 
 * @param {String} str it takes a string
 * @returns {Boolean} it return true if it find the string
 */
function checkSpam(str){
    for(let i =0;i<str.length;i++){
        if(str.includs("lottery") || str.includs("prize")){
            return true;
        }
        return false;
    }
}