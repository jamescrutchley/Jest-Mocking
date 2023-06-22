import cipher from "./caesarCipher"


test('lowercase', () => {
    expect(cipher('string', 1)).toBe('tusjoh')
})

test('mixed case', () => {
    expect(cipher('SomeStrinG', 5)).toBe('XtrjXywnsL')
})

test('spaces, punctuation, and mixed case', () => {
    expect(cipher('Wdw !! , elpehan', 9)).toBe('Fmf !! , nuynqjw')
})