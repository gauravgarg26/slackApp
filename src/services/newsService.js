// Import necessary modules
const axios = require('axios');
const config = require('../config');

// Fetch a random news headline from the News API
exports.getRandomHeadline = async () => {
  try {
    // Construct the API URL using the configured API key
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${config.newsApiKey}`;

    // Make a GET request to the News API
    const response = await axios.get(apiUrl);
    const articles = response.data.articles;

    // Generate a random index to select a random article
    const randomIndex = Math.floor(Math.random() * articles.length);

    // Return the title of the randomly selected article
    return articles[randomIndex].title;
  } catch (error) {
    // Handle errors and re-throw
    throw error;
  }
};