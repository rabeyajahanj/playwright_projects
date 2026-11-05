import { test, expect } from '@playwright/test';

class RegisterPage {
  constructor(page) {
    this.page = page;
   //his.pageURL = "https://demowebshop.tricentis.com/";
    this.registerLink = page.locator("a[href='/register']");
    this.genderRadioButton = page.locator("#gender-female");
    this.firstNameField = page.getByLabel("First name");
    this.lastNameField = page.getByLabel("Last name");
    this.emailField = page.getByLabel("Email");
    this.passwordField = page.locator('#Password');
    this.confirmPasswordField = page.locator('#ConfirmPassword');
    this.registerButton = page.locator('#register-button');
  }
async openBrowser() {
    await this.page.goto("https://demowebshop.tricentis.com/", {   //this.pageURL, {
        waitUntil: 'domcontentloaded',
        timeout: 70000
    });
}

  async clickRegisterLink() {
    await this.registerLink.click();
  }

  async selectGender() {
    await this.genderRadioButton.check();
  }

  async enterFirstName(firstName) {
    await this.firstNameField.fill(firstName);
  }

  async enterLastName(lastName) {
    await this.lastNameField.fill(lastName);
  }

  async enterEmail(email) {
    await this.emailField.fill(email);
  }

  async enterPassword(password) {
    await this.passwordField.fill(password);
  }

  async enterConfirmPassword(confirmPassword) {
    await this.confirmPasswordField.fill(confirmPassword);
  }

  async clickRegisterButton() {
    await this.registerButton.click();
  }   

  async closeBrowser() {
    await this.page.close();
  }

}
export {RegisterPage};