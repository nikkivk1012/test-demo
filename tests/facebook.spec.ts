import { expect, test } from '@playwright/test';
import { LoginPage } from './pom-spec';

test('login', async ({ page }) => {
    const loginPage = new LoginPage(page);


    await page.goto('https://www.facebook.com/');
    await loginPage.login('7028839211', 'nikki@186');
});