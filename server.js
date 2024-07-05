const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/jackpots', async (req, res) => {
    const apiUrl = 'https://api-dk12.pragmaticplay.net/IntegrationService/v3/JackpotFeeds/extended/jackpots/?login=samsara_ambassadori&currency=GEL&hash=d4fd90d5f376bc961e4c8fb795557153';
    
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Error fetching data from API: ${response.statusText}`);
        }
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server is running on port ${PORT}`);
});
