var scoreA = [];
var scoreB = [];

var listDiv = document.getElementById("list");
var listTicketDiv = document.getElementById("listTicket");
var p;
var node;
var submitBtn = document.getElementById("submitBtn");
// var canvas = new Canvas("canvas");

function randomColor() {
    var color = "rgb(";
    color += randomRGB() + ",";
    color += randomRGB() + ",";
    color += randomRGB() + ")";

    return color;
}

function randomRGB() {
    return Math.floor(Math.random() * 256);
}

function drawPoints(matchResults_, competitors) {
    canvas.clear();
    var x = 0,
        y = 50;
    var a;
    var cpyResults;

    for (var i in competitors) {
        canvas.ctx.beginPath();
        var clr = randomColor();
        canvas.ctx.font = "20px arial";
        canvas.ctx.strokeStyle = clr;
        canvas.ctx.fillStyle = clr;
        canvas.ctx.lineWidth = 3;
        canvas.ctx.fillText(competitors[i].name, (x += 60), y);

        console.log(canvas.ctx.strokeStyle);
        cpyResults = JSON.parse(JSON.stringify(matchResults_));

        a = competitors[i].calcScore(cpyResults);
        var e = matchResults_.length;
        var offset = 10;
        canvas.ctx.moveTo(e * 18, canvas.ctx.canvas.height - a * 4 + offset);
        e--;

        for (e; e > 0; e--) {
            a = competitors[i].calcScore(cpyResults);
            canvas.ctx.lineTo(e * 18, canvas.ctx.canvas.height - a * 4 + offset);
            cpyResults[e].results.H = null;
            if (e == 36) canvas.ctx.rect(e * 18, canvas.ctx.canvas.height - 2 - a * 4 + offset, 3, 3);
        }
        canvas.ctx.stroke();
    }
}

//generovanie inputov a p k zapasom
function generateMatches(teamsA, teamsB) {
    console.log("ASDSA");
    h2 = document.createElement("h2");
    h2.appendChild(document.createTextNode("Zápasy na tiket:"));
    // h2.style.fontSize = "30px";
    h2.style.fontWeight = "bold";
    // h2.style.fontFamily = "verdana";
    h2.style.color = "white";
    h2.style.margin = "10px";
    h2.style.marginTop = "2%";
    listTicketDiv.appendChild(h2);
    listTicketDiv.style.textAlign = "center";

    for (var i in teamsA) {
        p = document.createElement("p");
        p.style.fontSize = "20px";
        node = document.createTextNode(teamsA[i] + " vs " + teamsB[i]);
        input1 = document.createElement("input");
        input2 = document.createElement("input");
        div = document.createElement("div");
        input1.type = "number";
        input1.min = 0;
        input1.style.width = "30px";
        input2.type = "number";
        input2.min = 0;
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
        // if(  window.innerHeight / window.innerWidth > 1 && window.innerHeight / window.innerWidth < 4/3)
        //     div.style.marginLeft = "30%";
        // else if(window.innerHeight / window.innerWidth <= 1)
        //     div.style.marginLeft = "40%";
        // else
        //     div.style.marginLeft = "10%";

        listTicketDiv.appendChild(div);
    }
    listTicketDiv.appendChild(document.createElement("hr"));
}

function printMResults(matchResults) {
    h2 = document.createElement("h2");
    h2.appendChild(document.createTextNode("Výsledky zápasov:"));
    h2.style.fontSize = "30px";
    h2.style.fontWeight = "bold";
    h2.style.fontFamily = "verdana";
    h2.style.color = "white";
    h2.style.margin = "10px";
    h2.style.marginTop = "5%";
    listDiv.appendChild(h2);
    listDiv.style.textAlign = "center";

    for (var i in matchResults) {
        p = document.createElement("p");
        if (matchResults[i].results.H == null)
            node = document.createTextNode(matchResults[i].teamH + " -- : -- " + matchResults[i].teamA);
        else
            node = document.createTextNode(
                matchResults[i].teamH +
                    " " +
                    matchResults[i].results.H +
                    " : " +
                    matchResults[i].results.A +
                    " " +
                    matchResults[i].teamA
            );

        p.appendChild(node);

        //p.style.display = "inline-block";
        p.style.margin = "5px";
        p.style.fontWeight = "bold";
        p.style.color = "#fce8dd";
        p.style.fontSize = "20px";

        hr = document.createElement("hr");
        div = document.createElement("div");
        div.appendChild(p);
        div.appendChild(hr);

        div.style.width = "80%";
        div.style.textAlign = "center";
        div.style.margin = "auto";

        listDiv.appendChild(div);
    }
}

function matchToString(match) {
    var s = match.teamH + " " + match.results.H + " : " + match.results.A + " " + match.teamA;
    return s;
}

function tipsToString(man) {
    var s =
        "Celkový víťaz (20b): " +
        man.tips.w1 +
        "\nCelkový víťaz2 (10b):" +
        man.tips.w2 +
        "\nNajlepší strelec: " +
        man.tips.topScorer +
        "\n\n";
    for (var i in man.tips.m) {
        s += i * 1 + 1 + ": " + matchToString(man.tips.m[i]) + "\n";
    }
    return s;
}

function showTiket() {
    var man = document.getElementById("tips");
    var div = document.getElementById("tipsDiv");
    var ta = document.getElementById("textareaTicket");
    ta.style.visibility = "visible";
    // ta.value = "";

    switch (man.value) {
        case "Ondro":
            ta.value = tipsToString(ondro);
            break;
        case "Jergi":
            ta.value = tipsToString(jergi);
            break;
        case "Maťo":
            ta.value = tipsToString(mato);
            break;
        case "Tabak":
            ta.value = tipsToString(tabak);
            break;
        case "Plcho":
            ta.value = tipsToString(juro);
            break;
        case "Miro":
            ta.value = tipsToString(miro);
            break;
        case "Kubo":
            ta.value = tipsToString(jakub);
            break;
        case "Ivo":
            ta.value = tipsToString(ivo);
            break;
        case "Farky_A":
            ta.value = tipsToString(farkyA);
            break;
        case "Farky_M":
            ta.value = tipsToString(farkyM);
            break;
        case "Dano":
            ta.value = tipsToString(dano);
            break;
        case "Gavo":
            ta.value = tipsToString(gavo);
            break;

        default:
            break;
    }

    // ta.appendChild(text);
    div.appendChild(ta);
}

function printScoreTable(competitors) {
    // get the reference for the body
    var div = document.getElementById("tableDiv");
    div.style.width = "50%";
    div.style.textAlign = "center";
    div.style.margin = "auto";
    div.style.paddingBottom = "10%";

    h2 = document.createElement("h2");
    h2.appendChild(document.createTextNode("Tabuľka bodov:"));
    h2.style.fontSize = "30px";
    h2.style.fontWeight = "bold";
    h2.style.fontFamily = "verdana";
    h2.style.color = "white";
    h2.style.margin = "10px";
    h2.style.paddingTop = "40px";
    h2.style.marginLeft = "10%";

    div.appendChild(h2);

    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    tbl.style.width = "100%";
    var tblBody = document.createElement("tbody");

    // creating all cells
    for (var i = 0; i <= competitors.length; i++) {
        // creates a table row
        var row = document.createElement("tr");

        for (var j = 0; j < 3; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            var cell = document.createElement("td");
            cell.style.fontSize = "20px";
            cell.style.color = "white";
            cell.style.fontWeight = "bold";
            var cellText = document.createTextNode("");
            if (j == 0 && i > 0) {
                cellText = document.createTextNode(i + ".");
                cell.style.color = "hite";
            } else if (j == 1 && i > 0) cellText = document.createTextNode(competitors[i - 1].name);
            else if (j == 2 && i > 0) cellText = document.createTextNode(competitors[i - 1].score);
            else if (j == 1 && i == 0) {
                cellText = document.createTextNode("Meno");
                cell.style.fontSize = "25px";
                cell.style.color = "white";
            } else if (j == 2 && i == 0) {
                cellText = document.createTextNode("Body");
                cell.style.fontSize = "25px";
                cell.style.color = "white";
            }
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        // add the row to the end of the table body
        tblBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    div.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "1");
}

var Jergo = new Competitor(Jergo);

submitBtn.onclick = () => {
    var a, b, m;
    Jergo.tips.m = [];
    for (var i in scoreA) {
        a = scoreA[i].value != "" ? scoreA[i].value : 0;
        b = scoreB[i].value != "" ? scoreB[i].value : 0;

        //set team array
        m = new Match(teamsA4[i], teamsB4[i]);
        m.setResult(a, b);
        Jergo.tips.m.push(m);
    }

    // Jergo.tips.w1 = document.getElementById("winner2").value;
    // Jergo.tips.topScorer = document.getElementById("striker").value;

    var text = JSON.stringify(Jergo.tips, null, 2);
    var filename = document.getElementById("name").value;
    console.log(text);
    // if (Jergo.tips.w1 == "") {
    //     alert("Vyplň prosím aj tip na celkového víťaza.");
    //     return;
    // }

    // if (Jergo.tips.topscorer == "") {
    //     alert("Vyplň prosím aj tip na najlepšieho strelca.");
    //     return;
    // }
    if (filename == "") {
        alert("Doplň prosím svoje meno.");
        return;
    }

    download(filename + "_3", text);
};

generateMatches(teamsA4, teamsB4);
// alert("Vytvorte nový tiket na štvrťfinále ");
