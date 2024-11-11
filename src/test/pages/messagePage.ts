import { Page, Locator, expect } from "@playwright/test";
const locator = require("../selectors/messageSelector.json");
import { getUniqueNumber, getDate } from "../../helper/utils";
const axios = require('axios');

export default class MessagePage {
    readonly page: Page;
    readonly createPrivateMess: Locator;
    readonly toMail: Locator;
    readonly selectedOption: Locator;
    readonly subject: Locator;
    readonly message: Locator;
    readonly sendButton: Locator;
    readonly subjectInList: Locator;
    readonly removeIcon: Locator;
    readonly confirmYes : Locator;

    constructor(page: Page) {
        this.page = page;
        this.createPrivateMess = page.locator(locator.createPrivateMess);
        this.toMail = page.locator(locator.toMail);
        this.selectedOption = page.locator(locator.selectedOption);
        this.subject = page.locator(locator.subject);
        this.message = page.locator(locator.message);
        this.sendButton = page.locator(locator.sendButton);
        this.subjectInList = page.locator(locator.subjectInList);
        this.removeIcon = page.locator(locator.removeIcon);
        this.confirmYes = page.locator(locator.confirmYes);
       
    }
    async sendPrivateMess() {
        await this.createPrivateMess.click();
        await this.toMail.click();
        await this.selectedOption.click();
        const id = getUniqueNumber();
        const title = `message_${id}`;
        await this.subject.fill(title);
        await this.message.fill(title);
        await this.sendButton.click();
    }
    async aftersendPrivateMess() {
        const id = getUniqueNumber();
        const message = await this.subjectInList.innerText();
        expect(message).toBe(`message_${id}`);
    }
    
    async deleteMesssage() {
        await this.removeIcon.click();
        await this.confirmYes.click();
    }
    async afterDeleteMessage() {
        try {
            const response = await axios.get('https://buianthai.infinityfreeapp.com/adm_program/modules/messages/messages.php?');
            expect(response.status).toBe(200);
        } catch (error) {
            console.error('Error:', error);
        }
    }

}