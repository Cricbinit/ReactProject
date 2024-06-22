const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

let data = [
  { id: 1, text: 'Item 1' },
  { id: 2, text: 'Item 2' },
];

// Get all items
app.get('/api/items', (req, res) => {
  res.json(data);
});

// Get a single item by ID
app.get('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = data.find((item) => item.id === id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

// Add a new item
app.post('/api/items', (req, res) => {
  const newItem = req.body;
  newItem.id = data.length + 1;
  data.push(newItem);
  res.status(201).json(newItem);
});

// Update an existing item
app.put('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedItem = req.body;
  data = data.map((item) => (item.id === id ? { ...item, ...updatedItem } : item));
  res.json(updatedItem);
});

// Delete an item
app.delete('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  data = data.filter((item) => item.id !== id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
