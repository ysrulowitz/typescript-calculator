import { expect } from "chai";
import { subtract, add, multiply, divide } from "../dist/calculator.js";


describe("calculator functions", () => {
  describe("add", () => {
    it("1, 1 should return 2", () => {
      expect(add(1, 1)).to.equal(2);
    });

    it("1, 6 should return 7", () => {
      expect(add(6, 1)).to.equal(7);
    });

    it("1, a should return NaN", () => {
      expect(add(1, "a")).to.be.NaN;
    });

    it("a, 1 should return NaN", () => {
      expect(add("a", 1)).to.be.NaN;
    });
  });

  describe("subrtact", () => {
    it("1, 1 should return 0", () => {
      expect(subtract(1, 1)).to.equal(0);
    });

    it("6, 1 should return 5", () => {
      expect(subtract(6, 1)).to.equal(5);
    });

    it("1, a should return NaN", () => {
      expect(subtract(1, "a")).to.be.NaN;
    });

    it("a, 1 should return NaN", () => {
      expect(subtract("a", 1)).to.be.NaN;
    });
  });

  describe("multiply", () => {
    it("1, 1 should return 0", () => {
      expect(multiply(1, 1)).to.equal(1);
    });

    it("6, 1 should return 5", () => {
      expect(multiply(6, 1)).to.equal(6);
    });

    it("1, a should return NaN", () => {
      expect(multiply(1, "a")).to.be.NaN;
    });

    it("a, 1 should return NaN", () => {
      expect(multiply("a", 1)).to.be.NaN;
    });
  });

  describe("Division", () => {
    it("1, 1 should return 0", () => {
      expect(divide(1, 1)).to.equal(1);
    });

    it("6, 0 should return divizon by zero err", () => {
      expect(() => divide(6, 0)).to.throw("Division by zero err");
    });

    it("1, a should return NaN", () => {
      expect(divide(1, "a")).to.be.NaN;
    });

    it("a, 1 should return NaN", () => {
      expect(divide("a", 1)).to.be.NaN;
    });
  });
});
