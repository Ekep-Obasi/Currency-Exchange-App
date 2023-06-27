const options = { method: 'GET', headers: { accept: 'application/json' } };
const apiKey="a41defbf86-01f1fb7d60-rwvx04"

const getRates = (defaultCurrency) =>
  fetch(
    `https://api.fastforex.io/fetch-all?from=${defaultCurrency}&api_key=${apiKey}`,
    options
  ).then((response) => response.json());

const convertCurrency = (from, to, amount) =>
  fetch(
    `https://api.fastforex.io/convert?from=${from}&to=${to}&amount=${amount}&api_key=${apiKey}`,
    options
  ).then((response) => response.json());

export default { getRates, convertCurrency };
