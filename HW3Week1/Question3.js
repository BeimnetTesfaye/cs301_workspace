const prompt=require("prompt-sync")();
let costofthehouse=+prompt("please the cost here");
if(costofthehouse>0 && costofthehouse<50,000){
    console.log(costofthehouse*0.05);
}
if(costofthehouse>50,000 && costofthehouse<100,000){
    console.log(1000+(costofthehouse-50,000));
}
if(costofthehouse>100,000 && costofthehouse<200,000){
    console.log(200+(costofthehouse-100,000)*0.15);
}
if(costofthehouse=>200,000){
    console.log(5000+(costofthehouse-200000)*0.1);
}
