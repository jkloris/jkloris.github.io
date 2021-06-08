
//manulane nasvavovanie vysledkov zapasu
matchResults = setMatches(teamsA, teamsB);

matchResults[0].setResult(1,0);
matchResults[1].setResult(1,1);
matchResults[2].setResult(2,1);
matchResults[3].setResult(1,1);


//pocitanie bodov


competitors.forEach((e)=>e.calcScore(matchResults));
competitors.sort((a,b) => (a.score < b.score) ? 1 : ((b.score < a.score) ? -1 : 0));
competitors.forEach((e)=>console.log(e.name + ": "+e.score));


