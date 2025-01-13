import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, LinearProgress } from '@mui/material';

export default function Budgets() {
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    fetch('/api/budgets')
      .then(response => response.json())
      .then(data => setBudgets(data));
  }, []);

  return (
    <>
      <h2>Budgets</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Spent</TableCell>
            <TableCell>Remaining</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {budgets.map(b => {
            const remaining = b.total - b.spent;
            const percent = (b.spent / b.total) * 100;
            return (
              <TableRow key={b.id}>
                <TableCell>{b.name}</TableCell>
                <TableCell>{b.total}</TableCell>
                <TableCell>{b.spent}</TableCell>
                <TableCell>
                  {remaining}
                  <LinearProgress variant="determinate" value={percent} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}