const express = require('express');
const path = require('path');
const app = express();
const port = process.env.BACKEND_PORT || 3001;

const suppliers = [
  { id: 1, name: 'ABC Supplies', contact: 'abc@example.com', status: 'Active' },
  { id: 2, name: 'XYZ Traders', contact: 'xyz@example.com', status: 'Inactive' }
];

const budgets = [
  { id: 1, name: 'Marketing Budget', total: 50000, spent: 30000 },
  { id: 2, name: 'Operations Budget', total: 75000, spent: 45000 }
];

const documents = [
  { id: 1, name: 'Quarterly_Report.pdf', uploadedBy: 'Admin', uploadedOn: '2025-01-01' },
  { id: 2, name: 'Budget_2025.xlsx', uploadedBy: 'Admin', uploadedOn: '2025-01-05' }
];

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/suppliers', (req, res) => {
  res.json(suppliers);
});

app.get('/api/budgets', (req, res) => {
  res.json(budgets);
});

app.get('/api/documents', (req, res) => {
  res.json(documents);
});

// Serve the React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
