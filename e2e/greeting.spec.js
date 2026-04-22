const { test, expect } = require('@playwright/test');

test('user can enter name and see greeting', async ({ page }) => {
  // Open your local HTML file
  await page.goto('file://' + process.cwd() + '/index.html');

  // Interact like a real user
  await page.fill('#nameInput', 'John');
  await page.click('button');

  // Assert result
  await expect(page.locator('#output')).toHaveText('Hello John');
});