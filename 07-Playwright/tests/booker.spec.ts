import { test, expect } from '@playwright/test';

test('Verify Automation in Testing website loads successfully', async ({ page }) => {
  await page.goto('https://automationintesting.online/');

  await expect(page).toHaveTitle('Restful-booker-platform demo');
});

test('Verify Rooms section is visible', async ({ page }) => {
  await page.goto('https://automationintesting.online/');

  await expect(
    page.getByRole('navigation').getByRole('link', { name: 'Rooms' })
  ).toBeVisible();
});

test('Verify Rooms are displayed on the website', async ({ page }) => {
  await page.goto('https://automationintesting.online/');

  await page.getByRole('navigation').getByRole('link', { name: 'Rooms' }).click();

  await expect(page).toHaveURL(/.*#rooms/);

  await expect(page.getByText('Rooms', { exact: true }).first()).toBeVisible();
});