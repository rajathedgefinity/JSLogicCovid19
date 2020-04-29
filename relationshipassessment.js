var familymemberorfriendsickenforlast21days = false;
var livewithsomeonehadcovid19 = false;
var beennearsomeonehadcovid19 = false;
var knownexposuretocovid19 = false;

var finalresult = "Low Risk";

if(familymemberorfriendsickenforlast21days || beennearsomeonehadcovid19 || knownexposuretocovid19){
    finalresult = "Moderate Risk"
}

if(livewithsomeonehadcovid19){
    finalresult = "High Risk"
}

console.log(finalresult);
