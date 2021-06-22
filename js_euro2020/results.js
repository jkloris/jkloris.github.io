
//manulane nasvavovanie vysledkov zapasu
matchResults = setMatches(teamsA, teamsB);

matchResults[0].setResult(0,3);
matchResults[1].setResult(1,1);
matchResults[2].setResult(0,1);
matchResults[3].setResult(3,0);
matchResults[4].setResult(1,0);
matchResults[5].setResult(3,1);
matchResults[6].setResult(3,2);
matchResults[7].setResult(0,2);
matchResults[8].setResult(1,2);
matchResults[9].setResult(0,0);
matchResults[10].setResult(0,3);
matchResults[11].setResult(1,0);
matchResults[12].setResult(0,1);
matchResults[13].setResult(0,2);
matchResults[14].setResult(3,0);
matchResults[15].setResult(2,1);
matchResults[16].setResult(1,2);
matchResults[17].setResult(2,0);
matchResults[18].setResult(1,0);
matchResults[19].setResult(1,1);
matchResults[20].setResult(0,0);
matchResults[21].setResult(1,1);
matchResults[22].setResult(2,4);
matchResults[23].setResult(1,1);
matchResults[24].setResult(1,0);
matchResults[25].setResult(3,1);
matchResults[26].setResult(0,1);
matchResults[27].setResult(0,3);
matchResults[28].setResult(0,2);
matchResults[29].setResult(1,4);
matchResults[30].setResult(0,1);
matchResults[31].setResult(3,1);

console.log(matchResults);
//matchResults = nike.tips.m;
//pocitanie bodov




competitors.forEach((e)=>e.calcScore(matchResults));
competitors.sort((a,b) => (a.score < b.score) ? 1 : ((b.score < a.score) ? -1 : 0));
competitors.forEach((e)=>console.log(e.name + ": "+e.score));

printMResults(matchResults);
printScoreTable(competitors);

//alert("NOVINKA! Pozri si tikety ostatných jednym kliknutím. Stačí ísť na spodok stránky")

//posutpova calkulacka
function fillTables() {
    for(var i in matchResults){
        groupA.checkMatch(matchResults[i]);
        groupB.checkMatch(matchResults[i]);
        groupC.checkMatch(matchResults[i]);
        groupD.checkMatch(matchResults[i]);
        groupE.checkMatch(matchResults[i]);
        groupF.checkMatch(matchResults[i]);
    }
}

fillTables();

promotionCalc.simulateMatches(matchResults);