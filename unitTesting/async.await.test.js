const assert = require("chai").assert

// returns a promise
async function randomAsyncFunc(boolValue) {
  return new Promise(function(resolve){
    setTimeout(function() {
      resolve(boolValue ? "Hello" : "Goodbye")
    }, 1000);
  })
}

// eventually comes with chai-as-promised lib
describe("async test", function()  {
  it("expecting return value of 'Goodbye' when 'false'", async function() {
    const result = await randomAsyncFunc(false);
    assert.equal(result, "Goodbye");
  });
});
