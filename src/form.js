/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import api from './data/currencies.json';
// import apiData from './api';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 45%;
  gap: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border-radius: 8px;
  padding: 0 15px;

  .images {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }

  h2 {
    margin: 0;
  }
`;

const InputFeild = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5px 0;

  input {
    width: 100%;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const StyledImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

function Form() {
  // apiData.convertCurrency('USD', 'XAF', 4000);
  const [wallet, setWallet] = useState([]);
  const [depatureCurrency, setDepartureCurrency] = useState('USD');
  const [arrivalCurrency, setArrivalCurrency] = useState('KES');
  const countryfrom = depatureCurrency.toLowerCase().slice(0, 2);
  const countryto = arrivalCurrency.toLowerCase().slice(0, 2);

  const handleSubmit = (e) => {
    e.preventDefault();
    setWallet((value) => [
      ...value,
      {
        depature: depatureCurrency,
        amount: e.target.elements.amount.value,
        arrival: arrivalCurrency,
      },
    ]);
  };

  console.log(wallet);

  return (
    <StyledWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <div className="images">
          <StyledImage
            className="flag"
            crossOrigin="anonymous"
            src={`https://countryflagsapi.com/png/${countryfrom}`}
            alt="crashed"
          />
          <p>&rang;</p>
          <StyledImage
            className="flag"
            crossOrigin="anonymous"
            src={`https://countryflagsapi.com/png/${countryto}`}
            alt="crashed"
          />
        </div>
        <h2>Convert Currencies</h2>

        <InputFeild className="input">
          <label>Choose Default Currency</label>
          <select onChange={(e) => setArrivalCurrency(e.target.value)} required>
            <option>Choose currency</option>
            {Object.keys(api.symbols).map((key) => (
              <option value={key}>
                <bold>{key}</bold> | {api.symbols[key]}
              </option>
            ))}
          </select>
        </InputFeild>

        <InputFeild className="input">
          <label htmlFor="countryfrom">from</label>
          <select
            onChange={(e) => setDepartureCurrency(e.target.value)}
            required
          >
            {Object.keys(api.symbols).map((key) => (
              <option value={key}>
                <bold>{key}</bold> | {api.symbols[key]}
              </option>
            ))}
          </select>
        </InputFeild>

        <InputFeild className="input">
          <label htmlFor="countryto">to</label>
          <select onChange={(e) => setArrivalCurrency(e.target.value)} required>
            <option>Choose currency</option>
            {Object.keys(api.symbols).map((key) => (
              <option value={key}>
                <bold>{key}</bold> | {api.symbols[key]}
              </option>
            ))}
          </select>
        </InputFeild>

        <InputFeild className="input">
          <label htmlFor="amount">Amount</label>
          <input type="text" id="amount" required />
        </InputFeild>
      </StyledForm>
    </StyledWrapper>
  );
}

export default Form;
