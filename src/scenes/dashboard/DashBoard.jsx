/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import {
  Typography,
  Box,
  useTheme,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import MoveUpIcon from '@mui/icons-material/MoveUp';
import React, { useContext, useEffect } from 'react';
import tokens from '../../theme';
import { CurrencyContext } from '../../Context/Context';
import data from '../../data/currencies.json';
// import api from '../../api';

function StatBox({ title, subtitle, icon, increase }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // const { wallet, defaultCurrency, setSum } = useContext(CurrencyContext);

  useEffect(() => {
    console.count('Use Effect Ran');
    // Promise.all(
    //   wallet.map(({ currency, amount }) => {
    //     return api
    //       .convertCurrency(defaultCurrency, currency, amount)
    //       .then(({ result }) => result);
    //   })
    // ).then((values) => {
    //   console.log(...values);
    //   console.log(setSum);
    //   // setSum(values.reduce((a, b) => a + b, 0));
    // });
    // wallet.forEach((el) => {
    //   api
    //     .convertCurrency(defaultCurrency, el.currency, el.amount)
    //     .then((res) => setSum((prev) => prev + res.result))
    //     .finally(() => {
    //       console.count('API response');
    //     });
    // });
  }, []);

  return (
    <Box
      width="25%"
      m="0 30px"
      sx={{ backgroundColor: colors.primary[400], minWidth: '250px' }}
      p="10px 15px"
      borderRadius={2}
    >
      <Box display="flex" justifyContent="space-between">
        <Box width="100%">
          <Box
            width="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            {icon}
            <IconButton>
              <MoveUpIcon
                sx={{ color: colors.greenAccent[600], fontSize: '40px' }}
              />
            </IconButton>
          </Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
      </Box>

      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5">{subtitle}</Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
}

function Wallet() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { wallet } = useContext(CurrencyContext);

  return (
    <Box
      display="flex"
      gap=" 25px 15px"
      maxWidth="100%"
      flexWrap="wrap"
      paddingY={5}
    >
      {wallet.map((item) => (
        <StatBox
          title={item.currency}
          subtitle="Current Amount"
          icon={
            <CurrencyBitcoinIcon
              sx={{ color: colors.greenAccent[600], fontSize: '65px' }}
            />
          }
          increase={item.amount}
        />
      ))}
    </Box>
  );
}

function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { defaultCurrency, sum, setDefaultCurrrency } =
    useContext(CurrencyContext);

  return (
    <Box p={5}>
      <Box paddingY={2}>
        <Typography variant="h1">DASHBOARD</Typography>
        <Typography variant="h4">Welcome to our Website</Typography>
      </Box>

      <Box
        width="95%"
        display="flex"
        justifyContent="space-between"
        sx={{ backgroundColor: colors.primary[400] }}
        m="15px 30px"
        p="10px 15px"
        borderRadius={2}
      >
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <AccountBalanceWalletIcon
              sx={{ color: colors.greenAccent[600], fontSize: '65px' }}
            />
            <Typography variant="h3">Account Balance</Typography>
            <Typography variant="h5">Current Balance</Typography>
          </Box>
          <Typography variant="h1">
            {sum.toFixed(2)}
            <FormControl>
              <InputLabel>UNIT</InputLabel>
              <Select
                size="meduium"
                sx={{ width: '80px', margin: '0 5px' }}
                label="Choose Default Currency"
                value={defaultCurrency}
                onChange={(e) => setDefaultCurrrency(e.target.value)}
                required
              >
                {Object.keys(data.symbols).map((key) => (
                  <MenuItem value={key} key={key}>
                    {key}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Typography>
        </Box>
      </Box>

      <Box paddingY={2}>
        <Typography variant="h2">Wallets</Typography>
        <Typography variant="h4">Your wallets</Typography>
      </Box>
      <Wallet />
    </Box>
  );
}

export default Dashboard;
