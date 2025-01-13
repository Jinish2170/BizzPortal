import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';

export default function Suppliers() {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    fetch('/api/suppliers')
      .then(response => response.json())
      .then(data => setSuppliers(data));
  }, []);

  return (
    <>
      <h2>Suppliers</h2>
      <Button variant="contained">Add Supplier</Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Contact</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {suppliers.map(s => (
            <TableRow key={s.id}>
              <TableCell>{s.name}</TableCell>
              <TableCell>{s.contact}</TableCell>
              <TableCell>{s.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}