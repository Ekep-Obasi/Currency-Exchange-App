/* eslint-disable import/no-named-as-default */
/* eslint-disable no-console */
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './scenes/dashboard/DashBoard';
import Exchange from './scenes/dashboard/ExchangePage.jsx/Exchange';
import FAQpage from './scenes/dashboard/FAQ/FAQpage';
import Profiles from './scenes/dashboard/Profile/Profiles';
import Sidebar from './scenes/global/Sidebar';
import TopBar from './scenes/global/Topbar';
import { ColorModeContext, useMode } from './theme';
import { CurrencyProvider } from './Context/Context';
import ExchangeCurrencies from './scenes/ExchangeCurrencies/ExchangeCurrencies';
import OurCurrencies from './scenes/Our Currencies/OurCurrencies';

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [rates, setRates] = useState({});
  const [sum, setSum] = useState(0);
  const [defaultCurrency, setDefaultCurrrency] = useState('USD');
  const [wallet, setWallet] = useState([
    { currency: 'USD', amount: 100 },
    { currency: 'EUR', amount: 500 },
    { currency: 'XAF', amount: 10000 },
  ]);

  const [walletCurrency, setWalletCurrency] = useState('');

  return (
    <CurrencyProvider
      value={{
        wallet,
        setWallet,
        walletCurrency,
        setWalletCurrency,
        defaultCurrency,
        setDefaultCurrrency,
        sum,
        setSum,
        rates,
        setRates,
      }}
    >
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar isSidebar={isSidebar} />
            <main className="content">
              <TopBar setIsSidebar={setIsSidebar} />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/exchange" element={<Exchange />} />
                <Route path="/faq" element={<FAQpage />} />
                <Route path="/form" element={<Profiles />} />
                <Route path="/list" element={<OurCurrencies />} />
                <Route
                  path="/exchangeCurrencies"
                  element={<ExchangeCurrencies />}
                />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </CurrencyProvider>
  );
}

export default App;
