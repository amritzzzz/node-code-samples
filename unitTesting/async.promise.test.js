const chai = require("chai");
const assert = chai.assert;
chai.use(require("chai-as-promised"));

// returns a promise
function randomAsyncFunc(boolValue) {
  return new Promise(function(resolve){
    setTimeout(function() {
      resolve(boolValue ? "Hello" : "Goodbye")
    }, 1000);
  })
}

// eventually comes with chai-as-promised lib
describe("async test", function()  {
  it("expecting return value of 'Goodbye' when 'false'", function() {
    assert.eventually.equal(randomAsyncFunc(false), "Goodbye");
  });
});
