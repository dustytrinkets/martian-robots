var assert = require('Chai').assert;
let Start = require('../lib/start');

describe('Testing Start', function() {
    it('should start a new game', function() {
        let input =  '5 3\n1 1 E\nRFRFRFRF\n3 2 N \nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL'
        let start = new Start(input);
        assert.instanceOf(start, Start);
    })

})