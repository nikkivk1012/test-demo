import { test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('https://playground.bondaracademy.com/')
})

test.describe('Suit1', () => {
    test.beforeEach(async ({ page }) => {
        await page.getByText('Forms').click()
    })

    test('this is first test', async ({ page }) => {
        await page.getByText('Form Layouts').click()
    })

    test('this is first test for datepicker', async ({ page }) => {
        await page.getByText('Datepicker').click()
    })
})

//test.describe('Suit2', () => {
  //  test.beforeEach(async ({ page }) => {
    //await page.getByRole('textbox', { name: 'Email address' })
    //})

test('frame', async({page}) => {
    await page.goto('https://playground.bondaracademy.com/frame')
})
