import { test, expect } from '@playwright/test';



test('amazon search', async ({ page }) => {

    await page.goto('https://www.amazon.com/');
    await page.locator('#twotabsearchtextbox').fill('yogamat');
    await page.getByRole('button', { name: 'Go', exact: true }).click();
    await expect(page).toHaveURL(/\/s\?.*k=yogamat/);

    await page.locator('.s-asin a:has(h2)').first().click();
    await expect(page).toHaveURL(/\/dp\//);

    const dismissInternationalAlert = page.getByRole('button', { name: 'Dismiss' });
    if (await dismissInternationalAlert.isVisible({ timeout: 5000 }).catch(() => false)) {
        await dismissInternationalAlert.click();
    }

    const addToCart = page.getByRole('button', { name: 'Add to cart', exact: true });
    await addToCart.scrollIntoViewIfNeeded();
    await addToCart.click({ force: true });
    await page.locator('#nav-cart').click();
    await expect(page).toHaveURL(/\/cart/);

})