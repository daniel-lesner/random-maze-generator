import { range, randomNumber } from "./utils.js";

export class RenderCanvas {
    constructor () {
        // This class is generating a canvas of random size
        this.mazeLength = randomNumber(5, 40)
        this.mazeHeight = randomNumber(5, 40)

        this.stage = new PIXI.Container();
        this.renderer = new PIXI.autoDetectRenderer(256, 256, {
            resize: (this.mazeLength, this.mazeHeight),
            antialias: false,
            trasparent: true,
            resolution: 1,
        });

        this.renderer.resize(this.mazeLength * 16, this.mazeHeight * 16)    
        this.renderer.backgroundColor = 0xDFB437;
        this.renderer.view.style.border = "2px solid black";
        this.renderer.view.style.boxShadow = "0 0 10px black";
    }

    generateCanvas() {
        this.renderer.render(this.stage); 
        document.getElementById("main__display").appendChild(this.renderer.view); 
    }

    renderCanvas(myMatrix) {
        const setup = () => {
            let i, j, cell
        
            for (i of range(0, this.mazeLength)) {
                for (j of range(0, this.mazeHeight)) {
                    if (myMatrix.matrix[i][j] == "wall") {
                        cell = new PIXI.Sprite(
                            PIXI.loader.resources["assets/wall.png"].texture
                            );

                    } else if (myMatrix.matrix[i][j] == "player") {
                        cell = new PIXI.Sprite(
                            PIXI.loader.resources["assets/player.png"].texture
                        );

                    } else if (myMatrix.matrix[i][j] === "solution") {
                        cell = new PIXI.Sprite(
                            PIXI.loader.resources["assets/solution.png"].texture
                        );    

                    } else {
                        continue
                    }

                    cell.x = 0 + i * 16;
                    cell.y = 0 + j * 16; 
                    this.stage.addChild(cell);
                    this.renderer.render(this.stage);
                }
            }
        }

        PIXI.loader.add("assets/wall.png").add("assets/player.png").add("assets/solution.png").load(setup);
    }
}
