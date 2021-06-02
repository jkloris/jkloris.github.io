
let Sprites = {};
let Notloaded_assets = 0;

function AssetsLoading_loop(callback){
    if(Notloaded_assets > 0){       
        requestAnimationFrame(AssetsLoading_loop.bind(this,callback));
    } else callback();
    
    
}

function loadAssets(callback){

    function loadIMG(path, imgName){
        Notloaded_assets++;

        var img = new Image();
        img.src = path + imgName;

        img.onload = function(){
            Notloaded_assets--;
        }

        return img;
    }

    Sprites.happy = loadIMG("./imgs/", "stastny.png");
    Sprites.sad = loadIMG("./imgs/", "placko.png");
    Sprites.surprised = loadIMG("./imgs/", "prekvapeny.png");
    Sprites.angry = loadIMG("./imgs/", "nasraty.png");
    

    AssetsLoading_loop(callback);
}
