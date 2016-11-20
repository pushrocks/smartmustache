"use strict";
require("typings-test");
const should = require("should");
const tlt = require("../dist/index");
describe('tlt', function () {
    let testTlt;
    it('should create a valid instance of tlt', function () {
        testTlt = new tlt.Tlt('some awesome {{customString}}');
        should(testTlt).be.instanceOf(tlt.Tlt);
    });
    it('should output a valid string with some data', function () {
        let appliedString = testTlt.applyData({ customString: 'horse' });
        should(appliedString).equal('some awesome horse');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFxQjtBQUNyQixpQ0FBZ0M7QUFFaEMscUNBQW9DO0FBRXBDLFFBQVEsQ0FBQyxLQUFLLEVBQUU7SUFDWixJQUFJLE9BQWdCLENBQUE7SUFDcEIsRUFBRSxDQUFDLHVDQUF1QyxFQUFFO1FBQ3hDLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQTtRQUN0RCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDMUMsQ0FBQyxDQUFDLENBQUE7SUFDRixFQUFFLENBQUMsNkNBQTZDLEVBQUU7UUFDOUMsSUFBSSxhQUFhLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFDLFlBQVksRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFBO1FBQzlELE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtJQUNyRCxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=