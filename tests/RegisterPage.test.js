import { test, expect}from'@playwright/test';
import { RegisterPage } from '../Pages/RegisterPage.js';

// Helper function (you can put this at the top of the file or in a separate utils file)
function uniqueEmail() {
  return `user_${Date.now()}_${Math.floor(Math.random() * 10000)}@gmail.com`;
}

test('Register for New User', async ({ page }) => {   //title of the test case, constructor parameter

const registerPage = new RegisterPage(page);     //called object

await registerPage.openBrowser();
await registerPage.clickRegisterLink();
await registerPage.selectGender();
await registerPage.enterFirstName("John");
await registerPage.enterLastName("Doe");

// ✅ Generate unique email every time
  const email = uniqueEmail();
  await registerPage.enterEmail(email);

await registerPage.enterPassword("123456");
await registerPage.enterConfirmPassword("123456");
await registerPage.clickRegisterButton();
await expect(page.locator('.result')).toContainText('Your registration completed');

await page.waitForTimeout(4000);  // Wait for 4 seconds before closing the browser
await registerPage.closeBrowser();
});
