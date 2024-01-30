import { Page, Response, Locator } from '@playwright/test'

export class ProfilePage {
  readonly editProfileButton: Locator

  constructor(private page: Page) {
    this.page = page
    this.editProfileButton = this.page.locator('button', {hasText: 'Edit profile'})
  }

  readonly saveButton = this.page.locator('button', {hasText: 'Save'})
  readonly successPopup = this.page.locator(".alert-success")

  open():Promise<null|Response> {
    return this.page.goto('/panel/profile')
  }

  async setInputFiles(filePath: string | string[]):Promise<void> {
    await this.page.setInputFiles('input#editProfilePhoto', filePath)
  }
}