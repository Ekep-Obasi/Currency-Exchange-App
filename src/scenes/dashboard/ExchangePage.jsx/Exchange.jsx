/* eslint-disable no-console */
import {
  TextField,
  Box,
  Button,
  Typography,
  Select,
  MenuItem,
} from '@mui/material';
import React, { useState } from 'react';
import data from '../../../data/currencies.json';

function Exchange() {
  const [wallet, setWallet] = useState([]);
  const [depatureCurrency, setDepartureCurrency] = useState('USD');
  const [arrivalCurrency, setArrivalCurrency] = useState('KES');

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
    console.log(wallet);
  };

  return (
    <div>
      <Box padding={5}>
        <Box paddingY={2}>
          <Typography variant="h1">Currency Converter</Typography>
          <Typography variant="h4">
            Covert from one currency to another
          </Typography>
        </Box>

        <Box display="flex" flexDirection="column">
          <TextField
            fullWidth
            label="Enter amout"
            variant="filled"
            type="text"
            name="currency"
            sx={{ gridColumn: 'span 2' }}
          />
          <form onSubmit={handleSubmit}>
            <Box display="flex" sx={{ flexDirection: 'column', gap: '10px' }}>
              <Box>
                <Select
                  fullWidth
                  label="Choose Default Currency"
                  onChange={(e) => setArrivalCurrency(e.target.value)}
                  required
                >
                  {Object.keys(data.symbols).map((key) => (
                    <MenuItem value={key}>
                      <bold>{key}</bold> | {data.symbols[key]}
                    </MenuItem>
                  ))}
                </Select>
              </Box>

              <Box>
                <Select
                  fullWidth
                  label="from"
                  onChange={(e) => setDepartureCurrency(e.target.value)}
                  required
                >
                  {Object.keys(data.symbols).map((key) => (
                    <MenuItem value={key}>
                      <bold>{key}</bold> | {data.symbols[key]}
                    </MenuItem>
                  ))}
                </Select>
              </Box>

              <Box>
                <Select
                  fullWidth
                  label="to"
                  onChange={(e) => setArrivalCurrency(e.target.value)}
                  required
                >
                  {Object.keys(data.symbols).map((key) => (
                    <MenuItem value={key}>
                      <bold>{key}</bold> | {data.symbols[key]}
                    </MenuItem>
                  ))}
                </Select>
              </Box>

              <Button color="success" variant="contained">
                Enter
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </div>
  );
}

export default Exchange;
