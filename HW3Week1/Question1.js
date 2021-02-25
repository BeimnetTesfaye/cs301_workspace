const prompt=require("prompt-sync")();
let Footwear;
let weather=prompt("please enter the weather here");
if(weather=="hot"){
    Footwear="sandals";
    console.log(Footwear);
}else if(weather=="rain"){
    Footwear="galoshohes";
}else{
    Footwear="boots";
}
