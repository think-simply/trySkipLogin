import { Page, Locator, expect } from "@playwright/test";
const locator = require("../selectors/loginSelector.json");

export default class LoginPage {
    readonly page: Page;
    readonly IncorrectAccount : Locator;

    constructor(page: Page) {
        this.page = page;
        this.IncorrectAccount = page.locator(locator.IncorrectAccount);
    }
    async errorMessage() {
        await expect(this.IncorrectAccount).toBeVisible({ timeout: 5000 });
      }
    
}