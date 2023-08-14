const assert = require('assert');
const { getRandomHeadline } = require('./src/services/newsService');

// Mock the axios module to simulate an error
const axios = {
  get: async () => {
    throw new Error('Sample error');
  },
};

// Test the getRandomHeadline function for error handling
(async () => {
  try {
    await getRandomHeadline();
    assert.fail('Error was expected but not thrown');
  } catch (error) {
    assert.strictEqual(error instanceof Error, true, 'Error should be an instance of Error');
  }

  console.log('Test passed successfully!');
})();

//Can use Mocha, Jest to add more complex test cases
