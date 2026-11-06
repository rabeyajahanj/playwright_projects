import { test } from '@playwright/test';
import { AddToCartPage } from '../Pages/addtocart.js';

test('Login for Existing User', async ({ page }) => {

  const addToCartPage = new AddToCartPage(page);
  await addToCartPage.openBrowser();
  await addToCartPage.clickLoginLink();
  await addToCartPage.enterEmail("1@gmail.com");
  await addToCartPage.enterPassword("123456");
  await addToCartPage.clickRememberMeCheckbox();
  await addToCartPage.clickLoginButton();
  await addToCartPage.clickAddToCartButton();
  await addToCartPage.clickShoppingCartLink();
  await addToCartPage.clickCheckoutButton();
  
  await page.waitForTimeout(4000); // Wait for 4 seconds to observe the result
  await addToCartPage.closeBrowser();
});
