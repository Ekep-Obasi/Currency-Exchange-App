import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import React from 'react';
import data from '../../data/currencies.json';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`;

function OurCurrencies() {
  return (
    <StyledWrapper>
      {Object.keys(data.symbols).map((key) => (
        <Typography value={key} key={key}>
          <bold>{key}</bold> | {data.symbols[key]}
        </Typography>
      ))}
    </StyledWrapper>
  );
}

export default OurCurrencies;
