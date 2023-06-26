/* eslint-disable no-console */
import {
  TextField,
  Box,
  Button,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { useContext } from 'react';
import { CurrencyContext } from '../../../Context/Context';
import data from '../../../data/currencies.json';
import api from '../../../api';

function Exchange() {
  const {
    setWallet,
    walletCurrency,
    setDefaultCurrrency,
    defaultCurrency,
    setWalletCurrency,
    setSum,
  } = useContext(CurrencyContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = e.target.elements.amount.value;

    api
      .convertCurrency(defaultCurrency, walletCurrency, amount)
      .then((res) => setSum((prev) => prev + res.result));

    setWallet((value) => [
      ...value,
      {
        amount,
        currency: walletCurrency,
      },
    ]);
  };

  return (
    <div>
      <Box padding={5}>
        <Box paddingY={5}>
          <Typography variant="h1">Setup Your Wallet</Typography>
          <Typography variant="h4">Setup your accounts</Typography>
        </Box>

        <Box display="flex" flexDirection="column">
          <form onSubmit={handleSubmit}>
            <Box display="flex" sx={{ flexDirection: 'column', gap: '20px' }}>
              <FormControl>
                <InputLabel>Choose Default currency</InputLabel>
                <Select
                  fullWidth
                  label="Choose Default Currency"
                  onChange={(e) => setDefaultCurrrency(e.target.value)}
                  value={defaultCurrency}
                  required
                >
                  {Object.keys(data.symbols).map((key) => (
                    <MenuItem value={key} key={key}>
                      <bold>{key}</bold> | {data.symbols[key]}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl>
                <InputLabel>Wallet Currency</InputLabel>
                <Select
                  fullWidth
                  label="to"
                  onChange={(e) => setWalletCurrency(e.target.value)}
                  required
                >
                  {Object.keys(data.symbols).map((key) => (
                    <MenuItem value={key} key={key}>
                      <bold>{key}</bold> | {data.symbols[key]}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                fullWidth
                id="amount"
                label="Enter amount"
                variant="filled"
                type="number"
                name="currency"
                sx={{ gridColumn: 'span 2' }}
                required
              />

              <Button type="submit" color="success" variant="contained">
                + Create Wallet
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </div>
  );
}

export default Exchange;
