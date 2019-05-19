const Grid = require("./class/grid")
const Robot = require("./class/robot")


class Start {
    constructor(input){
        this.input = input;
        this.grid;
        this.buildGrid()
        this.result;
        this.returnRes();
    }
    
    buildGrid(){
        let gridString = this.input.substr(0,3);
        this.grid = new Grid(gridString[0],gridString[2])
        this.processRobots()
    }
    
    processRobots(){
        let instructions = this.input.split('\n');
        let nRobots= (instructions.length -1)/2;
        for (let robotIdx = 1; robotIdx <= nRobots; robotIdx++) {
            let instructionR = instructions[robotIdx*2];
            let positionR = instructions[(robotIdx*2)-1];
            let robot = new Robot(robotIdx, positionR, instructionR, this.grid);
            if (this.result){
                this.result = this.result + robot.output + '\n'
            }else {
                this.result = robot.output + '\n'
            }
        }
    }
    returnRes(){
        return this.result;
    }
} 

module.exports = Start;
