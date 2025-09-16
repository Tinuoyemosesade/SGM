const mongoose = require('mongoose');

const sermonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  speaker: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  videoUrl: {
    type: String
  },
  audioUrl: {
    type: String
  },
  thumbnail: {
    type: String
  },
  category: {
    type: String,
    enum: ['Sunday Service', 'Bible Study', 'Prayer Meeting', 'Special Event'],
    default: 'Sunday Service'
  },
  duration: {
    type: String
  },
  views: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Sermon', sermonSchema);
