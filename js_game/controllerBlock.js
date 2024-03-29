class BlockData{
    constructor(){
        this.parts = {
            p1 : [1,2,3,4,5,6],
            p2 : [7,8,9,10,11,12],
            p3 : [13,14,15,16,17,18],
            all : [ ]
        }
        this.stage = 0
        this.correct = [2,1,3,4,3,4,2,3,4,4,2,1,4,3,1,4,3,1]
        shuffle(this.parts.p1)
        shuffle(this.parts.p2)
        shuffle(this.parts.p3)
        this.parts.all = this.parts.p1.concat(this.parts.p2, this.parts.p3)

        
    }

    setImgs(stimulN){
        console.log(stimulN)
        var vzor = document.getElementById("game4_vzorA")
        var pathVzor = "url(../imgs/game4/stimul_"+stimulN+"/obrázok_hore/"+stimulN+".png)"
        vzor.style.backgroundImage = pathVzor

        var moznosti = document.getElementById("game4_choices").children
        for(var i = 0; i < 4; i++){
            if(this.correct[stimulN-1] == i+1){
                var path = "url(../imgs/game4/stimul_"+stimulN+"/možnosti/"+stimulN+"-"+(i+1)+"-S.png)"
            }else{
                var path = "url(../imgs/game4/stimul_"+stimulN+"/možnosti/"+stimulN+"-"+(i+1)+".png)"
            }
            moznosti[i].style.backgroundImage = path
                
            
        }

    }

    setImgsInstr(){
       
        var vzor = document.getElementById("game4_vzorA")
        var pathVzor = "url(../imgs/game4/VZOR/OBRÁZOK_HORE.png)"
        vzor.style.backgroundImage = pathVzor

        var moznosti = document.getElementById("game4_choices").children
        for(var i = 0; i < 4; i++){
            
            var path = "url(../imgs/game4/VZOR/0-"+(i+1)+".png)"
            moznosti[i].style.backgroundImage = path
                
        }

    }

    next(){
        // document.getElementById("game4").style.display = "none"
        this.stage++
        if (this.stage >= 18){
            finishGame4()
            return
        }
        document.getElementById("prekryv").style.display = "block"
        this.setImgs(this.parts.all[this.stage])
        setTimeout( function() {
            // document.getElementById("game4").style.display = "block"
            document.getElementById("prekryv").style.display = "none"
        } , 500);
    }


    checkAnswer(answer){
        if(this.correct[this.parts.all[this.stage]-1] == answer )
            gameManager.score.game4.part1.push(1)
        else
        gameManager.score.game4.part1.push(0)
    }
    
   

    setButtons(){
        var buttons = document.getElementsByClassName("game4_button")
        
        buttons[0].onclick = ()=>{
            this.checkAnswer(1)
            this.next()
            
        }  
        buttons[1].onclick = ()=>{
            this.checkAnswer(2)
            this.next()
        }  
        buttons[2].onclick = ()=>{
            this.checkAnswer(3)
            this.next()
        }  
        buttons[3].onclick = ()=>{
            this.checkAnswer(4)
            this.next()
        }  
    }
    nullButtons(){
        var buttons = document.getElementsByClassName("game4_button")   
        buttons[0].onclick = null
        buttons[1].onclick = null
        buttons[2].onclick = null
        buttons[3].onclick =null
    }



}

function game4instr() {
    homepageDiv.style.display = "none"
    document.getElementById("endGame").style.display = "none"
    game1p1.style.display ="none"
    document.getElementById("buttonInstrGame4").style.display = "block"
    soundEffect.src = './sounds/game4/4-1.m4a'
    soundEffect.play()
}

function game4instr2(){
    soundEffect.src = './sounds/game4/4-2.m4a'
    soundEffect.play()
    var instrBut = document.getElementById("buttonInstrGame4")
    instrBut.style.display = "none"
    blockData = new BlockData()
    document.getElementById("game4").style.display = "block"

    blockData.setImgsInstr()
    blockData.nullButtons()
    instrBut.innerHTML = ""
    instrBut.onclick = null
    setTimeout( function() {
        circle = document.getElementById("circle")
        circle.style.display="block"
        setTimeout( function() {
            circle.style.display="none"
            instrBut.style.display = "block"
            instrBut.style.backgroundColor="#a68c7800"
            instrBut.style.position="fixed";
            instrBut.style.zIndex="5"
            instrBut.onclick = startGame4
            
        } , 20000);
    } , 9500);

    
}



function sleep(milliseconds) {

    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function startGame4() {
    endButton.onclick = finishGame4
    document.getElementById("game4").style.display = "block"
    document.getElementById("endGame").style.display = "block"
    document.getElementById("buttonInstrGame4").onclick = game4instr2
    document.getElementById("buttonInstrGame4").innerHTML = "Táto hra sa niekedy nazýva Kocky. Hore na obrazovke uvidíš obrázok, ktorý bude vytvorený použitím niekoľkých kociek. Tvojou úlohou bude vybrať také kocky, ktoré keby sme naspäť zložili, vytvárali by rovnaký obrázok ako ten hore. Najprv ti to však názorne ukážem. Prosím, klikni kdekoľvek na obrazovku."
    document.getElementById("buttonInstrGame4").style.backgroundColor = "white"
    document.getElementById("buttonInstrGame4").style.background = null
    document.getElementById("buttonInstrGame4").style.display = "none"

    gameManager.score.game4.part1 = []
    gameManager.score.game4.time = Date.now()
    blockData.setButtons()
    blockData.setImgs(blockData.parts.p1[0])
}


function finishGame4() {
    time = (Date.now() - gameManager.score.game4.time -gameManager.score.game4.part1.length*500 + 500)
    alert("Koniec hryl!\nVýsledky budú stiahnuté")
    var text = "" + gameManager.score.name + " " + gameManager.score.age

    succ = calcSuccess(gameManager.score.game4.part1, gameManager.score.game4.part1.length)
    text += "\nBlock Design:\n"
    text +="Uspesnost " + succ + "/"+gameManager.score.game4.part1.length+" (" + Math.floor(succ/gameManager.score.game4.part1.length*100) + "%); \n" 
    text +="Priemerny cas: " + time/gameManager.score.game4.part1.length + "ms"
    download(gameManager.score.name+"_Block Design", text)
    goHome()
}


blockData = null