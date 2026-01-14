export function add(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError ("Add expects two numeric values");
    }

    if (Number.isNaN(a) || Number.isNaN(b)) {
        throw new TypeError ("Numbers cannot be NaN");
    }

    if (a < 0 || a > 10) {
        throw new RangeError ("a is not between 0-10");
    }
    
    if (b < 0 || b > 10) {
        throw new RangeError ("b is not between 0-10");
    }

    return a + b;
}

export function division(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError ("Divide expects two numeric values");
    }
    if (Number.isNaN(a) || Number.isNaN(b)) {
        throw new TypeError("Numbers cannot be NaN");
    }
    if (a < 0 || a > 10) {
        throw new RangeError("a is not between 0-10");
    }
    if (b < 0 || b > 10) {
        throw new RangeError("b is not between 0-10");
    }
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }

    return a / b;
}