const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Welcome message
app.get('/', (req, res) => {
    res.send('Welcome to the Simple API!');
});

// Server listening on specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
// In-memory user storage
let users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];

// GET request to fetch users
app.get('/api/users', (req, res) => {
    res.json(users);
});

// POST request to add a new user
app.post('/api/users', (req, res) => {
    const { name } = req.body;

    // Error handling for missing name
    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }

    // Add the new user
    const newUser = { id: users.length + 1, name };
    users.push(newUser);
    res.status(201).json(newUser);
});
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Welcome message
app.get('/', (req, res) => {
    res.send('Welcome to the Simple API!');
});

// In-memory user storage
let users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];

// GET request to fetch users
app.get('/api/users', (req, res) => {
    res.json(users);
});

// POST request to add a new user
app.post('/api/users', (req, res) => {
    const { name } = req.body;

    // Error handling for missing name
    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }

    // Add the new user
    const newUser = { id: users.length + 1, name };
    users.push(newUser);
    res.status(201).json(newUser);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
- **GET request for users**:
  ```bash
  curl http://localhost:3000/api/users
  ```

- **POST request to add a user**:
  bash
  curl -X POST http://localhost:3000/api/users -H "Content-Type: application/json" -d '{"name": "Charlie"}'
 

/*This simple API will allow you to fetch users and add new users while handling errors for missing required fields.