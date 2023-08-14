const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Handle slash command
app.get('/randomheadline', async (req, res) => {
  try {
    // News API configuration
    const apiKey = '47a8b33a9db34017bd2bb6e3259c9ff8';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    // Call News API
    const response = await axios.get(apiUrl);

    // Extract random news headline
    const articles = response.data.articles;
    const randomIndex = Math.floor(Math.random() * articles.length);
    const randomHeadline = articles[randomIndex].title;

    // Respond to Slack with a Block Kit message
    res.json({
      response_type: 'in_channel',
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `*Random News Headline:*\n${randomHeadline}`,
          },
        },
      ],
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('An error occurred.');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
