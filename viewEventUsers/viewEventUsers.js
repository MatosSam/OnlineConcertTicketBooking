const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Route for the /api/user/events endpoint
app.get('/api/user/events', (req, res) => {
 
  // Assume there is a fictional list of events
  const events = [
    {
      eventId: "1",
      eventType: "Concert",
      location: "Location A",
      venue: "Arena XYZ",
      showName: "Show 1",
      time: "12:00 PM",
      date: "2024-02-01",
      totalTickets: 100,
      ticketCost: 20,
    },
    // Add more events as needed
  ];

  res.json({ events });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
