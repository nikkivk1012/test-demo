import { test } from '@playwright/test'

test('frame', async({page}) => {
    await page.goto('https://qapracticehub.com/#dynamic')
    const frame= page.frameLocator('#practice-iframe')
    await frame.locator('#iframe-name').fill('John Doe');
    await frame.locator('#iframe-email').fill('n@g.com');
    await frame.locator('#iframe-role').selectOption('tester');
    await frame.getByRole('button', {name:'Submit'}).click();
})

