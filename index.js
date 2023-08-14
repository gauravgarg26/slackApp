const express = require('express');
const bodyParser = require('body-parser');
const slashCommandsController = require('./src/controllers/slashCommand');

// Create an Express app instance
const app = express();
const port = process.env.PORT || 3000;

// Configure middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Handle the slash command to get a random news headline. Used POST because slack only make POST request.
app.post('/randomheadline', slashCommandsController.handleSlashCommand);

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});