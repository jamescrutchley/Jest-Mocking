import analyseArray from "./analyseArray";

test('average', () => {
    expect(analyseArray.average([0,50,100,1000])).toBeCloseTo(287.5);
})

test('min', () => {
    expect(analyseArray.min([10, 23, 3, 100])).toBe(3);
})

test('max', () => {
    expect(analyseArray.max([10, 30, 34, 120.3, 1])).toBe(120.3)
})

test('length', () => {
    expect(analyseArray.length([1,2,3,4,5,6,7,8])).toBe(8)
})