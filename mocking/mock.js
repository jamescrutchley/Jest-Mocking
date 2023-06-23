import axios from "axios";

function orderTotal(fetch, order) {
    if (order.country) {
    return fetch('https://6493f35b0da866a95366e735.mockapi.io/api/europeVatTax')
        .then(data => data.tax)
        .then(vat => order.items.reduce((prev, cur) => 
        cur.price * (cur.quantity || 1) + prev, 0) * (1+vat/100))
    }
    return Promise.resolve(order.items.reduce((prev, cur) => 
    cur.price * (cur.quantity || 1) + prev, 0));;
};  


module.exports = orderTotal;