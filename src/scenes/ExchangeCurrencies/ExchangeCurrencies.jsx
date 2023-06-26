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
  useTheme,
} from '@mui/material';

import { useState } from 'react';
import data from '../../data/currencies.json';
import api from '../../api';
import tokens from '../../theme';

function Exchange() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [state, setState] = useState({});
  const [departureCurrency, setDepartureCurrency] = useState();
  const [arrivalCurrency, setArrivalCurrency] = useState();
  const [result, setResult] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = e.target.elements.amount.value;

    api
      .convertCurrency(departureCurrency, arrivalCurrency, amount)
      .then((res) => setResult(res.result[arrivalCurrency]));

    setState({ amount, departureCurrency, arrivalCurrency });
  };

  return (
    <div>
      <Box padding={5}>
        <Box paddingY={5}>
          <Typography variant="h1">Currency Converter</Typography>
          <Typography variant="h4">
            Covert from one currency to another
          </Typography>
        </Box>

        <Box display="flex" flexDirection="column">
          <form onSubmit={handleSubmit}>
            <Box display="flex" sx={{ flexDirection: 'column', gap: '20px' }}>
              <FormControl>
                <InputLabel>From</InputLabel>
                <Select
                  fullWidth
                  label="to"
                  onChange={(e) => setDepartureCurrency(e.target.value)}
                  value={departureCurrency}
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
                <InputLabel>TO</InputLabel>
                <Select
                  fullWidth
                  label="to"
                  onChange={(e) => setArrivalCurrency(e.target.value)}
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
                CONVERT
              </Button>
            </Box>
            <Box display="flex" justifyContent="center" p={5}>
              <Typography display="flex" gap="5px" variant="h2">
                {state.amount}
                <Typography
                  variant="h2"
                  fontWeight="bold"
                  sx={{ color: colors.greenAccent[600] }}
                >
                  {state.departureCurrency}
                </Typography>
                = {result}
                <Typography
                  variant="h2"
                  fontWeight="bold"
                  sx={{ color: colors.greenAccent[600] }}
                >
                  {state.arrivalCurrency}
                </Typography>
              </Typography>
            </Box>
          </form>
        </Box>
      </Box>
    </div>
  );
}

export default Exchange;
