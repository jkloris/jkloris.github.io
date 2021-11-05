class Group {
    constructor(Team1,Team2,Team3,Team4){
        this.team1 = {t: Team1, b : 0};
        this.team2 = {t: Team2, b : 0};
        this.team3 = {t: Team3, b : 0};
        this.team4 = {t: Team4, b : 0};
        this.table = [this.team1, this.team2, this.team3, this.team4 ];

    }

    checkMatch(match){
        if(match.results.H == null) return;
        for(var i in this.table){
            if(this.table[i].t == match.teamH ){
                this.updateTable(match,i,'H');
            } else if(this.table[i].t == match.teamA)
                this.updateTable(match,i,'A');
        }
    }

    updateTable(match, index, flag){
        if(flag == 'H'){
            if(match.results.H > match.results.A)
                return this.table[index].b+=3;
            else if(match.results.H == match.results.A)
                return this.table[index].b+=1;
        }
        if(flag == 'A'){

            if(match.results.H < match.results.A)
                return this.table[index].b+=3;
            else if(match.results.H == match.results.A)
                return this.table[index].b+=1;
        }
    }
}

let groupA = new Group("Turkey", "Italy", "Wales", "Switzerland");
let groupB = new Group("Denmark", "Finland", "Belgium", "Russia");
let groupC = new Group("Netherlands", "Ukraine", "Austria", "North Macedonia");
let groupD = new Group("England", "Croatia", "Scotland", "Czech Republic");
let groupE = new Group("Spain", "Sweden", "Poland", "Slovakia");
let groupF = new Group("Hungary", "Portugal", "France", "Germany");

class PromotionCalc{
    constructor(groupA, groupB, groupC, groupD, groupE, groupF){
        this.groups = [groupA, groupB, groupC, groupD, groupE, groupF];
        this.results = [];
    }

    simulateMatches(matchResults){
        for(var g = 0 ; g < 3; g++){

            for(var i in matchResults){
                if(matchResults[i].results.H != null) continue;
                
                matchResults[i].setResult(g,1);
            }
            
        }
        

    }

    
    
}

//let promotionCalc = new PromotionCalc(groupA, groupB, groupC, groupD, groupE, groupF);

