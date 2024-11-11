import { Page, Locator, expect } from "@playwright/test";
const locator = require("../selectors/forgotpasswordSelector.json");

export default class ForgotPassPage {
    readonly page: Page;
    readonly usernameOemail: Locator;
    readonly sendButton : Locator;
    readonly messForgot : Locator;
    


    constructor(page: Page) {
        this.page = page;
        this.usernameOemail = page.locator(locator.usernameOemail);
        this.sendButton = page.locator(locator.sendButton);
        this.messForgot = page.locator(locator.messForgot);
    }

    async forgotPass(email:string) {
        await this.usernameOemail.fill(email);
        await this.sendButton.click()

    }
    async forgotPassMess() {
        await expect(this.messForgot).toBeVisible();

    }
    
}