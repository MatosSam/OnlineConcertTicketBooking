const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // or the port of your choice

app.use(bodyParser.json());

// Route for the /api/users/:userId endpoint (NEW ENDPOINT)
app.delete('/api/users/:userId', (req, res) => {
  const userId = req.params.userId;

  // Assume there is a fictional list of users
  const users = [
    { userId: '1', name: 'User 1' },
    { userId: '2', name: 'User 2' },
    // ... other users ...
  ];

  // Find the index of the user in the array
  const userIndex = users.findIndex(user => user.userId === userId);

  if (userIndex !== -1) {
    // Remove the user from the array
    users.splice(userIndex, 1);

    res.json({ success: true, message: 'User successfully deleted' });
  } else {
    res.json({ success: false, message: 'User not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

