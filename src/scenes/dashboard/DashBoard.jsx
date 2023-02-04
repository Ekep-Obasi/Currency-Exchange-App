/* eslint-disable react/prop-types */
import { Typography, Box, useTheme } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CurrencyFrancIcon from '@mui/icons-material/CurrencyFranc';
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol';
import React from 'react';
import tokens from '../../theme';

function StatBox({ title, subtitle, icon, increase }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      width="100%"
      m="0 30px"
      sx={{ backgroundColor: colors.primary[400] }}
      p="10px 15px"
      borderRadius={2}
    >
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
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

function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box p={5}>
      <Box>
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
          <Box>
            <Typography
              variant="h5"
              sx={{ color: colors.greenAccent[600], fontSize: '65px' }}
            >
              0 XAF
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box display="flex" paddingY={5}>
        <StatBox
          title="USD"
          subtitle="Current Amount"
          icon={
            <AttachMoneyIcon
              sx={{ color: colors.greenAccent[600], fontSize: '65px' }}
            />
          }
          increase="$25,000,000"
          progress="200"
        />
        <StatBox
          title="XAF"
          subtitle="Current Amount"
          icon={
            <CurrencyFrancIcon
              sx={{ color: colors.greenAccent[600], fontSize: '65px' }}
            />
          }
          increase="$25,000,000"
          progress="200"
        />
        <StatBox
          title="EURO"
          subtitle="Current Amount"
          icon={
            <EuroSymbolIcon
              sx={{ color: colors.greenAccent[600], fontSize: '65px' }}
            />
          }
          increase="$25,000,000"
          progress="200"
        />
      </Box>
    </Box>
  );
}

export default Dashboard;
