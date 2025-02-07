const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // This should match your Next.js dev server
    supportFile: false, // Set to `false` if you do not use custom support files
    viewportWidth: 1280,  // Adjust width if needed for your testing
    viewportHeight: 720, // Adjust height if needed for your testing
    reporter: 'mochawesome',  // Use mochawesome for reports
    reporterOptions: {
      reportDir: 'cypress/reports',  // Specify the directory where reports will be saved
      overwrite: false,
      html: false,
      json: true,
    },
  },
});
