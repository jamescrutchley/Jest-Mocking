const orderTotal = require('./mock')



test('calls fetch on correct url', () => {
    let fakeFetchCalled = false
    const fakeFetch = (url) => {
        expect(url).toBe('https://6493f35b0da866a95366e735.mockapi.io/api/europeVatTax')
        fakeFetchCalled = true;
    }
    orderTotal(fakeFetch, {
        country: 'country 5',
        items: [
            { name: 'three', price: 80, quantity: 1 },
            { name: 'four', price: 100, quantity: 1 }
        ]
    }).then(result => {
        expect(fakeFetchCalled).toBe(true);
    })
})

test('if country specified, add tax rate', () => {
    let fakeFetchCalled = false
    const fakeFetch = (url) => {
        let data = url;
        expect(url).toBe('https://6493f35b0da866a95366e735.mockapi.io/api/europeVatTax')
        fakeFetchCalled = true;
    }

    orderTotal(fakeFetch, {
        country: 'country 5',
        items: [
            { name: 'three', price: 80, quantity: 1 },
            { name: 'four', price: 100, quantity: 1 }
        ]
    }).then(result => {
        expect(fakeFetchCalled).toBe(true),
        expect(result).toBeCloseTo(284.4)
    })
})