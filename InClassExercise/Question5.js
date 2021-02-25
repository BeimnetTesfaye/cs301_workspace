const prompt = require("prompt-sync")();
let age = +prompt("please enter age here");
let season = prompt("please enter season here");
if (age <= 5) {
    if (season == "summer" || season == "fall") {
        console.log("8:30PM");
    } else if (season == "Winter" || season == "Spring") { console.log("8:00PM") }
}
if (age > 6 && age < 12) {
    if (season == "summer") {
        console.log("9:30PM");
    } else if (season == "fall" || season == "Winter" || season == "Spring") {
        console.log("8:30PM");
    }
}
if (age >= 13) {
    if (season == "summer") {
        console.log("10:30PM")
    } else if (season == "winter" || season == "spring" || season == "fall") {
        console.log("9:30PM")
    }
}