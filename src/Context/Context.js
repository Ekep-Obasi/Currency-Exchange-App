import { createContext } from 'react';

const CurrencyContext = createContext();

const CurrencyProvider = CurrencyContext.Provider;

export { CurrencyContext, CurrencyProvider };
