class SceneWindow extends Scene{

    constructor(canvas,timer, img, correct ){
        super(canvas);
        this.img = img;
        this.timer = timer;
        this.btn1;
        this.btn2;
        this.btn3;
        this.btn4;
        this.answer = {time: 0, correct: correct, chosen: 0 };
        
    }

    init(btn1_text, btn2_text, btn3_text, btn4_text){
        this.canvas.clear();
        this.drawPicture();
        this.setButtons(btn1_text, btn2_text, btn3_text, btn4_text);
        this.timer.startTimer();
    }
   
    setAnswer(answerN){
        this.answer.time = this.timer.stopTimer();
        this.answer.chosen = answerN;
        console.log(this.answer.correct);
    }

    drawPicture(){
        var height = this.canvas.canvas.height;
        var width = this.canvas.canvas.width ;
        this.canvas.ctx.drawImage(this.img, width / 2 - (height / 4) , height  / 2 - (height / 4), height / 2, height  /2);

    }

    setButtons(btn1_text, btn2_text, btn3_text, btn4_text){
        var height = this.canvas.ctx.canvas.height;
        var width = this.canvas.ctx.canvas.width;
        var size = {x :width / 8, y : height  / 12}
        var space = {x : width  / 20, y : height / 10}

        console.log("dsaa");

        this.btn1 = new Button(this.canvas.canvas, width / 2 - space.x - size.x ,height - height / 4, size.x,size.y);
        this.btn1.addClickAction(()=>{
            console.log( this.timer.stopTimer());
            this.btn1.active = false;
            this.btn2.active = false;
            this.btn3.active = false;
            this.btn4.active = false;
            this.setAnswer(1);
            nextScene();
        })
        this.btn1.setText(btn1_text);

        this.btn2 = new Button(this.canvas.canvas, width / 2 + space.x  , height - height / 4, size.x,size.y);
        this.btn2.addClickAction(()=>{
            console.log( this.timer.stopTimer());
            this.btn1.active = false;
            this.btn2.active = false;
            this.btn3.active = false;
            this.btn4.active = false;
            this.setAnswer(2);
            nextScene();
        })
        this.btn2.setText(btn2_text);

        this.btn3 = new Button(this.canvas.canvas, width / 2 - space.x - size.x, height - height / 4 + space.y, size.x,size.y);
        this.btn3.addClickAction(()=>{
            console.log( this.timer.stopTimer());
            this.btn1.active = false;
            this.btn2.active = false;
            this.btn3.active = false;
            this.btn4.active = false;
            this.setAnswer(3);
            nextScene();
        })
        this.btn3.setText(btn3_text);

        this.btn4 = new Button(this.canvas.canvas, width / 2 + space.x , height - height / 4 + space.y, size.x,size.y);
        this.btn4.addClickAction(()=>{
            console.log( this.timer.stopTimer());
            this.btn1.active = false;
            this.btn2.active = false;
            this.btn3.active = false;
            this.btn4.active = false;
            this.setAnswer(4);
            nextScene();
        })
        this.btn4.setText(btn4_text);
    }
}

