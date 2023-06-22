
function orderTotal(fetch, order) {
    let data = fetch('https://6493f35b0da866a95366e735.mockapi.io/api/europeVatTax')
    console.log(data);
    let total = Promise.resolve(order.items.reduce((prev, cur) => 
    cur.price * (cur.quantity || 1) + prev, 0));
    if (order.country) {
        let tax = data[0].tax;
        total += (total * tax / 100)
    }
    return total;
};  

orderTotal()

module.exports = orderTotal;