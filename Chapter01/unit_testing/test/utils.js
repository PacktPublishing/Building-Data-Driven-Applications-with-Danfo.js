const chai = require("chai");
const expect = chai.expect;
const utils = require("../src/utils");

describe("Test addition of two numbers", () => {
    it("should return 20 for addition of 15 and 5", () => {
        expect(utils.addTwoNumbers(15, 5)).equals(20);
    });
    it("should return -2 for addition of 10 and -12", () => {
        expect(utils.addTwoNumbers(10, -12)).equals(-2);
    });
    it("should throw an error when string data type is passed", () => {
        expect(() => utils.addTwoNumbers("One", -12))
            .to
            .throw(Error, "Cannot add string type to number");
    });
});


describe("Test mean computation of an array", () => {
    it("should return 25 as mean of array [50, 25, 15, 10]", () => {
        expect(utils.mean([50, 25, 15, 10])).equals(25);
    });
    it("should return 2.2 as mean of array [5, 2, 1, 0, 3]", () => {
        expect(utils.mean([5, 2, 1, 0, 3])).equals(2.2);
    });
    it("should throw error on empty array arg", () => {
        expect(() => utils.mean([])).to.throw(Error, "Cannot compute mean of empty array")
    });
});
