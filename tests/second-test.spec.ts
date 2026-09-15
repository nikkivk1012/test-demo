import { test } from '@playwright/test'

test('test', async ({ page }) => {
    await page.goto('https://playground.bondaracademy.com/')

    await page.getByRole('link', { name: 'Modal & Overlays' }).click();
    await page.getByRole('link', { name: 'Dialog' }).click();
    await page.getByRole('button', { name: 'Open Dialog with component' }).click();
    await page.getByRole('button', { name: 'Dismiss Dialog' }).click();
    await page.getByRole('button', { name: 'Open with delay 3 seconds' }).click();
    await page.getByRole('button', { name: 'OK' }).click();
    await page.getByRole('button', { name: 'Open Dialog with template' }).click();
    await page.getByRole('button', { name: 'OK' }).click();
    await page.getByRole('button', { name: 'Open with delay 10 seconds' }).click();
    await page.getByRole('button', { name: 'OK' }).click();
})