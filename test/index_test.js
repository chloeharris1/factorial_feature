var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    // check if the output of 5! is equal to 120
    it('returns the correct value of 5!', () => {
      // Setup
      const inputNumber = 5;
      const expected = 120;

      // Exercise
      const result = Calculate.factorial(inputNumber)

      // Verify
      assert.strictEqual(result, expected)
    });
    // check if the factorial method returns 6 when you pass 3
    it('returns correct value of 3!', ()=>{
      // Setup
      const inputNumber = 3;
      const expected = 6;

      // Exercise
      const result = Calculate.factorial(inputNumber)

      // Verify
      assert.strictEqual(result, expected)
    });
    // check if the output of 0! is equal to 1
    it('returns correct value of 0!', ()=>{
      // Setup
      const inputNumber = 0;
      const expected = 1;

      // Exercise
      const result = Calculate.factorial(inputNumber)

      // Verify
      assert.strictEqual(result, expected)
    });
  });
});