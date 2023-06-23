const orderTotal = require('./mock')


//



test('correct total, no tax', () => {
    orderTotal(null, {
        items: [
            { name: 'three', price: 80, quantity: 1 },
            { name: 'four', price: 100, quantity: 3 }
        ]
    }).then(result => {
        expect(result).toBe(380);
    })
});


test('calls fetch on correct url', () => {
    let fakeFetchCalled = false
    //simulates an api call to fetch 'tax data'
    const fakeFetch = (url) => {
        expect(url).toBe('https://6493f35b0da866a95366e735.mockapi.io/api/europeVatTax')
        fakeFetchCalled = true;
        return Promise.resolve({
            json: () => Promise.resolve({
                tax: 10
            })
        })
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


// not realistic - country property passed into orderTotal 
// does nothing here. 
test('correctly adds tax if country specified', () => {
    let fakeFetchCalled = false;
    const fakeFetch = (url) => {
        expect(url).toBe('https://6493f35b0da866a95366e735.mockapi.io/api/europeVatTax')
        fakeFetchCalled = true;
        return Promise.resolve({
            tax: 10
        })
    }
    orderTotal(fakeFetch, {
        country: 'country 5',
        items: [
            { name: 'three', price: 80, quantity: 1 },
            { name: 'four', price: 100, quantity: 1 }
        ]
    }).then(result => {
        expect(result).toBeCloseTo(198)
    })
})