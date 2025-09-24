const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Sample Route
app.get('/api/recommendations', (req, res) => {
    res.json({ message: 'Recommendations will be here' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});