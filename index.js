const express = require('express');

// Create express server
const app = express();
const cors = require('cors');

app.use(cors())

app.get('/', (req, res) => {
    res.send('hello from server!');
})


// Start listening on env.port
const PORT = process.env.PORT || 8080;  
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});