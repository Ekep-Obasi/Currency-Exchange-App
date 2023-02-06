/* eslint-disable no-console */
const URLAllCurrencies = 'https://api.apilayer.com/exchangerates_data/symbols';
const apiKey = 'G0tiJxf4YIqjCgGxmzJPOy1lSlFGe9t0';

// G0tiJxf4YIqjCgGxmzJPOy1lSlFGe9t0 6hHACn6NLiKozud74cEj6QRLF6OlyI3Z

const myHeaders = new Headers();
myHeaders.append('apikey', apiKey);

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};
function getAllCurrencies() {
  return fetch(URLAllCurrencies, requestOptions).then((response) =>
    response.text()
  );
}

function convertCurrency(to, from, amount) {
  return fetch(
    `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
    requestOptions
  ).then((response) => response.json());
}

function getRates(base) {
  return fetch(
    `https://api.apilayer.com/fixer/latest?symbols=&base=${base}`,
    requestOptions
  ).then((response) => response.join());
}

export default {
  getAllCurrencies,
  convertCurrency,
  getRates,
};
