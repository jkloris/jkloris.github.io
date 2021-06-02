class Timer{
    
    constructor(){
        this.now;
        this.dt;
    }

    startTimer() {
        this.now = Date.now();
       
    }

    stopTimer(){
        this.dt  = (Date.now() - this.now) / 1000;
        return  this.dt;
    }

}

var timer = new Timer();