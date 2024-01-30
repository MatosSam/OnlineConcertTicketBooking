const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Fictional list of organizers
const organizers = [];

// Route for the /api/organizer/register endpoint
app.post('/api/organizer/register', (req, res) => {
  // Data provided in the request body
  const { organizerName, password, role, email, phone, isActive } = req.body;

  // Logic to check if all required fields are present
  if (!organizerName || !password || !role || !email || !phone) {
    return res.status(400).json({ success: false, message: 'All required fields must be provided' });
  }

  // Logic to check if the organizer is already registered
  if (organizers.find(organizer => organizer.email === email)) {
    return res.status(400).json({ success: false, message: 'Organizer with this email is already registered' });
  }

  // Create a new organizer
  const newOrganizer = {
    organizerName,
    password,
    role,
    email,
    phone,
    isActive: isActive || false,
  };

  // Add the new organizer to the list
  organizers.push(newOrganizer);

  // Respond with success
  res.json({ success: true, message: 'Organizer successfully registered' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
