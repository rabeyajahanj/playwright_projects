import { test, expect } from '@playwright/test';

class LoginPage {
  constructor(page) {
    super();
    this.page = page;
    // this.pa= ("https://demowebshop.tricentis.com/");
    this.loginLink = page.locator("a[href='/login']");
    this.emailField = page.getByLabel("Email");
    this.passwordField = page.locator('#Password');
    this.rememberMeCheckbox = page.locator('#RememberMe');
    this.loginButton = page.locator('input.login-button');
  }
async openBrowser() {
    await this.page.goto("https://demowebshop.tricentis.com/",{
        waitUntil: 'domcontentloaded',
        timeout: 70000
    });
}

  async clickLoginLink() {
    await this.loginLink.click();
  }

  async enterEmail(email) {
    await this.emailField.fill(email);
  }

  async enterPassword(password) {
    await this.passwordField.fill(password);
  }

  async clickRememberMeCheckbox() {
    await this.rememberMeCheckbox.check();
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async closeBrowser() {
    await this.page.close();
  }

}
export { LoginPage };