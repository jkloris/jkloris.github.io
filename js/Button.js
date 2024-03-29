class Button{
    constructor(position,size, name, Bcolor,Fcolor, font){
        this.position = position;
        this.size = size;
        this.Bcolor = Bcolor;
        this.Fcolor = Fcolor;
        this.Font = font;
        if(this.size.y < 30) this.size.y = 30;
        
        this.name = name;
    }

    update(mouseX, mouseY){
        this.check(mouseX, mouseY);
    }


    check(mouseX, mouseY){
        if(mouseX >= this.position.x && mouseX <=this.position.x + this.size.x && mouseY >= this.position.y && mouseY <=this.position.y +this.size.y){
            this.action();
        } 
    }
    
    draw(){        
        var a = this.size.y / 2 + 16;
        var b = this.size.x/2;
        Canvas.context.save();
        Canvas.context.fillStyle = this.Bcolor;
        Canvas.context.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
        Canvas.context.fillStyle = this.Fcolor;
        Canvas.context.font = this.Font;
        Canvas.context.textAlign = "center";
        Canvas.context.fillText(this.name, this.position.x + b, this.position.y+a);
        Canvas.context.restore();
    }


}
