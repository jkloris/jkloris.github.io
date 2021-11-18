class DigitSpan{
    constructor(){
        this.stage = 2
    }
}


function game2instr(){
    homepageDiv.style.display = "none"
    document.getElementById("buttonInstrGame2").style.display = "block"
    var instrAdio = new Audio('/sounds/game2/nahrávka 2-1.mp3')
    instrAdio.play()
    console.log(instrAdio)
}

function startGame2(){
    var instrAdio = new Audio('/sounds/game2/nahrávka 2-1.mp3')
    instrAdio.pause()
    document.getElementById("game2").style.display = "block"
    document.getElementById("endGame").style.display = "block"
    document.getElementById("buttonInstrGame2").style.display = "none"
    instrAdio = new Audio('/sounds/game2/nahrávka 2-2.mp3')
    instrAdio.play()
    digitSpan = new DigitSpan()

}

var butContinue = document.getElementById("butContinue")
butContinue.onclick = ()=>{
    digitSpan.stage++;
    path = '/sounds/game2/nahrávka 2-'+digitSpan.stage+'.mp3'
    var instrAdio = new Audio(path)
    instrAdio.play()
    if(digitSpan.stage >= 17){
        butContinue.innerHTML = "Koniec"
        butContinue.onclick = ()=>{
            goHome()
        }
    }
}


digitSpan = null