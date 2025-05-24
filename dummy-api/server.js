const express = require('express');
const app = express();
const PORT = 3000;

// Dummy data
const products = [
  { id: 1, name: "Red Blazer", price: 7999 },
  { id: 2, name: "Blue Jeans", price: 2999 },
  { id: 3, name: "White Sneakers", price: 4999 },
];

const users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
];

// Middlewares
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to Dummy API');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  product ? res.json(product) : res.status(404).json({ message: "Product not found" });
});

app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  user ? res.json(user) : res.status(404).json({ message: "User not found" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
