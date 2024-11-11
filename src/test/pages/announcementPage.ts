import { Page, Locator, expect } from "@playwright/test";
const locator = require("../selectors/annoucementSelector.json");
const axios = require('axios');
import { faker } from '@faker-js/faker';
import { getUniqueNumber } from "../../helper/utils"

export default class AnnoucePage {
    readonly page: Page;
    readonly addEntry: Locator;
    readonly titlebox: Locator;
    readonly category: Locator;
    readonly iFrametextbox: Locator;
    readonly saveButton: Locator;
    readonly newAnnounce: Locator;
    readonly actionIcon: Locator;
    readonly optionCopy: Locator;
    readonly optionUpdate: Locator;
    readonly optionDelete: Locator;
    readonly confirmYes: Locator;
    readonly editCate: Locator;
    readonly createCate: Locator;
    readonly firstName: Locator;
    readonly categoryList: Locator;
    readonly editCaButton: Locator;
    readonly firstElement: Locator;
    readonly deleteCaButton : Locator;

    constructor(page: Page) {
        this.page = page;
        this.addEntry = page.locator(locator.addEntry);
        this.titlebox = page.locator(locator.titlebox);
        this.category = page.locator(locator.category);
        this.iFrametextbox = page.locator(locator.iFrametextbox);
        this.saveButton = page.locator(locator.saveButton);
        this.newAnnounce = page.locator(locator.newAnnounce);
        this.actionIcon = page.locator(locator.actionIcon);
        this.optionCopy = page.locator(locator.optionCopy);
        this.optionUpdate = page.locator(locator.optionUpdate);
        this.optionDelete = page.locator(locator.optionDelete);
        this.confirmYes = page.locator(locator.confirmYes);
        this.editCate = page.locator(locator.editCate);
        this.createCate = page.locator(locator.createCate);
        this.firstName = page.locator(locator.firstName);
        this.categoryList = page.locator(locator.categoryList);
        this.editCaButton = page.locator(locator.editCaButton);
        this.firstElement = page.locator(locator.firstElement);
        this.deleteCaButton = page.locator(locator.deleteCaButton);
    }

    async addAnnouce(title: string, text: string) {
        await this.addEntry.click();
        await this.page.waitForSelector(locator.titlebox, { timeout: 10000 });
        await this.titlebox.fill(title);
        await this.category.selectOption({ label: 'Important' });
        await this.iFrametextbox.contentFrame().locator('html').click();
        await this.iFrametextbox.contentFrame().locator('body').fill(text);
        await this.saveButton.click();

    }
    async newAnnouce(title: string) {
        const newPostTitle = await this.newAnnounce.innerText();
        expect(newPostTitle).toBe(title);
    }
    async copyAnnouce(title: string, text: string) {
        await this.actionIcon.click();
        await this.optionCopy.click();
        await this.titlebox.fill(title);
        await this.category.selectOption({ label: 'Important' });
        await this.iFrametextbox.contentFrame().locator('html').click();
        await this.iFrametextbox.contentFrame().locator('body').fill(text);
        await this.saveButton.click();
    }
    async updateAnnouce(title: string, text: string) {
        await this.actionIcon.click();
        await this.optionUpdate.click();
        await this.titlebox.fill(title);
        await this.category.selectOption({ label: 'Important' });
        await this.iFrametextbox.contentFrame().locator('html').click();
        await this.iFrametextbox.contentFrame().locator('body').fill(text);
        await this.saveButton.click();
    }
    async deleteAnnouce() {
        await this.actionIcon.click();
        await this.optionDelete.click();
        await this.confirmYes.click();
    }
    async deleteAnnouceMess() {
        try {
            const response = await axios.get('https://buianthai.infinityfreeapp.com/adm_program/modules/announcements/announcements_function.php?');
            expect(response.status).toBe(200);
        } catch (error) {
            console.error('Error:', error);
        }

    }
    async createCategory() {
        await this.editCate.click();
        await this.createCate.click();
        const id = getUniqueNumber();
        const name = `group3_${id}`;
        await this.firstName.fill(name);
        await this.saveButton.click();
    }
    async createCategorylist() {
        await expect(this.categoryList).toBeVisible();

    }

    async editCategory() {
        await this.editCate.click();
        await this.editCaButton.click();
        const id = getUniqueNumber();
        const name = `group3_${id}`;
        await this.firstName.fill(name);
        await this.saveButton.click();
    }

    async afterUpdateCate() {
        const id = getUniqueNumber();
        const updatedCate = await this.firstElement.innerText();
        expect(updatedCate).toBe(`group3_${id}`);

    }

    async deleteCate() {
        await this.editCate.click();
        await this.deleteCaButton.click();
        await this.confirmYes.click();

    }

    async deleteCateMess() {
        try {
            const response = await axios.get('https://buianthai.infinityfreeapp.com/adm_program/modules/categories/categories_function.php?');
            expect(response.status).toBe(200);
        } catch (error) {
            console.error('Error:', error);
        }

    }
}