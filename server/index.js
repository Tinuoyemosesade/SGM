const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5002;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('uploads'));

// Routes
app.use('/api/sermons', require('./routes/sermons'));
app.use('/api/events', require('./routes/events'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/donations', require('./routes/donations'));
app.use('/api/admin', require('./routes/admin'));

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/seat-of-god-ministry', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => {
  console.log('MongoDB connection error:', err);
  console.log('Server will continue without database connection');
});

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Church Website API is running!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
