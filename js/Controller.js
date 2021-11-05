let sceneSwitch = 0;

// function nextScene(){
//     sceneSwitch++;
//     controller.scene[sceneSwitch].init(controller.btnTexts[sceneSwitch][0],controller.btnTexts[sceneSwitch][1],controller.btnTexts[sceneSwitch][2],controller.btnTexts[sceneSwitch][3]);
// }

// function setScene(scene){
//     sceneSwitch = scene;
//     controller.scene[sceneSwitch].init(controller.btnTexts[sceneSwitch][0],controller.btnTexts[sceneSwitch][1],controller.btnTexts[sceneSwitch][2],controller.btnTexts[sceneSwitch][3]);
// }

class Controller{
    constructor(){
        this.canvas = new Canvas("canvas");
        this.timer = new Timer();
        this.scene = [];

    }

    eventHandler = {
        mouseX : -1,
        mouseY: -1
    };
    
    init(){
        this.input_init()
    }
    input_init(){

        document.addEventListener("click", (e)=>{
            this.eventHandler.mouseX = e.clientX;
            this.eventHandler.mouseY = e.clientY; 
        });
    }
}

//const controller = new Controller();

//document.onload = loadAssets( controller.init );