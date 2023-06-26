const options = { method: 'GET', headers: { accept: 'application/json' } };

const getRates = (defaultCurrency) =>
  fetch(
    `https://api.fastforex.io/fetch-all?from=${defaultCurrency}&api_key=8bc9d4a802-a8e29af3dc-rppe6l`,
    options
  ).then((response) => response.json());

const convertCurrency = (from, to, amount) =>
  fetch(
    `https://api.fastforex.io/convert?from=${from}&to=${to}&amount=${amount}&api_key=8bc9d4a802-a8e29af3dc-rppe6l`,
    options
  ).then((response) => response.json());

export default { getRates, convertCurrency };
