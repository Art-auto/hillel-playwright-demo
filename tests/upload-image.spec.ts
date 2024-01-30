import { test, expect } from '@playwright/test'
import { ProfilePage } from './POM/profile.page'

test('test', async ({ page }) => {
  const profilePage = new ProfilePage(page)

  await profilePage.open()
  await profilePage.editProfileButton.click()
  await profilePage.setInputFiles('fixtures/logo.jpg')
  await profilePage.saveButton.click()
  await expect(profilePage.successPopup).toBeVisible()
})
