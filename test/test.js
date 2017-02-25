"use strict";
require("typings-test");
const smartchai_1 = require("smartchai");
const tlt = require("../dist/index");
describe('tlt', function () {
    let testTlt;
    it('should create a valid instance of tlt', function () {
        testTlt = new tlt.Tlt('some awesome {{customString}}');
        smartchai_1.expect(testTlt).to.be.instanceOf(tlt.Tlt);
    });
    it('should output a valid string with some data', function () {
        let appliedString = testTlt.applyData({ customString: 'horse' });
        smartchai_1.expect(appliedString).to.equal('some awesome horse');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFxQjtBQUNyQix5Q0FBa0M7QUFFbEMscUNBQW9DO0FBRXBDLFFBQVEsQ0FBQyxLQUFLLEVBQUU7SUFDZCxJQUFJLE9BQWdCLENBQUE7SUFDcEIsRUFBRSxDQUFDLHVDQUF1QyxFQUFFO1FBQzFDLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQTtRQUN0RCxrQkFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUMzQyxDQUFDLENBQUMsQ0FBQTtJQUNGLEVBQUUsQ0FBQyw2Q0FBNkMsRUFBRTtRQUNoRCxJQUFJLGFBQWEsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUE7UUFDaEUsa0JBQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUE7SUFDdEQsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQSJ9