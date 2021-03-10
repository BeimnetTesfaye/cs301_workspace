"use strict";
/**
 * 
 * @param {String} str is astring
 * @returns{String} will return string
 */
function titleCase(str){
    return str.CharAt[0].toUppercase()+str.substring(1);
}

console.log(titleCase("hello whats up"));