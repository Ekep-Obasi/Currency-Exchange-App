import React from 'react';
import {
  Box,
  TextField,
  Button,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import tokens from '../../../theme';

function Profiles() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Stack padding={5}>
      <Box paddingY={2}>
        <Typography variant="h1">CREATE CONTACT</Typography>
        <Typography variant="h4" sx={{ color: colors.greenAccent[100] }}>
          Create a new User
        </Typography>
      </Box>
      <Box display="flex" gap={5}>
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="First Name"
          name="firstName"
          sx={{ gridColumn: 'span 2' }}
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="SurName"
          name="SurName"
          sx={{ gridColumn: 'span 2' }}
        />
      </Box>
      <Box display="flex" gap={5} flexDirection="column" paddingY={5}>
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Occupation"
          name="occupation"
          sx={{ gridColumn: 'span 2' }}
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Email"
          name="email"
          sx={{ gridColumn: 'span 2' }}
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Address"
          name="Address"
          sx={{ gridColumn: 'span 2' }}
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Contact"
          name="contact"
          sx={{ gridColumn: 'span 2' }}
        />
      </Box>
      <Box display="flex" justifyContent="center">
        <Button color="error" variant="contained" paddingX={25}>
          Create New User
        </Button>
      </Box>
    </Stack>
  );
}

export default Profiles;
