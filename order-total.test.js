const orderTotal = require('./order-total');

it('Quantity', () => {
    expect(orderTotal({
        items: [
            { name: 'One', price: 8 },
        ]
    })).toBe(8)
})

it('Sum', () => {
    expect(orderTotal({
        items: [
            { name: 'three', price: 80, quantity: 1 },
            { name: 'four', price: 100, quantity: 1 }
        ]
    })).toBe(180)
})

it('Quantity+Sum', () => {
    expect(orderTotal({
        items: [
            { name: 'Some product', price: 8, quantity: 8 },
        ]
    })).toBe(64)
})

