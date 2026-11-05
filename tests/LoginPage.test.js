import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/loginPage.js';

test('Login for Existing User', async ({ page }) => {   //title of the test case, constructor parameter
    const loginPage = new LoginPage(page);     //called object
    await loginPage.openBrowser();
    await loginPage.clickLoginLink();
    await loginPage.enterEmail("2@gmail.com");
    await loginPage.enterPassword("123456");
    await loginPage.clickRememberMeCheckbox();
    await loginPage.clickLoginButton();
    await expect(page.locator("a[href='/logout']")).toBeVisible();

    await page.waitForTimeout(4000); // Wait for 4 seconds to observe the result
    await loginPage.closeBrowser();
});