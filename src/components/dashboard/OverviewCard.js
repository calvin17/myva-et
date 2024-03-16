import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const OverviewCardContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    height: '70px',
  },
  [theme.breakpoints.down('xs')]: {
    height: '50px',
  },
}));

const overviewCardData = [{}];

export default function Dashboard() {
  return <OverviewCardContainer sx={{ px: 2, py: 3 }}>Overview card</OverviewCardContainer>;
}
