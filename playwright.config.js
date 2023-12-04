import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  expect: {
    timeout: 10 * 1000
  },

  reporter: [['html', { outputFolder: 'reports/playwright-report' }]],
  
  use: {
    baseURL: 'https://www.google.com/maps',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },

  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        locale: 'en-GB'
      }
    }
  ]
});

