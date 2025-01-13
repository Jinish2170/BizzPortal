import React, { useState, useEffect } from 'react';
import { Button, List, ListItem, ListItemText } from '@mui/material';

export default function Documents() {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    fetch('/api/documents')
      .then(response => response.json())
      .then(data => setDocs(data));
  }, []);

  const handleUpload = () => {
    // Mock upload
    const newDoc = { id: docs.length + 1, name: 'NewFile.docx', uploadedBy: 'Admin', uploadedOn: '2025-02-01' };
    setDocs([...docs, newDoc]);
  };

  return (
    <>
      <h2>Documents</h2>
      <Button variant="contained" onClick={handleUpload}>Upload Document</Button>
      <List>
        {docs.map(doc => (
          <ListItem key={doc.id}>
            <ListItemText primary={doc.name} secondary={`Uploaded by ${doc.uploadedBy}`} />
          </ListItem>
        ))}
      </List>
    </>
  );
}