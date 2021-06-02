class SceneStart extends Scene{
    constructor(canvas){
        super(canvas);
        
    }

    init(){
        this.canvas.clear();
        this.buttonsInit();
        this.startButton.draw();
        this.testButton.draw();
    }

    buttonsInit(){
        this.startButton = new Button(this.canvas.canvas,this.canvas.canvas.width / 2-100, this.canvas.canvas.height / 2, 200, 100);
        this.startButton.setText("Start");
        this.startButton.addClickAction(()=>{
            this.testButton.active = false;
            this.startButton.active = false;
            nextScene();
        });

        this.testButton = new Button(this.canvas.canvas,this.canvas.canvas.width / 2-100, this.canvas.canvas.height / 2 + 120, 200, 100);
        this.testButton.setText("Tutorial");
        this.testButton.addClickAction(()=>{
            this.testButton.active = false;
            this.startButton.active = false;
            nextScene();
        });
    }
}