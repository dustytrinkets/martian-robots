var assert = require('Chai').assert;
let Grid = require('../lib/class/grid');

describe('Testing Grids', function() {

  it('should assert obj is instance of Grid', function() {
    var obj = new Grid(1, 1, []);
    assert.instanceOf(obj, Grid);
})

  it('should return a grid of 5 columns', function() {
    let grid = new Grid(5,3);

    assert.equal(grid.columns, 5);
  })

  it('should fix the grid to be not greater than 50x50', function() {
    let grid = new Grid(100,3);

    assert.equal(grid.columns, 50);
  })

})