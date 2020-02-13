var assert = require("assert");

describe('Users', function() {
    const users = [];
    // ensure default state of users before running each test
    beforeEach({
        users = [
            { name: "Jane", age: 21, salary: 50000 },
            { name: "Bob", age: 32, salary: 85000 },
            { name: "Moe", age: 50, salary: 150000 }
        ]
    });

    describe('update salary', function() {
        it('respond with matching records', function() {
            updateSalaries(users, 10000);
            assert.equal(user[0].salary, 60000);
            assert.equal(user[1].salary, 95000);
            assert.equal(user[2].salary, 160000);
        });
    });
})
