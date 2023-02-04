/* eslint-disable no-console */
const URLAllCurrencies = 'https://api.apilayer.com/exchangerates_data/symbols';
const apiKey = '6hHACn6NLiKozud74cEj6QRLF6OlyI3Z';

const myHeaders = new Headers();
myHeaders.append('apikey', apiKey);

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};
function getAllCurrencies() {
  return fetch(URLAllCurrencies, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error));
}

function convertCurrency(to, from, amount) {
  return fetch(
    `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error));
}

export default {
  getAllCurrencies,
  convertCurrency,
};