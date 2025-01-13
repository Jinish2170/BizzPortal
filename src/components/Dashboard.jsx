
import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

export default function Dashboard() {
  return (
    <Grid container spacing={2} style={{ padding: '1rem' }}>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Total Suppliers</Typography>
            {/* Mock stats */}
            <Typography variant="h4">10</Typography>
          </CardContent>
        </Card>
      </Grid>
      {/* ...add more cards or chart placeholders... */}
    </Grid>
  );
}