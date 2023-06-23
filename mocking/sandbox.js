const axios = require('axios');
const orderTotal = require('./mock')

async function fetchData() {
  try {
    const response = await axios.get('https://6493f35b0da866a95366e735.mockapi.io/api/europeVatTax');
    const data = await response.json();
    return data[0].tax;
  } catch (error) {
    console.error(error);
  }
}

export default fetchData;

