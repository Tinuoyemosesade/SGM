const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  category: {
    type: String,
    enum: ['Service', 'Conference', 'Workshop', 'Outreach', 'Youth', 'Children', 'Prayer'],
    default: 'Service'
  },
  isRecurring: {
    type: Boolean,
    default: false
  },
  recurringPattern: {
    type: String,
    enum: ['weekly', 'monthly', 'yearly']
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);
