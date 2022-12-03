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
matchResults[44].setResult(0, 2);
matchResults[45].setResult(2, 1);
matchResults[46].setResult(2, 3);
matchResults[47].setResult(1, 0);
matchResults[48].setResult(3, 1);
matchResults[49].setResult(2, 1);
// matchResults[50].setResult(2, 0);
// matchResults[51].setResult(2, 0);
// matchResults[52].setResult(1, 1);
// matchResults[53].setResult(2, 0);
// matchResults[54].setResult(1, 2);
// matchResults[55].setResult(2, 1);

//console.log(matchResults);
//matchResults = nike.tips.m;

//predikovanie ---------------
function median(values) {
    if (values.length === 0) throw new Error("No inputs");

    values.sort(function (a, b) {
        return a - b;
    });

    var half = Math.floor(values.length / 2);

    if (values.length % 2) return values[half];

    return (values[half - 1] + values[half]) / 2.0;
}

function mode(a) {
    a = a.slice().sort((x, y) => x - y);

    var bestStreak = 1;
    var bestElem = a[0];
    var currentStreak = 1;
    var currentElem = a[0];

    for (let i = 1; i < a.length; i++) {
        if (a[i - 1] !== a[i]) {
            if (currentStreak > bestStreak) {
                bestStreak = currentStreak;
                bestElem = currentElem;
            }

            currentStreak = 0;
            currentElem = a[i];
        }

        currentStreak++;
    }

    return currentStreak > bestStreak ? currentElem : bestElem;
}

function predictMode(comps) {
    var predict = new Competitor("predictMode");
    var H, A;
    predict.tips = JSON.parse(JSON.stringify(comps[0].tips));
    for (var z = 0; z < 48; z++) {
        H = [parseInt(predict.tips.m[0].results.H)];
        A = [parseInt(predict.tips.m[0].results.A)];
        for (var i = 1; i < comps.length; i++) {
            H.push(parseInt(comps[i].tips.m[z].results.H));
            A.push(parseInt(comps[i].tips.m[z].results.A));
        }
        console.log(mode(A), mode(H));
        predict.tips.m[z].results.H = mode(H);
        predict.tips.m[z].results.A = mode(A);
    }
    return predict;
}

function predictMedian(comps) {
    var predict = new Competitor("predictMedian");
    var H, A;
    predict.tips = JSON.parse(JSON.stringify(comps[0].tips));
    for (var z = 0; z < 48; z++) {
        H = [parseInt(predict.tips.m[0].results.H)];
        A = [parseInt(predict.tips.m[0].results.A)];
        for (var i = 1; i < comps.length; i++) {
            H.push(parseInt(comps[i].tips.m[z].results.H));
            A.push(parseInt(comps[i].tips.m[z].results.A));
        }
        // console.log(median(A), median(H));
        predict.tips.m[z].results.H = median(H);
        predict.tips.m[z].results.A = median(A);
    }
    return predict;
}

function predict(comps) {
    var predict = new Competitor("predictAvg");
    var H, A;
    predict.tips = JSON.parse(JSON.stringify(comps[0].tips));
    for (var z = 0; z < 48; z++) {
        H = parseInt(predict.tips.m[0].results.H);
        A = parseInt(predict.tips.m[0].results.A);
        for (var i = 1; i < comps.length; i++) {
            H += parseInt(comps[i].tips.m[z].results.H);
            A += parseInt(comps[i].tips.m[z].results.A);
        }
        // console.log(Math.round(H / competitors.length), Math.round(H / competitors.length));
        predict.tips.m[z].results.H = Math.round(H / comps.length);
        predict.tips.m[z].results.A = Math.round(A / comps.length);
    }
    console.log(predict);
    return predict;
}

// var predictAvg = predict(competitors);
// var predictMed = predictMedian(competitors);
// var predictMod = predictMode(competitors);
// competitors.push(predictAvg);
// competitors.push(predictMed);
// competitors.push(predictMod);

//---------------------
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
