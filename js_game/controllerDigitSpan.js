class DigitSpan{
    constructor(){
        this.stage = 2
    }
}

function game2instr(){
    homepageDiv.style.display = "none"
    document.getElementById("buttonInstrGame2").style.display = "block"
    soundEffect.src = './sounds/game2/nahrávka 2-1.m4a'
    soundEffect.play()
    console.log(instrAdio)
}

function startGame2(){
    // var instrAdio = new Audio('./sounds/game2/nahrávka 2-1.m4a')
    // instrAdio.pause()
    document.getElementById("game2").style.display = "block"
    document.getElementById("endGame").style.display = "block"
    document.getElementById("buttonInstrGame2").style.display = "none"
    soundEffect.src = './sounds/game2/nahrávka 2-2.m4a'
    soundEffect.play()
    digitSpan = new DigitSpan()

}

var butContinue = document.getElementById("butContinue")
butContinue.onclick = ()=>{
    digitSpan.stage++;
    path = './sounds/game2/nahrávka 2-'+digitSpan.stage+'.m4a'
    soundEffect.src=path
    soundEffect.play()
    if(digitSpan.stage >= 17){
        
        butContinue.innerHTML = "Koniec"
        butContinue.onclick = ()=>{
            soundEffect.pause()
            goHome()
        }
    }
}


digitSpan = null