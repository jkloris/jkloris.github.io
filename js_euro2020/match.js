class Match{
    constructor(teamH, teamA){
        this.teamH = teamH;
        this.teamA = teamA;
        this.results = {H: null, A: null};
    }
    setResult(H, A){
        this.results.H = H;
        this.results.A = A;
    }

    getWinner(){

        if(this.results.H > this.results.A)
            return 1;
        if(this.results.H < this.results.A)
            return 2;
        return 0;
    }

    
}


class Competitor{
    constructor(name){
        this.name = name;
        this.score = 0;
        this.tips = {topScorer: null, w1: null, w2: null, m:[]};
    }

    calcScore(matchResults){
        var sum = 0, a, b, score;
        var tmpM, tmpMR;
        for(var i in matchResults){
            this.score = sum;
            if(matchResults[i].results.H == null)
            return sum;

            score = 4;
            a = Math.abs(matchResults[i].results.H - this.tips.m[i].results.H);
            b = Math.abs(matchResults[i].results.A - this.tips.m[i].results.A);
            score = (score - a - b ) > 0 ? (score - a - b) : 0;
            
            tmpM = this.objToMatch(this.tips.m[i]);
            try {
                if(tmpM.getWinner() == matchResults[i].getWinner())
                    score++;
            } catch (error) {
                tmpMR = this.objToMatch(matchResults[i]);
                if(tmpM.getWinner() == tmpMR.getWinner())
                    score++;
            }
            
            
            sum+=score;
            this.score = sum;
            
        }
        return sum;
    }

    objToMatch(matchPattern){
        var m = new Match(matchPattern.teamH, matchPattern.teamA);
        m.results.H = matchPattern.results.H;
        m.results.A = matchPattern.results.A;

        return m;
    }
}




//zapasy zakladnej skupiny
var teamsA = ["Turkey", "Wales", "Denmark", "Belgium", "England", "Austria", "Netherlands", "Scotland", "Poland", "Spain", "Hungary", "France", "Finland", "Turkey", "Italy", "Ukraine", "Denmark", "Netherlands", "Sweden", "Croatia", "England", "Hungary", "Portugal", "Spain", "Italy", "Switzerland", "Ukraine", "North Macedonia", "Finland", "Russia", "Czech Republic", "Croatia", "Sweden", "Slovakia", "Germany", "Portugal"];
var teamsB = ["Italy", "Switzerland", "Finland", "Russia", "Croatia", "North Macedonia", "Ukraine", "Czech Republic", "Slovakia", "Sweden", "Portugal", "Germany", "Russia", "Wales", "Switzerland", "North Macedonia", "Belgium", "Austria", "Slovakia", "Czech Republic", "Scotland", "France", "Germany", "Poland", "Wales", "Turkey", "Austria", "Netherlands", "Belgium", "Denmark", "England", "Scotland", "Poland", "Spain", "Hungary", "France"];

//osemfinale
var teamsA8 = ["Wales", "Italy", "Netherlands", "Belgium", "Croatia", "France", "England", "Sweden"]
var teamsB8 = ["Denmark", "Austria", "Czech Republic", "Portugal", "Spain", "Switzerland", "Germany", "Ukraine"]

var teamsA4 = ["Switzerland", "Belgium", "Czech Republic", "Ukraine", "Italy", "England"];
var teamsB4 = ["Spain", "Italy", "Denmark", "England", "Spain", "Denmark"];

teamsA = teamsA.concat(teamsA8);
teamsB = teamsB.concat(teamsB8);

teamsA = teamsA.concat(teamsA4);
teamsB = teamsB.concat(teamsB4);





function setMatches(teamsA, teamsB){
    var matchResults = [];
    for(i in teamsA){
        matchResults.push(new Match(teamsA[i], teamsB[i]));
    }
    
    return matchResults;
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







//sutaziaci
let competitors = [];
let nike = new Competitor("NIKE");
let ondro = new Competitor("Ondro");
let jergi = new Competitor("Jergi");
let juro = new Competitor("Plcho");
let jakub = new Competitor("Kubo");
let rio = new Competitor("Rio");
let mato = new Competitor("Maťo");
let tabak = new Competitor("Tabak");
let ivo = new Competitor("Ivo");
competitors.push( ondro, jergi, juro, jakub, rio, mato, tabak, ivo);









