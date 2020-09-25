import { RenderCanvas } from "./lib/renderCanvas.js"
import { CreateMatrixMaze } from "./lib/createMatrixMaze.js"
import { FindMazeSolution} from "./lib/findMazeSolution.js"
import "./style.css"

let myMaze, myMatrix, mySolvedMatrix

myMaze = new RenderCanvas()
myMaze.generateCanvas()

myMatrix = new CreateMatrixMaze(myMaze.mazeLength, myMaze.mazeHeight)
myMatrix.createUnsolvedMatrix()

mySolvedMatrix = new FindMazeSolution(myMatrix.matrix, myMatrix.playerPosition)
mySolvedMatrix.solveMaze()
mySolvedMatrix.addSolutionToCanvas()

myMaze.renderCanvas(mySolvedMatrix)

const myFunction = () => {
    textVariable = true;
    console.log("mata")
}