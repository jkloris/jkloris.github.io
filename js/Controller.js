let sceneSwitch = 0;

function nextScene(){
    sceneSwitch++;
    controller.scene[sceneSwitch].init(controller.btnTexts[sceneSwitch][0],controller.btnTexts[sceneSwitch][1],controller.btnTexts[sceneSwitch][2],controller.btnTexts[sceneSwitch][3]);
}

function setScene(scene){
    sceneSwitch = scene;
    controller.scene[sceneSwitch].init(controller.btnTexts[sceneSwitch][0],controller.btnTexts[sceneSwitch][1],controller.btnTexts[sceneSwitch][2],controller.btnTexts[sceneSwitch][3]);
}

class Controller{
    constructor(){
        this.canvas = new Canvas("canvas");
        this.timer = new Timer();
        
        
        this.scene = [];
        this.btnTexts = [[],["Smútok", "Hnev", "Radosť", "Prekvapenie"], [],
                            ["Prekvapenie", "Hnev", "Nuda", "Smútok"],[], 
                            ["Prekvapenie", "Radosť", "Zhnusenie", "Strach"], [], 
                            ["Radosť", "Hnev", "Smútok", "Obava"], []];
        

    }
    
    init(){
        controller.canvas.clear();
        controller.scene.push(new SceneStart(controller.canvas));
        controller.scene.push(new SceneWindow(controller.canvas,controller.timer ,Sprites.happy, 3));
        controller.scene.push(new SceneBetween(controller.canvas));
        controller.scene.push(new SceneWindow(controller.canvas,controller.timer ,Sprites.sad, 4));
        controller.scene.push(new SceneBetween(controller.canvas));
        controller.scene.push(new SceneWindow(controller.canvas,controller.timer ,Sprites.surprised, 1));
        controller.scene.push(new SceneBetween(controller.canvas));
        controller.scene.push(new SceneWindow(controller.canvas,controller.timer ,Sprites.angry, 2));
        controller.scene.push(new SceneFin(controller.canvas,controller.scene));

        controller.scene[sceneSwitch].init(controller.btnTexts[sceneSwitch][0],controller.btnTexts[sceneSwitch][1],controller.btnTexts[sceneSwitch][2],controller.btnTexts[sceneSwitch][3]);
        
    }

    

    
}

//const controller = new Controller();

//document.onload = loadAssets( controller.init );