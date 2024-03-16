import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import OverviewCard from '../dashboard/OverviewCard';
import TotalExpensesCard from './TotalExpensesCard';
import AccountInfoCard from './AccountInfoCard';
import IncomeExpenseCard from './IncomeExpenseCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1, px: 2, py: 3 }}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6} md={3}>
          <Item elevation={1}>
            <OverviewCard />
          </Item>
        </Grid>
        <Grid item xs={6} md={3}>
          <Item elevation={1}>
            <OverviewCard />
          </Item>
        </Grid>
        <Grid item xs={6} md={3}>
          <Item elevation={1}>
            <OverviewCard />
          </Item>
        </Grid>
        <Grid item xs={6} md={3}>
          <Item elevation={1}>
            <OverviewCard />
          </Item>
        </Grid>
        <Grid item xs={6} md={12}>
          <Item elevation={1}>
            <TotalExpensesCard />
          </Item>
        </Grid>
        <Grid item xs={6} md={6}>
          <Item elevation={1}>
            <AccountInfoCard />
          </Item>
        </Grid>
        <Grid item xs={6} md={6}>
          <Item elevation={1}>
            <IncomeExpenseCard />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
