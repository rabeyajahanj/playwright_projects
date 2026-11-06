# Playwright E-commerce Testing Project

A beginner-friendly UI automation project built with [Playwright](https://playwright.dev/) and JavaScript. It practices browser testing against the public [Demo Web Shop](https://demowebshop.tricentis.com/) website using the Page Object Model.

## What this project tests

- User registration with a generated email address
- Existing-user login
- Adding a product to the shopping cart and continuing to checkout
- Running the test suite in Chromium, Firefox, and WebKit

These are learning exercises against a third-party demo website. The website may change or be temporarily unavailable, so test failures can sometimes be caused by the site or network rather than by the test code.

## Built with

- JavaScript (ES modules)
- Node.js and npm
- Playwright Test
- Page Object Model (POM)
- GitHub Actions for automated test runs

## Project structure

```text
.
├── Pages/
│   ├── addtocart.js       # Shopping-cart and checkout page actions
│   ├── loginPage.js       # Login page actions
│   └── RegisterPage.js    # Registration page actions
├── tests/
│   ├── addtocart.test.js
│   ├── LoginPage.test.js
│   └── RegisterPage.test.js
├── .github/
│   └── workflows/
│       └── playwright.yml # GitHub Actions workflow
├── playwright.config.js
└── package.json
```

Each page object groups locators and actions for a part of the website. Test files use those page objects to describe user flows.

## Getting started

### Prerequisites

- Install a current [Node.js LTS](https://nodejs.org/) release (npm is included).
- Make sure you have an internet connection to access the demo website and download browser binaries.

### Install dependencies and browsers

From the project directory, run:

```bash
npm install
npx playwright install
```

On Linux, install the browser system dependencies if needed:

```bash
npx playwright install --with-deps
```

## Run the tests

Run all tests in all configured browsers:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/LoginPage.test.js
```

Run only one browser project:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

Show the browser while tests run:

```bash
npx playwright test --headed
```

Open Playwright's interactive test runner:

```bash
npx playwright test --ui
```

## View an HTML report

Generate and open an HTML report:

```bash
npx playwright test --reporter=html
npx playwright show-report
```

## Test account notes

The login and cart tests need an account that can sign in to the demo website. Use a valid demo/test account and do not commit personal or production credentials to the repository. Registration tests generate a new email address for each run.

## Continuous integration

The GitHub Actions workflow in `.github/workflows/playwright.yml` installs dependencies and Playwright browsers, then runs the tests on pushes and pull requests targeting the `main` or `master` branch.

## Learning goals

- Writing browser tests with Playwright Test
- Locating page elements and interacting with forms
- Organizing test code with page objects
- Using assertions to verify outcomes
- Running the same tests across multiple browser engines
- Practicing a basic CI workflow

## Disclaimer

This repository is a personal learning and portfolio project. It is not affiliated with or endorsed by Demo Web Shop. Automated tests interact with a public demo site and should not be used to submit real personal information or make real purchases.
