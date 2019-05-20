const assert = require('Chai').assert;
const Robot = require('../lib/class/robot');

describe('Testing Robots', function() {
    it('should assert obj is instance of Robot', function() {
        let grid ={
            columns: 5,
            rows: 3,
            scents:[]
        }
        let obj = new Robot(1, '3 2 N', 'FRRFLLFFRRFLL', grid);
        assert.instanceOf(obj, Robot);
    })

    it('should assert position of the robot to be 3 3 N LOST', function() {
        let grid ={
            columns: 5,
            rows: 3,
            scents:[]
        }
        let robot = new Robot(1, '3 2 N', 'FRRFLLFFRRFLL', grid);
        assert.equal(robot.output, '3 3 N LOST');
  })

})