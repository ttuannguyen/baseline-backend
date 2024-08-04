# Foodie 

## Requirements
* Node.js
* npm (Node Package Manager)
* json-server (for mock JSON database)

### Installation

Install dependencies: `npm install`
Install json-server globally: `npm install -g json-server`


Running the server:
To run the Express server: `npm run dev`
(Note: the server will run on port 8080)
To run the mock JSON server: `json-server --watch db.json --port 3001`

### Endpoint
POST /api/search
Description: Fetches recipes from the Edamam API based on the provided keyword, sorts them by calories, and stores the search results in db.json

### Configuration
Replace the placeholders in the server code (in index.js file) with your Edamam API credentials:
const EDAMAM_API_ID = 'your-app-id';
const EDAMAM_API_KEY = 'your-app-key';