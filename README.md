# Foodie 

## Requirements
* Node.js
* npm (Node Package Manager)
* json-server (for mock JSON database)

### Installation

Install dependencies: `npm install`
Install json-server globally: `npm install -g json-server`

Running the servers:

- To run the Express server: `npm run dev`
(Note: the server will run on port 8080)

- To run the mock JSON server: `json-server --watch db.json --port 3001`

### Endpoint
POST /api/search
Description: Fetches recipes from the Edamam API based on the provided keyword, sorts them by calories, and stores the search results in db.json

### Configuration
Replace the placeholders in the server code (in index.js file) with your Edamam API credentials:
const EDAMAM_API_ID = 'app-id';
const EDAMAM_API_KEY = 'app-key';

To obtain Edamam API credentials:
- After signing up and logging in, you will be directed to your dashboard.
- Choose the free Recipe Search API and create a new application by providing the necessary details like the name and description of the app.
- Once the app has been created, Edamam will provide you with an app_id and an app_key.