const prompt=require("prompt-sync")();
let name=prompt("please enter Student name here");
let credits=+prompt("please enter completed credits");
if(credits>0 && credits<30){
    console.log("Freshman");
}
if(credits>=30 && credits<60){
    console.log("sophompre");
}
if(credits>=60 && credits<90){
    console.log("Junior");
}
if(credits>90){
    console.log("senior");
}