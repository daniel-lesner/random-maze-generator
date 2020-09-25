import { randomNumber, range } from "./utils.js"

export class CreateMatrixMaze {
    /*
    This class will receive as input the length and width of the canvas we previously randomly 
    generated and will output an matrix (2D Array) and randomly assign the position of the player,
    walls and paths of our maze
    */ 
    constructor(rows, columns) {
        this.rows = rows
        this.columns = columns
        this.totalNumberOfCells = this.rows * this.columns
        this.numberOfWalls = randomNumber(1, this.totalNumberOfCells)

        this.valueArray = []
        this.matrix = []
        this.playerPosition = []

        this.valueArray.push("player")

        for (let i of range(0, this.numberOfWalls)) {
            this.valueArray.push("wall");
        }

        for (let i of range(0, this.totalNumberOfCells - this.numberOfWalls - 1)) {
            this.valueArray.push("free");
        }
    }

    createUnsolvedMatrix() {

        for (let i of range(0, this.rows)) {
            this.matrix[i] = []

            for (let j of range(0, this.columns)) {

                if (j + 1 == this.columns && i + 1 == this.rows) {
                    this.matrix[i][j] = this.valueArray[0]
                } else { 
                    let randomPosition = randomNumber(0, this.valueArray.length - 2)
                    this.matrix[i][j] = this.valueArray[randomPosition];
                    
                    if (this.valueArray[randomPosition] == "player") {
                        this.playerPosition = [i, j]
                    }
                    this.valueArray.splice(randomPosition, 1)
                }
            }
        }
    }
}