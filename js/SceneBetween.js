class SceneBetween extends Scene{
    constructor(canvas){
        super(canvas);
        
    }

    init(){
        timer.startTimer();
        this.drawCross();
        this.loop();
    }

    loop(){
        if(timer.stopTimer() > 3){
            nextScene();
            return;
        }
        requestAnimationFrame(()=>this.loop());
    }

    drawCross(){
        this.canvas.clear();
        var a = 50;
        this.canvas.ctx.beginPath();
        this.canvas.ctx.moveTo(this.canvas.canvas.width / 2 - a, this.canvas.canvas.height / 2);
        this.canvas.ctx.lineTo(this.canvas.canvas.width / 2 + a, this.canvas.canvas.height / 2);
        this.canvas.ctx.moveTo(this.canvas.canvas.width / 2 , this.canvas.canvas.height / 2 - a);
        this.canvas.ctx.lineTo(this.canvas.canvas.width / 2 , this.canvas.canvas.height / 2 + a);
        this.canvas.ctx.stroke();
    }

}