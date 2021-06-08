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
        this.tips = {w1: null, w2: null, m:[]};
    }

    calcScore(matchResults){
        var sum = 0, a, b, score;
        for(var i in matchResults){

            if(matchResults[i].results.H == null)
                return sum;

            score = 4;
            a = Math.abs(matchResults[i].results.H - this.tips.m[i].results.H);
            b = Math.abs(matchResults[i].results.A - this.tips.m[i].results.A);
            score = (score - a - b ) > 0 ? (score - a - b) : 0;
            
            if(this.tips.m[i].getWinner == matchResults[i].getWinner)
                score++;

            sum+=score;
            //console.log(score);
        }
        return sum;
    }
}

var teamsA = ["Turkey", "Wales", "Denmark", "Belgium", "England", "Austria", "Netherlands", "Scotland", "Poland", "Spain", "Hungary", "France", "Finland", "Turkey", "Italy", "Ukraine", "Denmark", "Netherlands", "Sweden", "Croatia", "England", "Hungary", "Portugal", "Spain", "Italy", "Switzerland", "Ukraine", "North Macedonia", "Finland", "Russia", "Czech Republic", "Croatia", "Sweden", "Slovakia", "Germany", "Portugal"];
var teamsB = ["Italy", "Switzerland", "Finland", "Russia", "Croatia", "North Macedonia", "Ukraine", "Czech Republic", "Slovakia", "Sweden", "Portugal", "Germany", "Russia", "Wales", "Switzerland", "North Macedonia", "Belgium", "Austria", "Slovakia", "Czech Republic", "Scotland", "France", "Germany", "Poland", "Wales", "Turkey", "Austria", "Netherlands", "Belgium", "Denmark", "England", "Scotland", "Poland", "Spain", "Hungary", "France"];

function setMatches(teamsA, teamsB){
    var matchResults = [];
    for(i in teamsA){
        matchResults.push(new Match(teamsA[i], teamsB[i]));
    }
    
    return matchResults;
}

//manulane nasvavovanie vysledkov zapasu
matchResults = setMatches(teamsA, teamsB);

matchResults[0].setResult(1,4);
matchResults[1].setResult(1,1);
matchResults[2].setResult(2,4);

console.log(matchResults[2].results);
