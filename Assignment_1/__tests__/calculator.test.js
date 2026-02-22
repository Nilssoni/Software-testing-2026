import { add, division } from "../src/calculator.js";

describe("Addition Function", () => {
    it("Add two integers",() => {
        expect(add(2,3)).toBe(5);
    })
    it("Throw error when a or b is not a number", () => {
        expect(() => add("2",3)).toThrow("Add expects two numeric values");
        expect(() => add(2,"3")).toThrow("Add expects two numeric values");
    })
    it("Throw error when a or b is NaN",() => {
        expect(() => add(NaN,3)).toThrow("Numbers cannot be NaN");
        expect(() => add(2,NaN)).toThrow("Numbers cannot be NaN");
    })
    it("Throw new error when a or b is out of range", () => {
        expect(() => add(-1,3)).toThrow("a is not between 0-10");
        expect(() => add(11,3)).toThrow("a is not between 0-10");
        expect(() => add(2,-1)).toThrow("b is not between 0-10");
        expect(() => add(2,11)).toThrow("b is not between 0-10");
    })
})

describe("Division function", () => {
    it("Divide two integers", () => {
        expect(division(10,2)).toBe(5);
    })
    it("Throw new error when a or b is not a number", () => {
        expect(() => division("10",2)).toThrow("Divide expects two numeric values");
        expect(() => division(10,"2")).toThrow("Divide expects two numeric values");
    })
    it("Throw new error when a or b is NaN", () => {
        expect(() => division(NaN,2)).toThrow("Numbers cannot be NaN");
        expect(() => division(10,NaN)).toThrow("Numbers cannot be NaN");
    })
    it("Throw new error when a or b is out of range", () => {
        expect(() => division(-1,2)).toThrow("a is not between 0-10");
        expect(() => division(11,2)).toThrow("a is not between 0-10");
        expect(() => division(10,-1)).toThrow("b is not between 0-10");
        expect(() => division(10,11)).toThrow("b is not between 0-10");
    })
    it("Throw new error when division by zero", () => {
        expect(() => division(10,0)).toThrow("Division by zero is not allowed");
    })
})