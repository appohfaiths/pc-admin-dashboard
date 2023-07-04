import express from 'express';

const app = express();

app.get('/api/getActiveUsers', (req, res) => {

    res.json()
});

export default app;