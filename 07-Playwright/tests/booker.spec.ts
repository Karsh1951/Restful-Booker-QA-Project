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

test('Verify Rooms navigation works', async ({ page }) => {
  await page.goto('https://automationintesting.online/');

  await page.getByRole('navigation').getByRole('link', { name: 'Rooms' }).click();

  await expect(page).toHaveURL(/#rooms/);
});

//Step 4 — Select the Single room


test('Verify user can select the Single room', async ({ page }) => {

  // 1. Navigate to the website
  await page.goto('https://automationintesting.online/');

  // 2. Locate the Single room
  const singleRoom = page.locator('.room-card').filter({
    hasText: 'Single'
  });

  // 3. Click Book now
  await singleRoom.getByRole('link', { name: 'Book now' }).click();

  // 4. Verify reservation page
  await expect(page).toHaveURL(/\/reservation\/1/);

  // 5. Verify Reserve Now button is available
  const reserveButton = page.locator('#doReservation');

  await expect(reserveButton).toBeVisible();
  await expect(reserveButton).toBeEnabled();

  // 6. Click Reserve Now to open the booking form
  await reserveButton.click();

  // 7. Verify the booking form is displayed
  await expect(page.locator('input[name="firstname"]')).toBeVisible();

  // 8. Populate customer details
  await page.locator('input[name="firstname"]').fill('Christopher');

  await page.locator('input[name="lastname"]').fill('Johnson');

  await page.locator('input[name="email"]').fill('christopher.johnson@test.com');

  await page.locator('input[name="phone"]').fill('0712345678');

  // 9. Verify all fields have been populated
  await expect(page.locator('input[name="firstname"]'))
    .toHaveValue('Christopher');

  await expect(page.locator('input[name="lastname"]'))
    .toHaveValue('Johnsonmurimii');

  await expect(page.locator('input[name="email"]'))
    .toHaveValue('christopher.johnson@test.com');

  await expect(page.locator('input[name="phone"]'))
    .toHaveValue('07123456789');

  // 10. Submit the reservation
  await page.getByRole('button', { name: 'Reserve Now' }).click();

});



