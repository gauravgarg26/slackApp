const { getRandomHeadline } = require('../services/newsService');

// Handle the slash command interaction
exports.handleSlashCommand = async (req, res) => {
  try {
    // Retrieve a random news headline using the newsService module
    const randomHeadline = await getRandomHeadline();

    // Send a JSON response(in block kit message) to Slack containing the random headline
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
};
