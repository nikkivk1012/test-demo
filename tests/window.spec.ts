import { test, expect } from '@playwright/test';

test('window', async ({ page, context }) => {
    await page.goto('https://playground.bondaracademy.com/pages/modal-overlays/window');

const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.getByText('Open homepage in a new tab').click(),
]);

    await newPage.waitForLoadState();
    await expect(newPage).toHaveURL(/\/pages\/iot-dashboard/);
    console.log(await newPage.title());

});