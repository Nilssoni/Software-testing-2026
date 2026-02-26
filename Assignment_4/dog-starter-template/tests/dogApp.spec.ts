import { test, expect } from '@playwright/test';

test.describe('Successful tests', () => {
    
    // POSITIVE TEST

    test('should load random dog image on page load', async ({ page }) => {
        await page.goto('/');
        const promise = page.waitForResponse('**/api/dogs/random');
        await promise;
        await expect(page.getByRole("heading", { name: /random dog image/i })).toBeVisible();

        const img =  page.locator('img.dog-image');
        await expect(img).toBeVisible();
        await expect(img).toHaveAttribute('src', /https?:\/\//i);
    });

    test('should load new random dog image on button click', async ({ page }) => {
        await page.goto('/');
        const promise = page.waitForResponse('**/api/dogs/random');
        const button = page.getByRole('button', { name: /get another dog/i });
        await expect(button).toBeVisible();
        await button.click();
        await promise;

        const img =  page.locator('img.dog-image');
        await expect(img).toBeVisible();
        await expect(img).toHaveAttribute('src', /https?:\/\//i);
    });
});

test.describe('Failure tests', () => {

    // NEGATIVE TEST

    test('show error message when API call fails', async ({ page }) => {
        await page.route('**/api/dogs/random', route => route.abort());
        await page.goto('/');
        const errorElement = page.getByText(/error/i);
        await expect(errorElement).toBeVisible();
    })
})