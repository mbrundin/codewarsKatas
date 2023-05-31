const assert = require('chai').assert;

describe('summation', function () {
  
  function doTest(input) {
    let actual = summation(input);
    let expected = input * (input+1) / 2
    assert.strictEqual(actual, expected, `Incorrect answer for n=${input}`);
  }
  
  it('should return the correct total', function () {
    doTest(  1,     1)
    doTest(  2,     3)
    doTest(  8,    36)
    doTest( 22,   253)
    doTest(100,  5050)
    doTest(213, 22791)
  });
  
  it('random numbers test', function () {
    for (let i = 0; i < 100; i++) {
      let rand = Math.random() * 500 + 1 | 0;
      doTest(rand);
    }
  })
})