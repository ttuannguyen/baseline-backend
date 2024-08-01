const express = require('express');
const cors = require('cors');
const axios = require('axios');

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

app.post('/api/search', async (req, res) => {
  const { keyword } = req.body;
  console.log('Keyword:', keyword);
  try {
    const response = await axios.get('https://api.edamam.com/search', {
      params: {
        q: keyword,
        app_id: EDAMAM_API_ID,
        app_key: EDAMAM_API_KEY,
      },
    });
    
    const recipes = response.data.hits;

    const sortedRecipes = recipes.sort((a, b) => a.recipe.calories - b.recipe.calories);
    console.log(sortedRecipes);

    const result = sortedRecipes.slice(0, 3).map(r => ({
      name: r.recipe.label,
      calories: r.recipe.calories
    }))
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