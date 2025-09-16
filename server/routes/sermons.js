const express = require('express');
const router = express.Router();
const Sermon = require('../models/Sermon');

// Get all sermons
router.get('/', async (req, res) => {
  try {
    const sermons = await Sermon.find().sort({ date: -1 });
    res.json(sermons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single sermon
router.get('/:id', async (req, res) => {
  try {
    const sermon = await Sermon.findById(req.params.id);
    if (!sermon) {
      return res.status(404).json({ message: 'Sermon not found' });
    }
    
    // Increment views
    sermon.views += 1;
    await sermon.save();
    
    res.json(sermon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new sermon (admin only)
router.post('/', async (req, res) => {
  try {
    const sermon = new Sermon(req.body);
    await sermon.save();
    res.status(201).json(sermon);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update sermon (admin only)
router.put('/:id', async (req, res) => {
  try {
    const sermon = await Sermon.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!sermon) {
      return res.status(404).json({ message: 'Sermon not found' });
    }
    res.json(sermon);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete sermon (admin only)
router.delete('/:id', async (req, res) => {
  try {
    const sermon = await Sermon.findByIdAndDelete(req.params.id);
    if (!sermon) {
      return res.status(404).json({ message: 'Sermon not found' });
    }
    res.json({ message: 'Sermon deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
