const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Route for the /api/organizer/events/:organizerId endpoint
app.get('/api/organizer/events/:organizerId', (req, res) => {
  const organizerId = req.params.organizerId;

  // Assume there is a fictional list of events
  const events = [
    {
      eventId: "1",
      organizerId: "1",
      eventType: "Concert",
      location: "Location A",
      venue: "Arena XYZ",
      showName: "Show 1",
      time: "12:00 PM",
      date: "2024-02-01",
      totalTickets: 100,
      ticketCost: 20,
      availableTickets: 50,
    },
    // Add more events as needed
  ];

  // Filter events for the organizer with the provided ID
  const organizerEvents = events.filter(event => event.organizerId === organizerId);

  res.json({ events: organizerEvents });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
