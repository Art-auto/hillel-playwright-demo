import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('/panel/profile')
  await page.locator('button', {hasText: 'Edit profile'}).click()
  await page.setInputFiles('input#editProfilePhoto', 'fixtures/logo.jpg')
  await page.locator('button', {hasText: 'Save'}).click()
})
