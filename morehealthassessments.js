var cough = false;
var persistentworseningcough = false;
var sorethroat = false;
var persistentdrythroat = false;
var fatigue = false;
var vomiting = false;
var diarrhea = false;

var riskcount = 0;

var finalresult = "Low Risk";

if(cough){
    riskcount+=1;
}

if(persistentworseningcough){
    riskcount+=1;
}

if(sorethroat){
    riskcount+=1;
}

if(persistentdrythroat){
    riskcount+=1;
}

if(fatigue){
    riskcount+=1;
}

if(vomiting){
    riskcount+=1;
}

if(diarrhea){
    riskcount+=1;
}

if(riskcount>2){
    finalresult = "High Risk";
}else if (riskcount<2 && riskcount>0) {
    finalresult = "Moderate Risk";
}else{
    finalresult = "Low Risk";
}

console.log(finalresult);
