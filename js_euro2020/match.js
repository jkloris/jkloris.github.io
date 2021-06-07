class Match{
    constructor(teamA, teamB){
        this.teamA = teamA;
        this.teamB = teamB;
    }
}

var teamsA = ["Turkey", "Wales", "Denmark", "Belgium", "England", "Austria", "Netherlands", "Scotland", "Poland", "Spain", "Hungary", "France", "Finland", "Turkey", "Italy", "Ukraine", "Denmark", "Netherlands", "Sweden", "Croatia", "England", "Hungary", "Portugal", "Spain", "Italy", "Switzerland", "Ukraine", "North Macedonia", "Finland", "Russia", "Czech Republic", "Croatia", "Sweden", "Slovakia", "Germany", "Portugal"];
var teamsB = ["Italy", "Switzerland", "Finland", "Russia", "Croatia", "North Macedonia", "Ukraine", "Czech Republic", "Slovakia", "Sweden", "Portugal", "Germany", "Russia", "Wales", "Switzerland", "North Macedonia", "Belgium", "Austria", "Slovakia", "Czech Republic", "Scotland", "France", "Germany", "Poland", "Wales", "Turkey", "Austria", "Netherlands", "Belgium", "Denmark", "England", "Scotland", "Poland", "Spain", "Hungary", "France"];

var scoreA = [];
var scoreB = [];

var listDiv = document.getElementById("list");
var p;
var node;
var submitBtn = document.getElementById("submitBtn");

for(var i in teamsA){
    p = document.createElement("p");
    node = document.createTextNode(teamsA[i] + " vs " + teamsB[i]);
    input1 = document.createElement("input");
    input2 = document.createElement("input");
    div = document.createElement("div");
    input1.type  = "number";
    input1.min  = 0;
    input1.style.width = "30px";
    input2.type  = "number";
    input2.min  = 0;
    input2.style.width = "30px";

    scoreA.push(input1);
    scoreB.push(input2);

    p.appendChild(node);
    p.style.display = "inline-block";
    p.style.margin = "5px";
    p.style.fontWeight = "bold";
    div.appendChild(input1);
    div.appendChild(p);
    div.appendChild(input2);
    if(  window.innerHeight / window.innerWidth > 1 && window.innerHeight / window.innerWidth < 4/3)
        div.style.marginLeft = "30%";
    else if(window.innerHeight / window.innerWidth <= 1)
        div.style.marginLeft = "40%";
    else
        div.style.marginLeft = "10%";


    listDiv.appendChild(div);
}

submitBtn.onclick = ()=>{
    var a,b;
    for(var i in scoreA){
        a = (scoreA[i].value != "") ? scoreA[i].value:0  ;
        b = (scoreB[i].value != "") ? scoreB[i].value:0  ;
    }
}
