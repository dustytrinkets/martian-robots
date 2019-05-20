const Grid = require("./class/grid")
const Robot = require("./class/robot")


class Start {
    constructor(input){
        this.input = input;
        this.grid;
        this.robots = [];
        this.result;
        this.buildGrid()
        this.returnRes();
    }
    
    buildGrid(){
        let gridString = this.input.split('\n')[0];
        gridString = gridString.split(' ');
        this.grid = new Grid(gridString[0],gridString[1])
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
            this.robots.push(robot)
        }
    }
    returnRes(){  
        return {
            result: this.result,
            grid: this.grid,
            robots: this.robots
        }
    }
} 

module.exports = Start;
