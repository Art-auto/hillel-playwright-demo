import { test, expect } from '@playwright/test'

test.describe('Hillel auto', () => {

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
    // await page.locator('button', {hasText: "Register"}).click()
    // await page.locator('button:text("Register")').click()
    await page.getByText('Register').click()
  })

  test('Should open instruction', async ({page, context}) => {
    await page.goto('https://qauto.forstudy.space/')
    await page.locator('button', {hasText: 'Sign in'}).click()
    await page.locator('input#signinEmail').fill(process.env.USER_LOGIN)
    await page.locator('input#signinPassword').fill(process.env.USER_PASSWORD)
    await page.locator('button', {hasText: 'Login'}).click()

    // await Promise.all([
    //   page.locator('button', {hasText: 'Login'}).click(),
    //   page.waitForResponse(resp =>
    //     resp.url().includes(`/api/cars`)
    //   ),
    // ])
    // await page.locator('a[routerlink="instructions"]').click()
    // await page.locator('.instructions_content a').nth(0).click()
    // const instructionPage = await context.waitForEvent('page')
    // await expect(instructionPage.locator('body')).toContainText('Lorem ipsum dolor sit amet')
  })

  test('Should open hillel site', async ({page, context}) => {
    await page.goto('https://qauto.forstudy.space/')
    await page.locator('a[href="https://ithillel.ua"]').click()
    const hillelPage = await context.waitForEvent('page')
    await expect(hillelPage.locator('.section-content_descriptor')).toHaveText('Вдосконалюйся!')

    await page.locator('button', {hasText: 'Sign in'}).click()
  })
})
