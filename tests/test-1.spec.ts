import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
  await page.goto('https://playwright.dev');
  const browsersLocator = page.locator('img[alt="Browsers (Chromium, Firefox, WebKit)"]')
  await expect(browsersLocator).toHaveScreenshot('browsers.png', { maxDiffPixels: 100 });
});