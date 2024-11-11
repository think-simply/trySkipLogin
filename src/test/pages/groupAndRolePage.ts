import { Page, Locator, expect } from "@playwright/test";
const locator = require("../selectors/groupAndRoleSelector.json");
import { getUniqueNumber, getDate } from "../../helper/utils";
const axios = require('axios');
export default class GroupAndRolePage {
    readonly page: Page;
    readonly createRole: Locator;
    readonly name: Locator;
    readonly saveButton: Locator;
    readonly titleRole: Locator;
    readonly editButton: Locator;
    readonly categoryGRpage: Locator;
    readonly description: Locator;
    readonly deleteIcon: Locator;
    readonly confirmYes: Locator;

    readonly editCategory: Locator;
    readonly createCategory: Locator;
    readonly nameCate: Locator;
    readonly editIconCate: Locator;
    readonly deleteIconCate: Locator;
    readonly newCate: Locator;
    readonly firstTitle: Locator;


    constructor(page: Page) {
        this.page = page;
        this.createRole = page.locator(locator.createRole);
        this.name = page.locator(locator.name);
        this.saveButton = page.locator(locator.saveButton);
        this.titleRole = page.locator(locator.titleRole);
        this.editButton = page.locator(locator.editButton);
        this.categoryGRpage = page.locator(locator.categoryGRpage);
        this.description = page.locator(locator.description);
        this.deleteIcon = page.locator(locator.deleteIcon);
        this.confirmYes = page.locator(locator.confirmYes)

        this.editCategory = page.locator(locator.editCategory);
        this.createCategory = page.locator(locator.createCategory);
        this.nameCate = page.locator(locator.nameCate);
        this.editIconCate = page.locator(locator.editIconCate);
        this.deleteIconCate = page.locator(locator.deleteIconCate);
        this.newCate = page.locator(locator.newCate);
        this.firstTitle = page.locator(locator.firstTitle);
    }
    async addRole() {
        await this.createRole.click()
        const id = getUniqueNumber();
        const role = `role_${id}`;
        await this.name.fill(role)
        await this.saveButton.click()
    }
    async afterAddRole() {
        await expect(this.categoryGRpage).toBeVisible();
    }

    async updateRole() {
        await this.editButton.click()
        const id = getUniqueNumber();
        const role = `role_${id}`;
        await this.description.fill(role)
        await this.saveButton.click()
    }
    async afterUpdateRole() {
        const date = getDate();
        const id = getUniqueNumber();
        const updatedRole = await this.description.innerText();
        expect(updatedRole).toBe(`${date} event_${id}`);
    }
    async removeRole() {
        await this.editCategory.click();
        await this.confirmYes.click();
    }
    async afterRemoveRole() {
        try {
            const response = await axios.get('https://buianthai.infinityfreeapp.com/adm_program/modules/groups-roles/groups_roles_function.php?');
            expect(response.status).toBe(200);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async addCategory() {
        await this.editCategory.click();
        await this.createCategory.click();
        const id = getUniqueNumber();
        const cate = `cate_${id}`;
        await this.nameCate.fill(cate);
        await this.saveButton.click();
    }
    async afterAddCate() {
        const id = getUniqueNumber();
        const newCate = await this.newCate.innerText();
        expect(newCate).toBe(`cate_${id}`);
    }
    async updateCategory() {
        await this.editCategory.click();
        await this.editIconCate.click();
        const id = getUniqueNumber();
        const cate = `cate_${id}`;
        await this.nameCate.fill(cate);
        await this.saveButton.click();
    }
    async afterUpdateCate() {
        const id = getUniqueNumber();
        const updateCate = await this.firstTitle.innerText();
        expect(updateCate).toBe(`cate_${id}`);
    }

    async removeCategory() {
        await this.editCategory.click();
        await this.deleteIconCate.click();
        await this.confirmYes.click();
 
    }
    async afterRemoveCate() {
        try {
            const response = await axios.get('https://buianthai.infinityfreeapp.com/adm_program/modules/categories/categories_function.php?');
            expect(response.status).toBe(200);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    async addConfig() {
        await this.categoryGRpage.selectOption({ label: 'Important' });
 
    }
    async afterAddConfig() {
        await this.categoryGRpage.selectOption({ label: 'Important' });
 
    }

    
}