class Canvas{
    constructor(canvasID){
        this.canvas = document.getElementById(canvasID);
        this.ctx = this.canvas.getContext("2d");
        this.ctx.canvas.height = window.innerHeight *0.9;
        this.ctx.canvas.width = window.innerWidth*1;

        
    }


    clear(){
        this.ctx.save();
        this.ctx.fillStyle="white";
        this.ctx.fillRect(0,0, canvas.width, canvas.height);
        this.ctx.restore();
    }

    drawButtons(){

    }

    
}

