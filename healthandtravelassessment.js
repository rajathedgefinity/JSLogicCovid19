var healthissues = false;
var travelledtohotspots = true;
var travelledtomexico = false;
var travelledinternationally = false;

var finalresult = "Low Risk";

if(healthissues){
    // console.log("Moderate Risk");
    finalresult = "Moderate Risk";
}

if(travelledtohotspots || travelledtomexico || travelledinternationally){
    // console.log("Moderate Risk")
    finalresult = "Moderate Risk";
}

console.log(finalresult);
