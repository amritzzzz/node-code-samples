const assert = require("chai").assert;
const sinon = require("sinon");
const userController = require("./user.controller.js");

describe("UserController", function()  {
  describe("getUserName", function() {
    it("should return user's name if logged in", function() {
      // create user object with empty isLoggedIn function
      let user = { isLoggedIn: function(){} }

      // stub isLoggedIn function and make it return true always
      const isLoggedInStub = sinon.stub(user, "isLoggedIn").returns(true);

      // create req object with user 
      let req = { user: user }

      // create res object with empty send function
      let res = { send: function(){}  }

      // mock res
      const mock = sinon.mock(res);
      // // define the outcome of the mock
      mock.expects("send").once().withExactArgs("Bob Barker");

      userController.getUserName(req, res);
      assert.isTrue(isLoggedInStub.calledOnce);

      // verify that mock works as expected
      mock.verify();
    });
  });
});