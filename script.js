const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

// مسار Shodan API
router.get('/shodan', async (req, res) => {
    const { query } = req.query;
    const apiKey = '3eUPKAyjY5nIQS17qJKt8qmdoOS3Fmz1'; // استبدل المفتاح هنا بمفتاح Shodan API الخاص بك

    if (!query) {
        return res.status(400).json({ error: 'Query parameter is required' });
    }

    try {
        const response = await fetch(`https://api.shodan.io/shodan/host/search?key=${apiKey}&query=${query}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
