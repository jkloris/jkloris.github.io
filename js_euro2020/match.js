class Match {
    constructor(teamH, teamA) {
        this.teamH = teamH;
        this.teamA = teamA;
        this.results = { H: null, A: null };
    }
    setResult(H, A) {
        this.results.H = H;
        this.results.A = A;
    }

    getWinner() {
        if (this.results.H > this.results.A) return 1;
        if (this.results.H < this.results.A) return 2;
        return 0;
    }
}

class Competitor {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.tips = { topScorer: null, w1: null, w2: null, m: [] };
    }

    calcScore(matchResults) {
        var sum = 0,
            a,
            b,
            score;
        var tmpM, tmpMR;
        for (var i in matchResults) {
            this.score = sum;
            if (matchResults[i].results.H == null) return sum;

            score = 5;
            a = Math.abs(matchResults[i].results.H - this.tips.m[i].results.H);
            b = Math.abs(matchResults[i].results.A - this.tips.m[i].results.A);
            score = score - a - b > 0 ? score - a - b : 0;

            tmpM = this.objToMatch(this.tips.m[i]);
            try {
                if (tmpM.getWinner() == matchResults[i].getWinner()) score += 5;
            } catch (error) {
                tmpMR = this.objToMatch(matchResults[i]);
                if (tmpM.getWinner() == tmpMR.getWinner()) ň;
                score += 5;
            }

            sum += score;
            this.score = sum;
        }
        return sum;
    }

    objToMatch(matchPattern) {
        var m = new Match(matchPattern.teamH, matchPattern.teamA);
        m.results.H = matchPattern.results.H;
        m.results.A = matchPattern.results.A;

        return m;
    }
}

//zapasy zakladnej skupiny

var teamsA = [
    "Qatar",
    "England",
    "Senegal",
    "USA",
    "Argentina",
    "Denmark",
    "Mexico",
    "France",
    "Morocco",
    "Germany",
    "Spain",
    "Belgium",
    "Switzerland",
    "Uruguay",
    "Portugal",
    "Brazil",
    "Wales",
    "Qatar",
    "Netherlands",
    "England",
    "Tunisia",
    "Poland",
    "France",
    "Argentina",
    "Japan",
    "Belgium",
    "Croatia",
    "Spain",
    "Cameroon",
    "Korea Republic",
    "Brazil",
    "Portugal",
    "Ecuador",
    "Netherlands",
    "Wales",
    "Iran",
    "Australia",
    "Tunisia",
    "Poland",
    "Saudi Arabia",
    "Croatia",
    "Canada",
    "Japan",
    "Costa Rica",
    "Ghana",
    "Korea Republic",
    "Serbia",
    "Cameroon",
];
var teamsB = [
    "Ecuador",
    "Iran",
    "Netherlands",
    "Wales",
    "Saudi Arabia",
    "Tunisia",
    "Poland",
    "Australia",
    "Croatia",
    "Japan",
    "Costa Rica",
    "Canada",
    "Cameroon",
    "Korea Republic",
    "Ghana",
    "Serbia",
    "Iran",
    "Senegal",
    "Ecuador",
    "USA",
    "Australia",
    "Saudi Arabia",
    "Denmark",
    "Mexico",
    "Costa Rica",
    "Morocco",
    "Canada",
    "Germany",
    "Serbia",
    "Ghana",
    "Switzerland",
    "Uruguay",
    "Senegal",
    "Qatar",
    "England",
    "USA",
    "Denmark",
    "France",
    "Argentina",
    "Mexico",
    "Belgium",
    "Morocco",
    "Spain",
    "Germany",
    "Uruguay",
    "Portugal",
    "Switzerland",
    "Brazil",
];

// //osemfinale
var teamsA8 = ["Netherlands", "Argentina", "France", "England", "Japan", "Brasil", "Marocco", "Portugal"];
var teamsB8 = ["USA", "Australia", "Poland", "Senegal", "Croatia", "Korea Republic", "Spain", "Switzerland"];

// var teamsA4 = ["Switzerland", "Belgium", "Czech Republic", "Ukraine", "Italy", "England", "Italy"];
// var teamsB4 = ["Spain", "Italy", "Denmark", "England", "Spain", "Denmark", "England"];

teamsA = teamsA.concat(teamsA8);
teamsB = teamsB.concat(teamsB8);

// teamsA = teamsA.concat(teamsA4);
// teamsB = teamsB.concat(teamsB4);

function setMatches(teamsA, teamsB) {
    var matchResults = [];
    for (i in teamsA) {
        matchResults.push(new Match(teamsA[i], teamsB[i]));
    }

    return matchResults;
}

function download(filename, text) {
    var e = document.createElement("a");
    e.style.display = "none";
    e.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
    e.setAttribute("download", filename);

    document.body.appendChild(e);

    e.click();

    document.body.removeChild(e);
}

//sutaziaci
let competitors = [];
let nike = new Competitor("NIKE");
let ondro = new Competitor("Ondro");
let jergi = new Competitor("Jergi");
let juro = new Competitor("Plcho");
let jakub = new Competitor("Kubo");
let farkyA = new Competitor("Farky A.");
let mato = new Competitor("Maťo");
let tabak = new Competitor("Tabi");
let ivo = new Competitor("Ivo");
let miro = new Competitor("Miro K.");
let farkyM = new Competitor("Farky M.");
let gavo = new Competitor("Gavo");
let dano = new Competitor("Dano");
competitors.push(ondro, jergi, juro, jakub, mato, tabak, ivo, farkyA, farkyM, miro, gavo, dano); //dano
