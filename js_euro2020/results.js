//manulane nasvavovanie vysledkov zapasu
matchResults = setMatches(teamsA, teamsB);

matchResults[0].setResult(0, 2);
matchResults[1].setResult(6, 2);
matchResults[2].setResult(0, 2);
matchResults[3].setResult(1, 1);
matchResults[4].setResult(1, 2);
matchResults[5].setResult(0, 0);
matchResults[6].setResult(0, 0);
matchResults[7].setResult(4, 1);
matchResults[8].setResult(0, 0);
matchResults[9].setResult(1, 2);
matchResults[10].setResult(7, 0);
matchResults[11].setResult(1, 0);
matchResults[12].setResult(1, 0);
matchResults[13].setResult(0, 0);
matchResults[14].setResult(3, 2);
matchResults[15].setResult(2, 0);
matchResults[16].setResult(0, 2);
matchResults[17].setResult(1, 3);
matchResults[18].setResult(1, 1);
matchResults[19].setResult(0, 0);
matchResults[20].setResult(0, 1);
matchResults[21].setResult(2, 0);
matchResults[22].setResult(2, 1);
matchResults[23].setResult(2, 0);
matchResults[24].setResult(0, 1);
matchResults[25].setResult(0, 2);
matchResults[26].setResult(4, 1);
matchResults[27].setResult(1, 1);
matchResults[28].setResult(3, 3);
matchResults[29].setResult(2, 3);
matchResults[30].setResult(1, 0);
matchResults[31].setResult(2, 0);
matchResults[32].setResult(1, 2);
matchResults[33].setResult(2, 0);
matchResults[34].setResult(0, 3);
matchResults[35].setResult(0, 1);
matchResults[36].setResult(1, 0);
matchResults[37].setResult(1, 0);
matchResults[38].setResult(0, 2);
matchResults[39].setResult(1, 2);
matchResults[40].setResult(0, 0);
matchResults[41].setResult(1, 2);
matchResults[42].setResult(2, 1);
matchResults[43].setResult(2, 4);
// matchResults[44].setResult(1, 1);
// matchResults[45].setResult(1, 1);
// matchResults[46].setResult(1, 1);
// matchResults[47].setResult(1, 1);

//console.log(matchResults);
//matchResults = nike.tips.m;
//pocitanie bodov

competitors.forEach((e) => e.calcScore(matchResults));
competitors.sort((a, b) => (a.score < b.score ? 1 : b.score < a.score ? -1 : 0));
competitors.forEach((e) => console.log(e.name + ": " + e.score));
printMResults(matchResults);
printScoreTable(competitors);

//alert("NOVINKA! Pozri si tikety ostatných jednym kliknutím. Stačí ísť na spodok stránky")

//posutpova calkulacka
function fillTables() {
    for (var i in matchResults) {
        groupA.checkMatch(matchResults[i]);
        groupB.checkMatch(matchResults[i]);
        groupC.checkMatch(matchResults[i]);
        groupD.checkMatch(matchResults[i]);
        groupE.checkMatch(matchResults[i]);
        groupF.checkMatch(matchResults[i]);
    }
}

fillTables();

// promotionCalc.simulateMatches(matchResults);

// drawPoints(matchResults, competitors)
