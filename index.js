const express = require('express');
const cors = require('cors');
const axios = require('axios');
const fs = require('fs');

// Create express server
const app = express();
app.use(cors());
app.use(express.json()); 
// app.use(axios);

const EDAMAM_API_ID = '805a07f7';
const EDAMAM_API_KEY = '48484be0535a5017a5e879330aa66712';

app.get('/api', (req, res) => {
  res.send('Hello from server!');
})

// Endpoint to read data from db.json
app.get('/getJSON', function(req, res){
  fs.readFile(__dirname + "/" + "db.json", 'utf8', function(err, data){
      // console.log(data);
      res.end(data); 
  });
})


app.post('/api/search', async (req, res) => {
  const { keywords } = req.body;
  console.log('Keywords:', keywords);
  try {
    const response = await axios.get('https://api.edamam.com/search', {
      params: {
        q: keywords,
        app_id: EDAMAM_API_ID,
        app_key: EDAMAM_API_KEY,
      },
    });
    
    const recipes = response.data.hits;

    const sortedRecipes = recipes.sort((a, b) => a.recipe.calories - b.recipe.calories);
    console.log(sortedRecipes);

    const result = sortedRecipes.slice(0, 3).map(r => ({
      name: r.recipe.label,
      calories: Math.floor(r.recipe.calories*100)/100
    }))

    // Read data from db.json without endpoint
    const dbJsonData = JSON.parse(fs.readFileSync('db.json', 'utf-8'));
    console.log(dbJsonData);

    dbJsonData.queries.push({
      keywords,
      result
    })

    // Write the data into the JSON file
    fs.writeFile('db.json', JSON.stringify(dbJsonData), err => {
      // error checking
      if(err) throw err;

      console.log("New data added");
    })

    console.log(dbJsonData);

    res.json(result);
  } catch (error) {
    console.log(error)
  }
});


// Start listening on env.port
const PORT = process.env.PORT || 8080;  
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});