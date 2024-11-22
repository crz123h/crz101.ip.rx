const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

// مسار Shodan API
router.get('/shodan', async (req, res) => {
    const { query } = req.query;
    const apiKey = 'YOUR_SHODAN_API_KEY';
    try {
        const response = await fetch(`https://api.shodan.io/shodan/host/search?key=${apiKey}&query=${query}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;