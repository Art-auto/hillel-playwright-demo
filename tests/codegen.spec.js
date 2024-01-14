import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.locator('#signupName').click();
  await page.locator('#signupName').fill('test');
  await page.locator('#signupLastName').click();
  await page.locator('#signupLastName').fill('hello');
  await page.locator('#signupLastName').press('Tab');
  await page.getByLabel('Name').fill('test@test.com');
  await page.getByLabel('Name').press('Tab');
  await page.getByLabel('Password', { exact: true }).fill('test');
  await page.getByLabel('Password', { exact: true }).press('Tab');
  await page.getByLabel('Re-enter password').fill('test');
  await page.getByLabel('Close').click();
});