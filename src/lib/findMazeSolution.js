import { checkIfArrayIsIn2DArray, checkIfArrayIsIn3DArray } from "./utils.js"

export class FindMazeSolution {
    constructor (matrix, playerPosition) {
        /* 
        This class takes as input the unsolved 2D Array and the position of the player and
        either returns the 2D Array with the solutin in it or shows a message on the window screen,
        letting the player know that he is trapped
        */
        this.matrix = matrix
        this.playerPosition = playerPosition

        this.pathMatrix =  [[[this.playerPosition[0], this.playerPosition[1]] ]] 
        this.escapePosition = [this.matrix.length - 1, this.matrix[0].length - 1]

        this.length = null
        this.solution = null
        this.xCoord = null
        this.yCoord = null
        this.length = null
        this.i = null

        this.foundSolution = false
        this.isPlayerTrapped = false
    }

    solveMaze() {

        while (!(this.isPlayerTrapped || this.foundSolution)){
            /* 
            This algorithm will start from the player's position and look at each of its NWSE 
            neighbours and check if the cell is free, and then checks the neighbour's neighbours 
            and so on not until it reaches a solution or it realises that there are no solutions.

            At each iteration, we add into an array each possible road that can be followed.
            In order to find the shortest route, the algorithm also has to make sure that
            each cell that is added to the matrix has never been visited before by any of the
            other potential road candidates for the solution
            */
            this.length = this.pathMatrix.length

            for (this.i = 0; this.i < this.length; this.i++){
                this.xCoord = this.pathMatrix[this.i][this.pathMatrix[this.i].length - 1][0]
                this.yCoord = this.pathMatrix[this.i][this.pathMatrix[this.i].length - 1][1]

                if ( [[this.xCoord,this.yCoord]] == this.escapePosition ) {
                    this.foundSolution = true
                    break
                }
                
                if (this.xCoord + 1 < this.matrix.length){
                    this.testCoordonate = [this.xCoord + 1, this.yCoord]
                    this._addFreeNeigbhourIfYouNeverPassedInIt()
                }

                if (this.yCoord + 1 < this.matrix[0].length){
                    this.testCoordonate = [this.xCoord, this.yCoord + 1]
                    this._addFreeNeigbhourIfYouNeverPassedInIt()
                }

                if (this.xCoord - 1 > -1){
                    this.testCoordonate = [this.xCoord - 1, this.yCoord]
                    this._addFreeNeigbhourIfYouNeverPassedInIt()
                }

                if (this.yCoord - 1 > -1){
                    this.testCoordonate = [this.xCoord, this.yCoord - 1]
                    this._addFreeNeigbhourIfYouNeverPassedInIt()
                }

                if (this.pathMatrix[this.i][this.pathMatrix[this.i].length - 1] == this.escapePosition) {
                     this.foundSolution = true
                     this.solution = this.pathMatrix[this.i][this.pathMatrix[this.i].length - 1]
                     break
                }

                for (let j=0; j < this.pathMatrix.length; j++){
                    if (checkIfArrayIsIn2DArray(this.escapePosition,this.pathMatrix[this.i]) == true){
                        this.foundSolution = true
                        this.solution = this.pathMatrix[this.i]
                        break
                    }
                }
            }
            this._checkIfPlayerIsTrapped()
            this._removeUnusedPaths()
        }
    }

    addSolutionToCanvas(){

        if (this.isPlayerTrapped){
            document.getElementById("message").style.visibility = "visible";
        }

        if (this.foundSolution){

            for (let i = 1; i < this.solution.length; i++){
                this.matrix[this.solution[i][0]][this.solution[i][1]] = "solution"
            }
        }
    }

    _addFreeNeigbhourIfYouNeverPassedInIt() {

        if (this.matrix[this.testCoordonate[0]][this.testCoordonate[1]] == "free" && 
        checkIfArrayIsIn3DArray(this.testCoordonate,this.pathMatrix) == false )
        {
            this.pathMatrix = [... this.pathMatrix, [... this.pathMatrix[this.i], this.testCoordonate]]
        }
    }

    _checkIfPlayerIsTrapped() {
        if (this.pathMatrix.length == 0){
            this.isPlayerTrapped = true
        }
    }

    _removeUnusedPaths(){

        for (let g = 0; g < this.length; g++){
            this.pathMatrix.shift()
        }
    }
}