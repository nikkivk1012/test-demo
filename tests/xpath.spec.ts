import { test, expect } from '@playwright/test';

test('test1', async ({ page }) => {
  await page.goto('https://www.w3schools.com/');
  await page.getByRole('button', { name: 'Tutorials' }).click();
  await page.locator("//a[@data-name='css']//h4[text()='CSS']").click();
  //await page.getByLabel('Menu for tutorials').getByRole('link', { name: 'CSS Style and layout for web' }).click();
  //await page.pause();
  //await expect(page).toHaveTitle(/W3Schools/);
  await expect(page).toHaveTitle(/CSS/);
});