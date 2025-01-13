
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">Dashboard</Button>
        <Button color="inherit" component={Link} to="/suppliers">Suppliers</Button>
        <Button color="inherit" component={Link} to="/budgets">Budgets</Button>
        <Button color="inherit" component={Link} to="/documents">Documents</Button>
      </Toolbar>
    </AppBar>
  );
}