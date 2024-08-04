const express = require('express');
const cors = require('cors');
const axios = require('axios');
const fs = require('fs');

// Create express server
const app = express();
app.use(cors());
app.use(express.json()); 

const EDAMAM_API_ID = '';
const EDAMAM_API_KEY = '';

app.post('/api/search', async (req, res) => {
  const { ingredients } = req.body;
  console.log('Ingredients:', ingredients);
  try {
    const response = await axios.get('https://api.edamam.com/search', {
      params: {
        q: ingredients,
        app_id: EDAMAM_API_ID,
        app_key: EDAMAM_API_KEY,
      },
    });
    
    const recipes = response.data.hits;

    const sortedRecipes = recipes.sort((a, b) => a.recipe.calories - b.recipe.calories);
    // console.log(sortedRecipes);

    const nutrientValues = (totalNutrients) => {
      let result = [];
      for (let nutrient in totalNutrients) {
        const quantity = Math.floor(totalNutrients[nutrient]['quantity']*100)/100;
        result.push(totalNutrients[nutrient]['label'] + ": " +  quantity + " " + totalNutrients[nutrient]['unit']);
      }
      return result;
    }

    const result = sortedRecipes.slice(0, 3).map(r => ({
      name: r.recipe.label,
      calories: Math.floor(r.recipe.calories*100)/100,
      image: r.recipe.image,
      nutrients: nutrientValues(r.recipe.totalNutrients),
    }))

    // Read data from db.json without endpoint
    const dbJsonData = JSON.parse(fs.readFileSync('db.json', 'utf-8'));
    console.log(dbJsonData);

    dbJsonData.queries.push({
      ingredients,
      result
    })

    // Write the data into the JSON file
    fs.writeFile('db.json', JSON.stringify(dbJsonData), err => {
      if(err) throw err;
      console.log("New data added");
    })
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