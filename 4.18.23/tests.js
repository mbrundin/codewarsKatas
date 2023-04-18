const { assert } = require('chai');

it("Basic tests",function() {

  function doTest(input, expected) {
    assert.strictEqual(findNb(input), expected, `Incorrect answer for m=${input}`);
  }

  doTest(4183059834009,   2022)
  doTest(24723578342962,    -1)
  doTest(135440716410000, 4824)
  doTest(40539911473216,  3568)
  doTest(26825883955641,  3218)
  doTest(41364076483082,    -1)

  doTest(9541025211025,  2485)
  doTest(112668204662785,  -1)
  doTest(79172108332642,   -1)
  doTest(1788719004901,   -1)

  doTest(20864367469009, 3022)
  doTest(20864367469010,   -1)

  doTest(16, -1)
  doTest( 4, -1)
});

describe("Random tests",function(){
    function randint(a,b) {
        return Math.floor(Math.random() * (b - a + 1) + a);
    }
    function solution(m) {
        let limit = ~~(Math.sqrt(2) * Math.pow(m, 0.25) + 1);
        for (let i = 0; i <= limit; i++) {
            if (i * i * (i + 1) * (i + 1) == 4 * m)
                return i;
        }
        return (-1);
    }
    for (let i = 0; i < 50; i++){
        let p = randint(1, 5500);
        {
          let k = p * p * (p + 1) * (p + 1) / 4 + randint(0, 1);
          it("Testing for : " + k,
              function(){
                  assert.strictEqual(findNb(k),solution(k),"It should work with random inputs")
              }
          )
        }
        {
          let k = randint(1, 1000);
          it("Testing for : " + k,
              function(){
                  assert.strictEqual(findNb(k),solution(k),"It should work with random inputs")
              }
          )
        }
    }
})
