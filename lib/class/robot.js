class Robot {
  constructor(index, positionStr, instructionsStr, grid) {
    this.index = index;
    this.positionStr = positionStr;
    this.instructionsStr = instructionsStr;
    this.position = {x:0, y : 0}
    this.orientation;
    this.instructions;
    this.lost = false;
    this.grid = grid;
    this.output='';
    this.defineRobotPosition()
    return this.output;
  }
  
  defineRobotPosition(){
    this.position = {
      x: parseInt(this.positionStr.substr(0,1)),
      y: parseInt(this.positionStr.substr(2,1))
    }
    this.orientation = this.positionStr.substr(4,1);
    this.instructions = this.instructionsStr.split('');
    for (let i = 0; i < this.instructions.length; i++) {
      if (!this.lost){
        this.moveRobot(this.instructions[i]);
      } else{
        break;
      }
    } 

    let finalPosition = `${this.position.x} ${this.position.y} ${this.orientation}`
    finalPosition = this.lost? finalPosition +  ` LOST` : finalPosition

    this.output = this.output + finalPosition
  }
  
  moveRobot(move){
    if (move === 'F')
      this.forward();
    else
      this.turn(move);
  }

  forward(){
    let previousPosition = Object.assign({}, this.position);
    switch (this.orientation) {
      case 'N':
        this.position.y++
        break;
      case 'S':
        this.position.y--
        break;
      case 'E':
        this.position.x++
        break;
      case 'W':
        this.position.x--
        break;
      default:
        break;
    }
    this.checkIfLost(previousPosition);
  }


  turn(move){
    if (move === 'L'){
      switch (this.orientation) {
        case 'N':
          this.orientation = 'W'
          break;
        case 'S':
          this.orientation = 'E'
          break;
        case 'E':
          this.orientation = 'N'
          break;
        case 'W':
          this.orientation = 'S'
          break;
        default:
          break;
      }
    }
    else if (move === 'R'){
      switch (this.orientation) {
        case 'N':
          this.orientation = 'E'
          break;
        case 'S':
          this.orientation = 'W'
          break;
        case 'E':
          this.orientation = 'S'
          break;
        case 'W':
          this.orientation = 'N'
          break;
        default:
          break;
      }
    }
  }

  checkIfLost(previousPosition){
    if(this.position.x > this.grid.columns || this.position.x < 0 || this.position.y > this.grid.rows || this.position.y < 0){
      if (!this.checkScent()){
        this.lost = true;
      }
      this.position = previousPosition;
    }

  }

  checkScent(){
    if(!this.grid.scents.includes(JSON.stringify(this.position))){
      this.grid.scents.push(JSON.stringify(this.position))
      return false;
    }
    return true;
  }
}

module.exports = Robot;