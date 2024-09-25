const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');

// Importing the sendData function
const sendData = require('./data');

app.use(express.json());
app.use(cors());

// Logging middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next();
});

// Root route: just return a status message
app.get('/', (req, res) => {
  res.json({ message: 'Server is working!' });
});

// To get all college details
app.get('/getcollegedetails', (req, res) => {
    const collegeDetails = sendData();
    res.json({ data: collegeDetails });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
