const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection
const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(process.env.DATABASE_URL, dbOptions)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Sample Route
app.get('/api/recommendations', (req, res) => {
    res.json({ message: 'Recommendations will be here' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});