

class SceneFin extends Scene{
    constructor(canvas,scenes ){
        super(canvas);
        this.scenes = scenes;
        
    }
    


    writeResult(){
        var answer= "";
        var truth= "";

        for(var s in this.scenes){
            if(this.scenes[s].answer == null) continue;

            if( this.scenes[s].answer.chosen  == this.scenes[s].answer.correct) truth = "correct";
            else truth = "incorrect";

            answer += "time:" + this.scenes[s].answer.time + ", answer: " + this.scenes[s].answer.chosen + ", "+ truth + '\n';
            
        }
        alert(answer);

        this.buttonBck = new Button(this.canvas.canvas,this.canvas.canvas.width / 2-100, this.canvas.canvas.height / 2 + 100, 200, 100);
        this.buttonBck.setText("Menu");
        this.buttonBck.addClickAction(()=>{
            this.buttonBck.active = false;
            this.button.active = false;
            setScene(0);
        });
        this.button.draw();
    }

    init(){
        this.canvas.clear();
        this.button = new Button(this.canvas.canvas,this.canvas.canvas.width / 2-100, this.canvas.canvas.height / 2, 200, 100);
        this.button.setText("Výsledky");
        this.button.addClickAction(()=>{
            this.writeResult();
        });
        this.button.draw();
        
    
    }


}
