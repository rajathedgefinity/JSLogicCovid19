var fever = true;
var chills = false;
var sweating = true;

var thermometer = false;

var finalresult = "Low Risk";

if(fever){
    if(thermometer){
        console.log('Record Your Temperature');
        var temp_value = 100;
        console.log(temp_value);
        if(temp_value>98){
            // console.log("High Risk");
            finalresult = "High Risk";
        } else {
            // console.log("Moderate Risk");
            finalresult = "Moderate Risk";
        }
    } else {
        // console.log("High Risk");
        finalresult = "High Risk";
    }
}

if(chills){
    // console.log("Moderate Risk")
    finalresult = "Moderate Risk";
}

if(sweating){
    // console.log("Moderate Risk")
    finalresult = "Moderate Risk";
}

if(fever && chills){
    // console.log("High Risk");
    finalresult = "High Risk";
}

if(fever && sweating){
    // console.log("High Risk");
    finalresult = "High Risk";
}

if(chills && sweating){
    // console.log("Moderate Risk");
    finalresult = "Moderate Risk";
}


console.log(finalresult);
