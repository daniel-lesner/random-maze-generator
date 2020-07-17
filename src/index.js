import { RenderCanvas } from "./lib/renderCanvas.js"
import { CreateMatrixMaze } from "./lib/createMatrixMaze.js"
import { FindMazeSolution} from "./lib/findMazeSolution.js"
import "./style.css"


let myMaze = new RenderCanvas()
myMaze.generateCanvas()

let myMatrix = new CreateMatrixMaze(myMaze.mazeLength, myMaze.mazeHeight)
myMatrix.createUnsolvedMatrix()

let mySolvedMatrix = new FindMazeSolution(myMatrix.matrix, myMatrix.playerPosition)
mySolvedMatrix.solveMaze()
mySolvedMatrix.addSolutionToCanvas()

let setup = () => {
    for (let i = 0; i < myMaze.mazeLength; i++ ){
        for (let j = 0; j < myMaze.mazeHeight; j++) {
            if (mySolvedMatrix.matrix[i][j] == "wall") {
                let wall = new PIXI.Sprite(
                    PIXI.loader.resources["assets/wall.png"].texture
                    );

                wall.x = 0 + i * 16;
                wall.y = 0 + j * 16;

                myMaze.stage.addChild(wall);
                myMaze.renderer.render(myMaze.stage);

            } else if (mySolvedMatrix.matrix[i][j] == "player") {
                let player = new PIXI.Sprite(
                    PIXI.loader.resources["assets/player.png"].texture
                    );

                player.x = 0 + i * 16;
                player.y = 0 + j * 16;

                myMaze.stage.addChild(player);
                myMaze.renderer.render(myMaze.stage);

            } else if (mySolvedMatrix.matrix[i][j] == "solution") {
                let solution = new PIXI.Sprite(
                    PIXI.loader.resources["assets/solution.png"].texture
                    );

                    solution.x = 0 + i * 16;
                    solution.y = 0 + j * 16;
    
                    myMaze.stage.addChild(solution);                    
                    myMaze.renderer.render(myMaze.stage);
            } 
        }
    }
}

PIXI.loader.add("assets/wall.png").add("assets/player.png").add("assets/solution.png").load(setup);