// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.get('/', (req, res) => {
    res.send('Hello, MERN Stack!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});