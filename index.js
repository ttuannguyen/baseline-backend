const express = require('express');
const cors = require('cors');

// Create express server
const app = express();

app.use(cors())

app.get('/api', (req, res) => {
    res.send('hello from server!');
})

app.post('/api/search', (req, res) => {
    res.json({'message': 'form submitted'})
})


// Start listening on env.port
const PORT = process.env.PORT || 8080;  
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});