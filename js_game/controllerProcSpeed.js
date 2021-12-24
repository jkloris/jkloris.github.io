th_keys = document.getElementsByClassName("th_gkey")
td_keys = document.getElementsByClassName("td_gkey")
th_sifra = document.getElementsByClassName("th_gsifra")
td_sifra = document.getElementsByClassName("td_gsifra")

th_keys_instr = document.getElementsByClassName("th_ikey")
td_keys_instr = document.getElementsByClassName("td_ikey")
th_sifra_instr = document.getElementsByClassName("th_isifra")
td_sifra_instr = document.getElementsByClassName("td_isifra")
buttons_instr =  document.getElementsByClassName("ikeyButton")

var imgCounter = 8

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
        this.buttons = document.getElementsByClassName("gkeyButton")
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
    document.getElementById("endGame").style.display = "none"
    document.getElementById("buttonInstrGame3").style.display = "block"
    document.getElementById("buttonInstrGame3").style.background = null
    document.getElementById("buttonInstrGame3").innerHTML = "Zahráme si hru, ktorá sa niekedy nazýva aj Kódovanie. Ak chceš vedieť, čo bude tvojou úlohou, klikni kdekoľvek na obrazovku."
    document.getElementById("buttonInstrGame3").onclick = game3part2instr
    soundEffect.src = './sounds/game3/3-1.m4a'
    soundEffect.play()
    console.log("start game 3...")
}

function game3part2instr() {
    var instrBut  = document.getElementById("buttonInstrGame3")
    instrBut.style.backgroundColor="#a68c7800"
    instrBut.style.position="fixed";
    instrBut.style.zIndex="5"
    instrBut.innerHTML = ""
    instrBut.style.display = "none"
    instrBut.onclick = null 

    var game3_instr = document.getElementById("game3_instr")
    game3_instr.style.display = "block"

    soundEffect.src = './sounds/game3/3-2 (1) - rýchlejšie - odporúčam.m4a'
    soundEffect.play()
    
    for(var t in td_sifra_instr){
        td_sifra_instr[t].innerHTML = ""
        
    }

    setTimeout( function() {
        th_keys_instr[0].style.backgroundColor = "yellow"
        setTimeout( function() {
            th_keys_instr[0].style.backgroundColor = "white"
            td_keys_instr[0].style.backgroundColor = "yellow"
            setTimeout( function() {
                td_keys_instr[0].style.backgroundColor = "white"
                document.getElementById("tg_sifra_instr").style.backgroundColor="yellow"
                setTimeout( function() {
                    document.getElementById("tg_sifra_instr").style.backgroundColor="white"
                    setTimeout( function() {
                        th_keys_instr[3].style.backgroundColor = "yellow"
                        th_sifra_instr[0].style.backgroundColor = "yellow"
                        td_keys_instr[3].style.backgroundColor = "yellow"
                        setTimeout( function() {
                         
                            setTimeout( function() {
                                th_keys_instr[3].style.backgroundColor = "white"
                                th_sifra_instr[0].style.backgroundColor = "white"
                                buttons_instr[3].style.backgroundColor = "yellow"
                                td_keys_instr[3].style.backgroundColor = "white"
                                setTimeout( function() {
                                    buttons_instr[3].style.backgroundColor = "rgb(2, 157, 247)"
                                    td_sifra_instr[0].style.backgroundColor = "yellow"
                                    td_sifra_instr[0].innerHTML = 4
                                    setTimeout( function() {game3part3instr()  
                                        imgCounter = 8
                                        } , 7500);
                                } , 2000);
                            }, 2000);
                        } , 2000);
                    } , 14000);
                } , 4000);
            } , 2500);
        } , 5000);
    } , 10000);
    

    
}


function game3part3instr() {
    console.log(imgCounter)
    if( imgCounter >= 25){
        game3part4instr()
        imgCounter = 8
        return
    }

    var butColor = "rgb(2, 157, 247)"

    
    setTimeout( function(){

        switch (imgCounter) {
            case 8:
                th_sifra_instr[1].style.backgroundColor = "yellow"
                td_sifra_instr[0].style.backgroundColor = "white"
                break;
            case 9:
                th_keys_instr[2].style.backgroundColor = "yellow"
                td_keys_instr[2].style.backgroundColor = "yellow"
                break;
            case 10:
                th_sifra_instr[1].style.backgroundColor = "white"
                th_keys_instr[2].style.backgroundColor = "white"
                td_keys_instr[2].style.backgroundColor = "white"
                buttons_instr[2].style.backgroundColor = "yellow"
                break;
            case 11:
                buttons_instr[2].style.backgroundColor = butColor
                td_sifra_instr[1].style.backgroundColor = "yellow"
                td_sifra_instr[1].innerHTML = 3
                break;
            case 12:
                td_sifra_instr[1].style.backgroundColor = "white"
                th_sifra_instr[2].style.backgroundColor = "yellow"
                break;
            case 13:
                th_keys_instr[4].style.backgroundColor = "yellow"
                td_keys_instr[4].style.backgroundColor = "yellow"
                break;
            case 14:
                th_keys_instr[4].style.backgroundColor = "white"
                td_keys_instr[4].style.backgroundColor = "white"
                th_sifra_instr[2].style.backgroundColor = "white"
                buttons_instr[4].style.backgroundColor = "yellow"
                break;
            case 15:
                buttons_instr[4].style.backgroundColor = butColor
                td_sifra_instr[2].style.backgroundColor = "yellow"
                td_sifra_instr[2].innerHTML = 5
                break;
            case 16:
                td_sifra_instr[2].style.backgroundColor = "white"
                th_sifra_instr[3].style.backgroundColor = "yellow"
                break;
            case 17:
                th_keys_instr[1].style.backgroundColor = "yellow"
                td_keys_instr[1].style.backgroundColor = "yellow"
                break;
            case 18:
                th_keys_instr[1].style.backgroundColor = "white"
                td_keys_instr[1].style.backgroundColor = "white"
                th_sifra_instr[3].style.backgroundColor = "white"
                buttons_instr[1].style.backgroundColor = "yellow"
                break;
            case 19:
                buttons_instr[1].style.backgroundColor = butColor
                td_sifra_instr[3].style.backgroundColor = "yellow"
                td_sifra_instr[3].innerHTML = 2
                break;
            case 20:
                td_sifra_instr[3].style.backgroundColor = "white"
                th_sifra_instr[4].style.backgroundColor = "yellow"
                break;
            case 21:
                th_keys_instr[0].style.backgroundColor = "yellow"
                td_keys_instr[0].style.backgroundColor = "yellow"
                break;
            case 22:
                th_keys_instr[0].style.backgroundColor = "white"
                td_keys_instr[0].style.backgroundColor = "white"
                th_sifra_instr[4].style.backgroundColor = "white"
                buttons_instr[0].style.backgroundColor = "yellow"
                break;
            case 23:
                buttons_instr[0].style.backgroundColor = butColor
                td_sifra_instr[4].style.backgroundColor = "yellow"
                td_sifra_instr[4].innerHTML = 1
                break;
            case 24:
                td_sifra_instr[4].style.backgroundColor = "white"
                break;
            default:
                break;
        }
    

        imgCounter+=1     
        game3part3instr()  
    } , 1000);
}

function game3part4instr() {
    soundEffect.src =  './sounds/game3/3-3.m4a'
    soundEffect.play()
    var instrBut  = document.getElementById("buttonInstrGame3")
    setTimeout( function(){
        instrBut.onclick = startGame3  
        instrBut.style.display = "block"
        instrBut.style.backgroundColor="#a68c7800"
        instrBut.style.position="fixed";
        instrBut.style.zIndex="5"
    } , 34000);    
     
}



function startGame3() {
    endButton.onclick = finishGame3


    document.getElementById("endGame").style.display = "block"
    document.getElementById("game3").style.display = "block"
    document.getElementById("buttonInstrGame3").style.display = "none"
    document.getElementById("game3_instr").style.display = "none"
    
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

