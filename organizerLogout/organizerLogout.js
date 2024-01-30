const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // or the port of your choice

// Middleware to parse the request body as JSON
app.use(bodyParser.json());

// Route for the /api/organizer/logout endpoint
app.post('/api/organizer/logout', (req, res) => {
  // Check if the Authorization header is present
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Authorization token missing' });
  }

  // Return a successful response
  return res.json({ message: 'Logout successful' });
});

// Start the server on the specified port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


