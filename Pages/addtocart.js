import { LoginPage } from './loginPage.js';

class AddToCartPage extends LoginPage{
  constructor(page) {
    super(page);
    this.page = page;
    this.addToCartButton = page.getByRole('button', { name: 'Add to cart' }).nth(1);
    this.shoppingCartLink = page.getByRole('link', { name: 'Shopping cart' }).first();
    this.checkoutButton = this.page.locator("#checkout");
  }
//     async openBrowser() {
//     await this.page.goto("https://demowebshop.tricentis.com/", {
//         waitUntil: 'domcontentloaded',
//         timeout: 60000
//     });
//  } 

   async clickAddToCartButton() {
    await this.addToCartButton.click();
  } 

    async clickShoppingCartLink() { 
     await this.shoppingCartLink.click();
    }
    
   async clickCheckoutButton() { 
    await this.checkoutButton.click();
    console.log("Checkout Successfully");
  }

    async closeBrowser() {
    await this.page.close();
  }

}
export { AddToCartPage };