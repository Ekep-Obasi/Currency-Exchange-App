/* eslint-disable no-alert */
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
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';
import api from '../../api';
import data from '../../data/currencies.json';
import { CurrencyContext } from '../../Context/Context';
import tokens from '../../theme';

function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const {
    wallet,
    defaultCurrency,
    sum,
    setDefaultCurrrency,
    rates,
    setRates,
    setSum,
  } = useContext(CurrencyContext);

  console.log('Component Rendered');

  useEffect(() => {
    api.getRates(defaultCurrency).then((res) => setRates(res.results));

    setSum(0);
    wallet.forEach(({ amount, currency }) => {
      setSum((prev) => prev + amount / rates[currency]);
    });
  }, [defaultCurrency, rates[defaultCurrency]]);

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
            {parseFloat(sum).toFixed(2)}
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

function StatBox({ title, subtitle, icon, increase, accountID, accountName }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = React.useState(false);
  const [transfer, setTransfer] = React.useState();
  const { wallet, setWallet, rates, defaultCurrency } =
    useContext(CurrencyContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (transferFrom, transferTo, amount) => {
    const newWallet = wallet;
    const to = newWallet[transferTo].currency;

    if (
      amount <= newWallet[transferFrom].amount &&
      transferTo !== transferFrom
    ) {
      newWallet[transferFrom].amount -= amount;
      newWallet[transferTo].amount +=
        (amount / rates[defaultCurrency]) * rates[to];
      setWallet([...newWallet]);
    } else if (transferFrom === transferTo) {
      alert('Cannot Deposit to same account');
    } else {
      alert('Account Balance Exceeded');
    }
  };

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
            <IconButton onClick={handleClickOpen}>
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
        <Box>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
              Transfer Money from your {accountName} account
            </DialogTitle>
            <DialogContent>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit(
                    accountID,
                    transfer,
                    +e.target.elements.transferAmount.value
                  );
                }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <TextField
                  fullWidth
                  id="transferAmount"
                  label="Enter amount"
                  variant="filled"
                  type="number"
                  name="currency"
                  sx={{ gridColumn: 'span 2' }}
                  required
                />

                <FormControl fullWidth>
                  <InputLabel>Transfer to</InputLabel>
                  <Select
                    fullWidth
                    label="Deposit to"
                    required
                    onChange={(e) => setTransfer(e.target.value)}
                  >
                    {wallet.map(({ currency }, index) => (
                      <MenuItem key={currency} value={index}>
                        {currency}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Box>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="success"
                  >
                    Done
                  </Button>
                </Box>
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>

      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5">{subtitle}</Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase} {title}
        </Typography>
      </Box>
    </Box>
  );
}

function Wallet() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { wallet } = useContext(CurrencyContext);

  if (wallet.length === 0) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        gap="25px"
        p={7}
      >
        <Typography variant="h2">No Accounts Yet</Typography>
        <Link style={{ textDecoration: 'none' }} to="/exchange">
          <Button size="large" variant="contained" color="success">
            Deposit a Currency
          </Button>
        </Link>
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      gap=" 25px 15px"
      maxWidth="100%"
      flexWrap="wrap"
      paddingY={1}
    >
      {wallet.map(({ currency, amount }, index) => (
        <StatBox
          key={currency}
          accountID={index}
          accountName={currency}
          title={currency}
          subtitle="Current Amount"
          icon={
            <CurrencyBitcoinIcon
              sx={{ color: colors.greenAccent[600], fontSize: '65px' }}
            />
          }
          increase={parseFloat(amount).toFixed(2)}
        />
      ))}
    </Box>
  );
}
