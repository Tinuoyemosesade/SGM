const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Test routes
app.get('/', (req, res) => {
  res.json({ message: 'Seat of God Ministry API is running!' });
});

app.get('/api/sermons', (req, res) => {
  res.json([
    {
      id: 1,
      title: "Walking in Faith: Trusting God's Plan",
      speaker: "Pastor Michael Adebayo",
      date: "2024-01-14",
      description: "In this powerful message, we explore what it means to truly walk in faith and trust God's plan for our lives.",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1515378791036-0648a814c963?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Sunday Service",
      duration: "45:30",
      views: 1250
    },
    {
      id: 2,
      title: "The Power of Prayer in Difficult Times",
      speaker: "Pastor Sarah Johnson",
      date: "2024-01-10",
      description: "Discover how prayer can be your greatest strength during life's most challenging moments.",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Prayer Meeting",
      duration: "38:15",
      views: 890
    }
  ]);
});

app.get('/api/events', (req, res) => {
  res.json([
    {
      id: 1,
      title: "Sunday Morning Service",
      description: "Join us for our weekly Sunday morning worship service.",
      date: "2024-01-21",
      time: "10:30 AM",
      location: "Main Sanctuary",
      category: "Service",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      attendees: 250
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`Seat of God Ministry API server is running on port ${PORT}`);
});
