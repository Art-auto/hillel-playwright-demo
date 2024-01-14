// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Group tests with describe', () => {

  test.beforeAll(async ()=>{
    console.log('before all')
  })
  test.beforeEach(async () => {
    console.log('before each')
  })

  test.afterAll(async ()=>{
    console.log('after all')
  })
  test.afterEach(async ()=>{
    console.log('after each')
    
  })

  test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });
  
  test('get started link', async ({ page }) => {
    await page.goto('https://playwright.dev/');
  
    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();
  
    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });

})

