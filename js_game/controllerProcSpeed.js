


// const soundEffect = new Audio();
// soundEffect.autoplay = true;
// soundEffect.src = "data:audio/mpeg;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAA1N3aXRjaCBQbHVzIMKpIE5DSCBTb2Z0d2FyZQBUSVQyAAAABgAAAzIyMzUAVFNTRQAAAA8AAANMYXZmNTcuODMuMTAwAAAAAAAAAAAAAAD/80DEAAAAA0gAAAAATEFNRTMuMTAwVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQsRbAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQMSkAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV";


th_keys = document.getElementsByClassName("th_key")
td_keys = document.getElementsByClassName("td_key")
th_sifra = document.getElementsByClassName("th_sifra")
td_sifra = document.getElementsByClassName("td_sifra")

class Data{
    constructor(){
        this.symbols = ["∠", "+","〜","=","∀","⊃","⊂","∃","∧","∨","⌶","⌲","(",")","⎯","✕","⌘","⌗","▽","○","△","☆","◇", "♡","⌽", "⌓","⏊","⏉", "[", "]"]
        this.sifraN = 0
        this.code = null
    }
    
    returnRandSymbols(num){
        var seq = shuffle(this.symbols)
        this.code = seq
        return seq.slice(0,num)
    }
}

class Buttons{
    constructor(){
        this.buttons = document.getElementsByClassName("keyButton")
        this.setButton1()
        this.setButton2()
        this.setButton3()
        this.setButton4()
        this.setButton5()
        this.setButton6()
        this.setButton7()
        this.setButton8()
        this.setButton9()
    }

    setButton1() {
        this.buttons[0].onclick = ()=>{
            fillSifra(1)
            data.sifraN++
        }
    }
    setButton2() {
        this.buttons[1].onclick = ()=>{
            fillSifra(2)
            data.sifraN++
        }
    }
    setButton3() {
        this.buttons[2].onclick = ()=>{
            fillSifra(3)
            data.sifraN++
        }
    }
    setButton4() {
        this.buttons[3].onclick = ()=>{
            fillSifra(4)
            data.sifraN++
        }
    }
    setButton5() {
        this.buttons[4].onclick = ()=>{
            fillSifra(5)
            data.sifraN++
        }
    }
    setButton6() {
        this.buttons[5].onclick = ()=>{
            fillSifra(6)
            data.sifraN++
        }
    }
    setButton7() {
        this.buttons[6].onclick = ()=>{
            fillSifra(7)
            data.sifraN++
        }
    }
    setButton8() {
        this.buttons[7].onclick = ()=>{
            fillSifra(8)
            data.sifraN++
        }
    }
    setButton9() {
        this.buttons[8].onclick = ()=>{
            fillSifra(9)
            data.sifraN++
            console.log(9)
        }
    }
}

function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}

function game3part1instr() {
    homepageDiv.style.display = "none"
    game1p1.style.display ="none"
    document.getElementById("buttonInstrGame3").style.display = "block"
    document.getElementById("buttonInstrGame3").style.background = null
    document.getElementById("buttonInstrGame3").innerHTML = "Zahráme si hru, ktorá sa niekedy nazýva aj Kódovanie. Ak chceš vedieť, čo bude tvojou úlohou, klikni kdekoľvek na obrazovku."
    document.getElementById("buttonInstrGame3").onclick = game3part2instr
    var instrAdio = new Audio('./sounds/game3/3-1.m4a')
    instrAdio.play()
    console.log("start game 3...")
}

function game3part2instr() {
    var instrBut  = document.getElementById("buttonInstrGame3")
    instrBut.innerHTML = ""
    instrBut.style.backgroundImage = "url(./imgs/game3/game3Instr_1.png)"
    instrBut.onclick = null   
    var instrAdio = new Audio('./sounds/game3/3-2 (1) - rýchlejšie - odporúčam.m4a')
    instrAdio.play()
    
    setTimeout( function() {instrBut.style.backgroundImage = "url(./imgs/game3/game3Instr_2.png)" 
        setTimeout( function() {instrBut.style.backgroundImage = "url(./imgs/game3/game3Instr_3.png)" 
            setTimeout( function() {instrBut.style.backgroundImage = "url(./imgs/game3/game3Instr_4.png)" 
                setTimeout( function() {instrBut.style.backgroundImage = "url(./imgs/game3/game3Instr_1.png)" 
                    setTimeout( function() {instrBut.style.backgroundImage = "url(./imgs/game3/game3Instr_5.png)" 
                        setTimeout( function() {instrBut.style.backgroundImage = "url(./imgs/game3/game3Instr_6.png)" 
                            setTimeout( function() {instrBut.style.backgroundImage = "url(./imgs/game3/game3Instr_7.png)" 
                                setTimeout( function() {game3part3instr()  
                
                                } , 7500);
                            } , 3000);
                        } , 4000);
                    } , 15000);
                } , 4000);
            } , 2500);
        } , 5000);
    } , 10000);
    
   
    
}

var imgCounter = 8
function game3part3instr() {
    if( imgCounter >= 25){
        game3part4instr()
        return
    }
    var instrBut  = document.getElementById("buttonInstrGame3")
    console.log(imgCounter)
    setTimeout( function(){
        instrBut.style.backgroundImage = "url(./imgs/game3/game3Instr_"+ imgCounter+".png)" 
        imgCounter+=1     
        game3part3instr()  
    } , 1000);
}

function game3part4instr() {
    var instrAdio = new Audio('./sounds/game3/3-3.m4a')
    instrAdio.play()
    var instrBut  = document.getElementById("buttonInstrGame3")
    setTimeout( function(){
        instrBut.onclick = startGame3  
    } , 34000);    
     
}

// function interactivInstr_game3() {
//     document.getElementById("buttonInstrGame3").onclick = "none"
//     document.getElementById("buttonInstrGame3").innerHTML = ""
//     document.getElementById("buttonInstrGame3").style.backgroundImage = "url(./imgs/game3Instr_1.png)"
//     document.getElementById("buttonInstrGame3").style.backgroundImage = "url(./imgs/game3Instr_2.png)"
//     alert("Teraz ti to názorne ukážem. Hore na obrazovke vidíme kľúč – v ňom sa nachádzajú symboly, pričom každý má priradené svoje číslo. Napríklad tento symbol /prvý v rade/..")
//     document.getElementById("buttonInstrGame3").style.backgroundImage = "url(./imgs/game3Instr_3.png)"
//     alert("„„..má pridelené číslo 1.")
//     document.getElementById("buttonInstrGame3").style.backgroundImage = "url(./imgs/game3Instr_4.png)"
//     alert("Teraz sa pozri na stredný rad")

// }

function startGame3() {
    endButton.onclick = finishGame3

    document.getElementById("endGame").style.display = "block"
    document.getElementById("game3").style.display = "block"
    document.getElementById("buttonInstrGame3").style.display = "none"
    seq = data.returnRandSymbols(9)
    for(var i in th_keys){
        th_keys[i].innerHTML = seq[i]
        td_keys[i].innerHTML =++i
    }
    generateSifra(15, seq)
    data.sifraN = 0
    keyButtons = new Buttons()
    gameManager.score.game3.time = Date.now()
    gameManager.score.game3.part1 =  []
}

function generateSifra(num, seq) {
    var lastr = -1
    for(var i = 0; i < num; i++){
        r = Math.floor(Math.random()*9)
        while (r == lastr ){
            r = Math.floor(Math.random()*9)
        }        
        th_sifra[i].innerHTML = seq[r]
        td_sifra[i].innerHTML = ''
        lastr = r        
    }
}

function fillSifra(num) {
    
    td_sifra[data.sifraN].innerHTML = num
    checkGame3(num)
    if( data.sifraN >= 14){
        generateSifra(15, data.code)
        data.sifraN = -1
    }
}
function checkGame3(num) {
   
    if( Date.now() - gameManager.score.game3.time  > 1000 * 120){
        console.log(gameManager.score.game3.part1)
        console.log("Game Over")
        finishGame3()
    }

    if(th_sifra[data.sifraN].innerHTML ==  data.code[num-1]){
        gameManager.score.game3.part1.push(1)
    }else{
        gameManager.score.game3.part1.push(0)
        
    }
    
}

function finishGame3() {
    alert("Čas vypršal!\nVýsledky budú stiahnuté")
    var text = "" + gameManager.score.name + " " + gameManager.score.age
    console.log(text)

    succ = calcSuccess(gameManager.score.game3.part1, gameManager.score.game3.part1.length)
    text += "\nHra Processing Speed:\n"
    text +="Uspesnost " + succ + "/"+gameManager.score.game3.part1.length+" (" + Math.floor(succ/gameManager.score.game3.part1.length*100) + "%); \n" 
    
    download(gameManager.score.name+"_ProcessingSpeed", text)
    goHome()
}

data = new Data()

