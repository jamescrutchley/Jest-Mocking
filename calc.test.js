import calc from "./calc";


test('add', () => {
    expect(calc.add(2,4)).toBe(6);
});

test('subtract', () => {
    expect(calc.subtract(2,4)).toBe(-2);
});

test('divide', () => {
    expect(calc.divide(10,2)).toBe(5);
});

test('multiply', () => {
    expect(calc.multiply(2,4)).toBe(8);
});