import reverse from "./string-reversal";


test('reverse single word', () => {
    expect(reverse('test')).toBe('tset')
});

test('reverse sentence', () => {
    expect(reverse('lorem ipsum')).toBe('muspi merol')
});