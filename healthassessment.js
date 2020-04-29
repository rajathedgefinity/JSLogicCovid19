var difficultyinbreathing = false;
var chestpainorpressure = false;
var severeconstantlightedness = false;
var feelingdisoriented = true;
var unresponsive = false;

var finalresult = "Low Risk";

if(difficultyinbreathing || chestpainorpressure || severeconstantlightedness || feelingdisoriented || unresponsive){
    finalresult = "High Risk";
    console.log("Call 911");
}

console.log(finalresult);
