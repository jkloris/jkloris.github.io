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

        this.setButtons()
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

    next(){
        document.getElementById("game4").style.display = "none"
        this.stage++
        if (this.stage >= 18){
            finishGame4()
            return
        }
        this.setImgs(this.parts.all[this.stage])
        setTimeout( function() {document.getElementById("game4").style.display = "block" } , 500);
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



}

function game4instr() {
    homepageDiv.style.display = "none"
    game1p1.style.display ="none"
    document.getElementById("buttonInstrGame4").style.display = "block"
}

function sleep(milliseconds) {

    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function startGame4() {
    document.getElementById("game4").style.display = "block"
    document.getElementById("endGame").style.display = "block"
    document.getElementById("buttonInstrGame4").style.display = "none"
    blockData = new BlockData()
    gameManager.score.game4.part1 = []
    gameManager.score.game4.time = Date.now()
    blockData.setImgs(blockData.parts.p1[0])
}

function finishGame4() {
    time = (Date.now() - gameManager.score.game4.time -17*500)
    alert("Koniec hryl!\nVýsledky budú stiahnuté")
    var text = "" + gameManager.score.name + " " + gameManager.score.age

    succ = calcSuccess(gameManager.score.game4.part1, gameManager.score.game4.part1.length)
    text += "\nBlock Design:\n"
    text +="Uspesnost " + succ + "/"+gameManager.score.game4.part1.length+" (" + Math.floor(succ/gameManager.score.game4.part1.length*100) + "%); \n" 
    text +="Priemerny cas: " + time/18 + "ms"
    download(gameManager.score.name+"_Block Design", text)
    goHome()
}

blockData = null