var healthissues = false;
var travelledtohotspots = false;
var travelledtomexico = false;
var travelledinternationally = false;

var finalresult = "Low Risk";

var heightinfoots = 5.10;
var heightinmeters = heightinfoots / 3.281;
// console.log(heightinmeters);
var heightsquares = heightinmeters * heightinmeters;
// console.log(heightsquares);
var weightinlbs = 187.393;
var weightinkgs = weightinlbs / 2.205;
// console.log(weightinkgs);

// https://www.calculator.net/bmi-calculator.html

var BMI = weightinkgs / heightsquares;

console.log(BMI);

var output = BMI;
if (output < 18.5)
    console.log("Underweight");
else if (output >= 18.5 && output <= 25)
    console.log("Normal");
else if (output >= 25 && output <= 30)
    console.log("Obese");
else if (output > 30)
    finalresult = "Moderate Risk";
    console.log("Overweight");

if(healthissues){
    // console.log("Moderate Risk");
    finalresult = "Moderate Risk";
}

if(travelledtohotspots || travelledtomexico || travelledinternationally){
    // console.log("Moderate Risk")
    finalresult = "Moderate Risk";
}

console.log(finalresult);
