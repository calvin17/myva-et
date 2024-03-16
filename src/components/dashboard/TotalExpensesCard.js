import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const TotalExpensesCardContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    height: '250px',
  },
  [theme.breakpoints.down('xs')]: {
    height: '100px',
  },
}));

export default function TotalExpensesCard() {
  return <TotalExpensesCardContainer sx={{ px: 2, py: 3 }}>Total Expenses Card</TotalExpensesCardContainer>;
}
