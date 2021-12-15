instrBut = document.getElementById("buttonInstr");
game1p1 = document.getElementById("game1p1");
colorText = document.getElementById("colorText")
submitBtn = document.getElementById("submitBut")
butContainer = document.getElementById("buttonContainer")
game1Div = document.getElementById("game1Div")
homepageDiv = document.getElementById("container")

QSIZE = 24

class GameManager{
    constructor(){
        this.score = null
        this.colorManager = new ColorManager()

    }
}

class ColorManager{
   
    constructor(){
        this.selected = [null, null]
        this.colorSeq = {
            a: [3, 1, 4, 3, 1, 2, 4, 2, 3, 2, 1, 4, 3, 4, 1, 2, 1, 3, 4, 2, 1, 3, 4, 2],
            b: [1, 2, 1, 3, 2, 4, 3, 1, 4, 3, 4, 1, 4, 2, 3, 2, 1, 3, 2, 1, 4, 3, 4, 2],
            c: [4, 1, 4, 3, 4, 3, 4, 2, 1, 2, 4, 3, 1, 2, 1, 3, 2, 3, 2, 3, 1, 2, 1, 4],
            d: [2, 1, 4, 3, 4, 1, 3, 4, 1, 2, 3, 2, 3, 2, 4, 3, 1, 4, 2, 4, 3, 1, 2, 1],
            e: [2, 1, 2, 4, 2, 1, 3, 4, 4, 2, 1, 3, 1, 3, 4, 1, 3, 2, 4, 1, 3, 2, 3, 4],
            f: [4, 2, 4, 1, 3, 1, 2, 3, 1, 4, 3, 4, 3, 2, 3, 2, 3, 4, 1, 2, 1, 2, 1, 4],
            g: [4, 1, 4, 3, 4, 3, 4, 3, 1, 3, 2, 1, 2, 3, 1, 3, 2, 4, 2, 1, 4, 2, 1, 2],
            h: [3, 1, 3, 2, 4, 2, 4, 3, 4, 3, 1, 4, 1, 4, 3, 2, 1, 2, 3, 1, 2, 4, 1, 2],
            i: [2, 3, 2, 4, 2, 1, 3, 1, 4, 3, 1, 2, 3, 4, 2, 1, 3, 4, 2, 1, 4, 3, 4, 1],
            j: [3, 4, 1, 3, 4, 1, 2, 1, 2, 1, 4, 2, 4, 3, 2, 1, 4, 3, 2, 3, 2, 4, 3, 1]
        }
        
    }

    returnColor(num){
        switch (num) {
            case 1:
                return "RED"
            case 2:
                return "BLUE"
            case 3:
                return "YELLOW"
            case 4:
                return "rgb(21, 194, 21)"     
            default:
                break;
        }
    }
    returnFarba(num){
        switch (num) {
            case 1:
                return "ČERVENÁ"
            case 2:
                return "MODRÁ"
            case 3:
                return "ŽLTÁ"
            case 4:
                return "ZELENÁ"     
            default:
                break;
        }
    }

    returnSeq(){
        var r = Math.floor(Math.random() * 9) + 1;

        switch (r) {
            case 1:
                return this.colorSeq.a
                break;
            case 2:
                return this.colorSeq.b
                break;
            case 3:
                return this.colorSeq.c
                break;
            case 4:
                return this.colorSeq.d
                break;
            case 5:
                return this.colorSeq.e
                break;
            case 6:
                return this.colorSeq.f
                break;
            case 7:
                return this.colorSeq.g
                break;
            case 8:
                return this.colorSeq.h
                break;
            case 9:
                return this.colorSeq.i
                break;
            case 10:
                return this.colorSeq.j
                break;
            default:
                break;
        }
    }

}

class Score{
    constructor(name, age){
        this.name = name
        this.age = age
        this.game1 = {
            part1 : [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            part2 : [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            part3 : [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            time1 : null,
            time2 : null,
            time3 : null
        }
        this.game3 = {
            part1 : [],
            time : null
        }
        this.game4 = {
            part1 : [],
            time : null
        }

    }
}

function game1part1instr() {
    document.getElementById("endGame").style.display = "block"
    game1Div.style.display = "block"
    homepageDiv.style.display = "none"
    game1p1.style.display ="none"
    instrBut.style.display = "block";
    var instrAdio = new Audio('./sounds/game1/1-1.m4a')
    instrAdio.play()
}

//########### game1
function startGame1() {
    console.log(gameManager)

    instrBut.style.display = "none"
    game1p1.style.display="block"
    colorText.style.color="black"
    colorText.style.height = "16vw"
    colorText.style.background = "none"

    gameManager.colorManager.selected[0] = gameManager.colorManager.returnSeq() 
    gameManager.colorManager.selected[1] = 0
    colorText.innerHTML = gameManager.colorManager.returnFarba(gameManager.colorManager.selected[0][0])
    setButtonOnClickGame1p1()
    gameManager.score.time1 = Date.now()
}

function game1part2instr() {
    gameManager.score.time1 = Date.now() - gameManager.score.time1
    console.log(gameManager.score)
    document.getElementById("buttonInstr2").style.display = "block";
    game1p1.style.display= "none"
    var instrAdio = new Audio('./sounds/game1/1-2.m4a')
    instrAdio.play()
    
}
function startGame1Part2() {
    console.log("part 2 started")
    document.getElementById("buttonInstr2").style.display = "none";
    game1p1.style.display = "block"

    gameManager.colorManager.selected[0] = gameManager.colorManager.returnSeq() 
    gameManager.colorManager.selected[1] = 0
    colorText.style.background = gameManager.colorManager.returnColor(gameManager.colorManager.selected[0][0])

    colorText.style.height = "16vw"
    colorText.style.width = colorText.style.height
    colorText.style.marginLeft ="42%"
    // colorText.style.marginBottom ="10vh"
    colorText.style.borderRadius = "100%"
    colorText.innerHTML = ""

    setButtonOnClickGame1p2()  
    gameManager.score.time2 = Date.now()  
}

function game1part3instr() {
    gameManager.score.time2 = Date.now() - gameManager.score.time2
    console.log(gameManager.score)
    document.getElementById("buttonInstr3").style.display = "block";
    game1p1.style.display= "none"
    var instrAdio = new Audio('./sounds/game1/1-3.m4a')
    instrAdio.play()
}

function startGame1Part3() {
    console.log(gameManager)

    document.getElementById("buttonInstr3").style.display = "none";
    game1p1.style.display="block"
    gameManager.colorManager.selected[0] = gameManager.colorManager.returnSeq() 
    gameManager.colorManager.selected[1] = 0

    colorText.style.color = gameManager.colorManager.returnColor(gameManager.colorManager.selected[0][0])

    colorText.style.background = "none"
    colorText.style.width = "100%"
    colorText.style.marginLeft = "0%"
    // colorText.style.marginBottom ="10vh"
    colorText.style.borderRadius = "0%"
    colorText.innerHTML = gameManager.colorManager.returnFarba(retOther(gameManager.colorManager.selected[0][0]))

    setButtonOnClickGame1p3()
    gameManager.score.time3 = Date.now()
}

function retOther(num) {
    r = Math.floor(Math.random()*4) + 1
    while (r == num)
        r = Math.floor(Math.random()*4) + 1
    return r
}


function redClicked1() {
    if (gameManager.colorManager.selected[0][gameManager.colorManager.selected[1]] == 1){
        gameManager.score.game1.part1[gameManager.colorManager.selected[1]] = 1
    }else{
        gameManager.score.game1.part1[gameManager.colorManager.selected[1]] = 0
    }

    gameManager.colorManager.selected[1]++
    if (gameManager.colorManager.selected[1] >= QSIZE){
        game1part2instr()
        return
    }
    colorText.innerHTML = gameManager.colorManager.returnFarba(gameManager.colorManager.selected[0][gameManager.colorManager.selected[1]])
}
function blueClicked1() {
    if (gameManager.colorManager.selected[0][gameManager.colorManager.selected[1]] == 2){
        gameManager.score.game1.part1[gameManager.colorManager.selected[1]] = 1
    }else{
        gameManager.score.game1.part1[gameManager.colorManager.selected[1]] = 0
    }

    gameManager.colorManager.selected[1]++
    if (gameManager.colorManager.selected[1] >= QSIZE){
        game1part2instr()
        return
    }
    colorText.innerHTML = gameManager.colorManager.returnFarba(gameManager.colorManager.selected[0][gameManager.colorManager.selected[1]])
}
function greenClicked1() {
    if (gameManager.colorManager.selected[0][gameManager.colorManager.selected[1]] == 4){
        gameManager.score.game1.part1[gameManager.colorManager.selected[1]] = 1
    }else{
        gameManager.score.game1.part1[gameManager.colorManager.selected[1]] = 0
    }

    gameManager.colorManager.selected[1]++
    if (gameManager.colorManager.selected[1] >= QSIZE){
        game1part2instr()
        return
    }
    colorText.innerHTML = gameManager.colorManager.returnFarba(gameManager.colorManager.selected[0][gameManager.colorManager.selected[1]])
}
function yellowClicked1() {
    if (gameManager.colorManager.selected[0][gameManager.colorManager.selected[1]] ==3){
        gameManager.score.game1.part1[gameManager.colorManager.selected[1]] = 1
    }else{
        gameManager.score.game1.part1[gameManager.colorManager.selected[1]] = 0
    }

    gameManager.colorManager.selected[1]++
    if (gameManager.colorManager.selected[1] >= QSIZE){
        game1part2instr()
        return
    }
    colorText.innerHTML = gameManager.colorManager.returnFarba(gameManager.colorManager.selected[0][gameManager.colorManager.selected[1]])
}

//#########
function redClicked2() {
    if (gameManager.colorManager.selected[0][gameManager.colorManager.selected[1]] == 1){
        gameManager.score.game1.part2[gameManager.colorManager.selected[1]] = 1
    }else{
        gameManager.score.game1.part2[gameManager.colorManager.selected[1]] = 0
    }

    gameManager.colorManager.selected[1]++
    if (gameManager.colorManager.selected[1] >= QSIZE){
        game1part3instr()
        return
    }
    colorText.style.background = gameManager.colorManager.returnColor(gameManager.colorManager.selected[0][gameManager.colorManager.selected[1]])
}
function blueClicked2() {
    if (gameManager.colorManager.selected[0][gameManager.colorManager.selected[1]] == 2){
        gameManager.score.game1.part2[gameManager.colorManager.selected[1]] = 1
    }else{
        gameManager.score.game1.part2[gameManager.colorManager.selected[1]] = 0
    }

    gameManager.colorManager.selected[1]++
    if (gameManager.colorManager.selected[1] >= QSIZE){
        game1part3instr()
        return
    }
    colorText.style.background = gameManager.colorManager.returnColor(gameManager.colorManager.selected[0][gameManager.colorManager.selected[1]])
}
function greenClicked2() {
    if (gameManager.colorManager.selected[0][gameManager.colorManager.selected[1]] == 4){
        gameManager.score.game1.part2[gameManager.colorManager.selected[1]] = 1
    }else{
        gameManager.score.game1.part2[gameManager.colorManager.selected[1]] = 0
    }

    gameManager.colorManager.selected[1]++
    if (gameManager.colorManager.selected[1] >= QSIZE){
        game1part3instr()
        return
    }
    colorText.style.background = gameManager.colorManager.returnColor(gameManager.colorManager.selected[0][gameManager.colorManager.selected[1]])
}
function yellowClicked2() {
    if (gameManager.colorManager.selected[0][gameManager.colorManager.selected[1]] ==3){
        gameManager.score.game1.part2[gameManager.colorManager.selected[1]] = 1
    }else{
        gameManager.score.game1.part2[gameManager.colorManager.selected[1]] = 0
    }

    gameManager.colorManager.selected[1]++
    if (gameManager.colorManager.selected[1] >= QSIZE){
        game1part3instr()
        return
    }
    colorText.style.background = gameManager.colorManager.returnColor(gameManager.colorManager.selected[0][gameManager.colorManager.selected[1]])
}

//##########
function redClicked3() {
    if (gameManager.colorManager.selected[0][gameManager.colorManager.selected[1]] == 1){
        gameManager.score.game1.part3[gameManager.colorManager.selected[1]] = 1
    }else{
        gameManager.score.game1.part3[gameManager.colorManager.selected[1]] = 0
    }

    gameManager.colorManager.selected[1]++
    if (gameManager.colorManager.selected[1] >= QSIZE){
        finishGame1()
        return
    }
    colorText.style.color = gameManager.colorManager.returnColor(gameManager.colorManager.selected[0][gameManager.colorManager.selected[1]])
    colorText.innerHTML = gameManager.colorManager.returnFarba(retOther(gameManager.colorManager.selected[0][gameManager.colorManager.selected[1]]))
}
function blueClicked3() {
    if (gameManager.colorManager.selected[0][gameManager.colorManager.selected[1]] == 2){
        gameManager.score.game1.part3[gameManager.colorManager.selected[1]] = 1
    }else{
        gameManager.score.game1.part3[gameManager.colorManager.selected[1]] = 0
    }

    gameManager.colorManager.selected[1]++
    if (gameManager.colorManager.selected[1] >= QSIZE){
        finishGame1()
        return
    }
    colorText.style.color = gameManager.colorManager.returnColor(gameManager.colorManager.selected[0][gameManager.colorManager.selected[1]])
    colorText.innerHTML = gameManager.colorManager.returnFarba(retOther(gameManager.colorManager.selected[0][gameManager.colorManager.selected[1]]))
}
function greenClicked3() {
    if (gameManager.colorManager.selected[0][gameManager.colorManager.selected[1]] == 4){
        gameManager.score.game1.part3[gameManager.colorManager.selected[1]] = 1
    }else{
        gameManager.score.game1.part3[gameManager.colorManager.selected[1]] = 0
    }

    gameManager.colorManager.selected[1]++
    if (gameManager.colorManager.selected[1] >= QSIZE){
        finishGame1()
        return
    }
    colorText.style.color = gameManager.colorManager.returnColor(gameManager.colorManager.selected[0][gameManager.colorManager.selected[1]])
    colorText.innerHTML = gameManager.colorManager.returnFarba(retOther(gameManager.colorManager.selected[0][gameManager.colorManager.selected[1]]))
}
function yellowClicked3() {
    if (gameManager.colorManager.selected[0][gameManager.colorManager.selected[1]] ==3){
        gameManager.score.game1.part3[gameManager.colorManager.selected[1]] = 1
    }else{
        gameManager.score.game1.part3[gameManager.colorManager.selected[1]] = 0
    }

    gameManager.colorManager.selected[1]++
    if (gameManager.colorManager.selected[1] >= QSIZE){
        finishGame1()
        return
    }
    colorText.style.color = gameManager.colorManager.returnColor(gameManager.colorManager.selected[0][gameManager.colorManager.selected[1]])
    colorText.innerHTML = gameManager.colorManager.returnFarba(retOther(gameManager.colorManager.selected[0][gameManager.colorManager.selected[1]]))
}
//###########

function setButtonOnClickGame1p1() {
    redBut = document.getElementById("redBut").onclick = redClicked1
    greenBut = document.getElementById("greenBut").onclick = greenClicked1
    blueBut = document.getElementById("blueBut").onclick = blueClicked1
    yellowBut = document.getElementById("yellowBut").onclick = yellowClicked1
}

function setButtonOnClickGame1p2() {
    redBut = document.getElementById("redBut").onclick = redClicked2
    greenBut = document.getElementById("greenBut").onclick = greenClicked2
    blueBut = document.getElementById("blueBut").onclick = blueClicked2
    yellowBut = document.getElementById("yellowBut").onclick = yellowClicked2
}

function setButtonOnClickGame1p3() {
    redBut = document.getElementById("redBut").onclick = redClicked3
    greenBut = document.getElementById("greenBut").onclick = greenClicked3
    blueBut = document.getElementById("blueBut").onclick = blueClicked3
    yellowBut = document.getElementById("yellowBut").onclick = yellowClicked3
}


gameManager = new GameManager()

function finishGame1() {
    gameManager.score.time3 = Date.now() - gameManager.score.time3

 
    alert("Koniec úlohy!\nVýsledky budú stiahnuté")
    var text = "" + gameManager.score.name + " " + gameManager.score.age
    console.log(text)
    text += "\nHra Stroop:\n"
    text +="Cast2: " + calcSuccess(gameManager.score.game1.part2, QSIZE) + "/"+QSIZE+" (" + Math.floor(calcSuccess(gameManager.score.game1.part2, QSIZE)/QSIZE*100) + "%); priemerny cas: " + Math.floor(gameManager.score.time2/QSIZE) + "ms \n" 
    text +="Cast3: " + calcSuccess(gameManager.score.game1.part3, QSIZE) + "/"+QSIZE+" (" + Math.floor(calcSuccess(gameManager.score.game1.part3, QSIZE)/QSIZE*100) + "%); priemerny cas: " + Math.floor(gameManager.score.time3/QSIZE) + "ms \n" 
    text +="Cast1: " + calcSuccess(gameManager.score.game1.part1, QSIZE) + "/"+QSIZE+" (" + Math.floor(calcSuccess(gameManager.score.game1.part1, QSIZE)/QSIZE*100) + "%); priemerny cas: " + Math.floor(gameManager.score.time1/QSIZE) + "ms \n" 
    
    download(gameManager.score.name+"_Stroop", text)
    goHome()
}

function calcSuccess(array, size) {
    sum = 0
    for(i = 0; i < size; i++){
        if(array[i] == 1)
            sum++
    }
    return sum
}


//############# main page

function goHome() {
    game1Div.style.display = "none"
    document.getElementById("game2").style.display = "none"
    document.getElementById("game3").style.display = "none"
    document.getElementById("game4").style.display = "none"
    homepageDiv.style.display = "block"
}

function submitUserId() {
    buttonContainer.style.display = "flex"
    submitBtn.style.display = "none"
    document.getElementById("inputDiv").style.display = "none";
    var name = document.getElementById("nameInput").value;
    var age = document.getElementById("ageInput").value;
    gameManager.score = new Score(name, age)
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