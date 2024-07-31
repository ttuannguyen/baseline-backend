const express = require('express');
const cors = require('cors');
const axios = require('axios');

// Create express server
const app = express();
app.use(cors());
app.use(axios);

const EDAMAM_API_ID = '805a07f7';
const EDAMAM_API_KEY = '48484be0535a5017a5e879330aa66712';

app.get('/api', (req, res) => {
    res.send('Hello from server!');
})

app.post('/api/search', (req, res) => {
    res.json({'message': 'form submitted'})
})


// Start listening on env.port
const PORT = process.env.PORT || 8080;  
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});