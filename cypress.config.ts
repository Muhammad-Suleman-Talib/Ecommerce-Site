const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Ensure this matches your Next.js development server
    supportFile: false, // Remove this if you use custom support files
  },
});
