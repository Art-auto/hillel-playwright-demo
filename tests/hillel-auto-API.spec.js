import { test, request,expect } from '@playwright/test'


test.describe.configure({ mode: 'parallel' })

test.describe('', () => {
  
  test('API test', async ({page}) => {
    const response = await page.request.post('/api/auth/signin', {
      data: {
        "email": process.env.USER_LOGIN,
        "password": process.env.USER_PASSWORD,
        "remember": false
      }
    })
  
    console.log(await response.json())
  
    await page.goto('/')
    await page.pause()
  })
  
  test('API test with separate context', async ({page}) => {
    const api = await request.newContext()
    const response = await api.post('/api/auth/signin', {
      data: {
        "email": process.env.USER_LOGIN,
        "password": process.env.USER_PASSWORD,
        "remember": false
      }
    })
    expect(0).toEqual(1)
  
    await page.goto('/')
    await page.pause()
  })
  test('API test with separate context 2', async () => {
    const api = await request.newContext()
    const response = await api.post('/api/auth/signin', {
      data: {
        "email": process.env.USER_LOGIN,
        "password": process.env.USER_PASSWORD,
        "remember": false
      }
    })
  
    const resp = await response.json()
    
    expect(resp.status).toEqual('ok')
  })

})