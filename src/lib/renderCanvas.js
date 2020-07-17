import { randomNumber } from "./utils.js";

export class RenderCanvas {
    constructor () {
        // This class is generating a canvas of random size
        this.mazeLength = randomNumber(5, 50)
        this.mazeHeight = randomNumber(5, 50)

        this.stage = new PIXI.Container();
        this.renderer = new PIXI.autoDetectRenderer(256, 256, {
            resize: (this.mazeLength,this.mazeHeight),
            antialias: false,
            trasparent: true,
            resolution: 1,
        });

        this.renderer.resize(this.mazeLength * 16, this.mazeHeight * 16)    
        this.renderer.backgroundColor = 0xDFB437;
        this.renderer.view.style.border = "2px solid black";
    }

    generateCanvas() {
        this.renderer.render(this.stage);    
        document.getElementById("display").appendChild(this.renderer.view); 
    }
}
