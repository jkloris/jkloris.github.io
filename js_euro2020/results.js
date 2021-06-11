
//manulane nasvavovanie vysledkov zapasu
matchResults = setMatches(teamsA, teamsB);

  matchResults[0].setResult(0,3);
// matchResults[1].setResult(1,1);
// matchResults[2].setResult(2,1);
// matchResults[3].setResult(1,1);
// matchResults[4].setResult(9,2);
// matchResults[5].setResult(1,1);
// matchResults[6].setResult(0,3);
// matchResults[7].setResult(2,1);
// matchResults[8].setResult(1,6);

//matchResults = nike.tips.m;
//pocitanie bodov


competitors.forEach((e)=>e.calcScore(matchResults));
competitors.sort((a,b) => (a.score < b.score) ? 1 : ((b.score < a.score) ? -1 : 0));
competitors.forEach((e)=>console.log(e.name + ": "+e.score));

printMResults(matchResults);
printScoreTable(competitors);

