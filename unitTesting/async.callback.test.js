const assert = require("chai").assert

// returns a callback
function randomAsyncFunc(boolValue, callback) {
  setTimeout(function() {
    callback(boolValue ? "Hello" : "Goodbye")
  }, 10);
}

// done will make mocha wait until it is called
describe("async test", function()  {
  it("expecting return value of 'Hello' when 'true'", function(done) {
    randomAsyncFunc(true, function(cb){
      assert.equal(cb, "Hello");
      done();
    });
  });
});