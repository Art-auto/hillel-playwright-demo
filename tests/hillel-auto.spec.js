import { test, expect } from '@playwright/test'

test.describe.only('Hillel auto', () => {

  test('Should register', async ({page}) => {
    const emailInput = page.locator('#signupEmail')
    const passwordInput = page.locator('input[name="password"]')
    const repeatPasswordInput = page.locator('input[name="repeatPassword"]')

    await page.goto('https://qauto.forstudy.space/')
    await page.locator('button.btn-primary').click()
    await page.locator('#signupName').fill('Artem')
    await expect(page.locator('#signupName')).toHaveValue('Artem')
    await page.locator('#signupLastName').fill('Test')
    await emailInput.fill('test+321321312@test.com')
    await expect(emailInput).toHaveValue('test+321321312@test.com')
    await passwordInput.fill('P@ssword1')
    await repeatPasswordInput.fill('P@ssword1')
    await page.locator('button', {hasText: "Register"}).click()
    await page.pause()
  })
})
