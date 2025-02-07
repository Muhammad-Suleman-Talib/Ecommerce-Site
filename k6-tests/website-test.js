import http from 'k6/http';
import { check, group, sleep } from 'k6';

export let options = {
  vus: 10, // Virtual users
  duration: '1m', // Duration of the test
  thresholds: {
    'http_req_duration': ['p(95)<500'], // 95% of requests should be under 500ms
  },
};

// List of URLs to test
const urls = [
  'http://localhost:3000',             // Home Page
  'http://localhost:3000/about',       // About Page
  'http://localhost:3000/contact',     // Contact Page
  'http://localhost:3000/api/products',// Example API route
  // Add more pages or API routes here
];

export default function () {
  group('Test all website pages', function () {
    
    urls.forEach((url) => {
      let res = http.get(url);

      check(res, {
        'is status 200': (r) => r.status === 200,
        'response time < 500ms': (r) => r.timings.duration < 500,
      });

      sleep(1); // Pause for 1 second between requests
    });
  });
}
