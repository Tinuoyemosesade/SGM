const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Process donation
router.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency = 'ngn' } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Convert to kobo
      currency: currency,
      metadata: {
        donation_type: req.body.donationType || 'general'
      }
    });

    res.json({
      clientSecret: paymentIntent.client_secret
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get donation statistics (admin only)
router.get('/stats', async (req, res) => {
  try {
    // This would typically fetch from a donations database
    // For now, return mock data
    res.json({
      totalDonations: 0,
      monthlyDonations: 0,
      totalDonors: 0
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
