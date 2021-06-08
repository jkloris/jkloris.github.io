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
    p.style.color = "#fce8dd";
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

var Jergo = new Competitor(Jergo);

submitBtn.onclick = ()=>{
    var a,b, m;
    Jergo.tips.m = [];
    for(var i in scoreA){
        a = (scoreA[i].value != "") ? scoreA[i].value:0  ;
        b = (scoreB[i].value != "") ? scoreB[i].value:0  ;
        
        m = new Match(teamsA[i], teamsB[i]);
        m.setResult(a,b);
        Jergo.tips.m.push(m);
    }

    Jergo.tips.w1 = document.getElementById("winner").value;

    var text = JSON.stringify(Jergo.tips, null, 2);
    var filename = document.getElementById("name").value;
    console.log(filename);

    download(filename, text);
}

function download(filename, text){
    var e = document.createElement("a");
    e.style.display = "none";
    e.setAttribute("href", 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    e.setAttribute('download', filename);

    document.body.appendChild(e);

    e.click();

    document.body.removeChild(e);
}

calcBtn.onclick = ()=>{
    console.log(Jergo.calcScore(matchResults));
}

