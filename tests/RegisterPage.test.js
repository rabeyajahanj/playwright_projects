import { test, expect}from'@playwright/test';
import { RegisterPage } from '../Pages/RegisterPage.js';

test('Register for New User', async ({ page }) => {   //title of the test case, constructor parameter

const registerPage = new RegisterPage(page);     //called object

await registerPage.openBrowser();
await registerPage.clickRegisterLink();
await registerPage.selectGender();
await registerPage.enterFirstName("John");
await registerPage.enterLastName("Doe");
await registerPage.enterEmail("42gmail.com");
await registerPage.enterPassword("123456");
await registerPage.enterConfirmPassword("123456");
await registerPage.clickRegisterButton();
await expect(page.locator('.result')).toContainText('Your registration completed');

await page.waitForTimeout(4000);  // Wait for 4 seconds before closing the browser
await registerPage.closeBrowser();
});
