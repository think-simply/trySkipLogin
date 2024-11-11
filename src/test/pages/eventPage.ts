import { Page, Locator, expect } from "@playwright/test";
const locator = require("../selectors/eventSelector.json");
import { getUniqueNumber, getDate } from "../../helper/utils";
const axios = require('axios');

export default class EventPage {
    readonly page: Page;
    readonly createEvent: Locator;
    readonly title: Locator;
    readonly saveButton: Locator;
    readonly firstElement: Locator;
    readonly lastElement: Locator;
    readonly actionIcon: Locator;
    readonly optionCopy: Locator;
    readonly optionUpdate: Locator;
    readonly optionDelete: Locator;
    readonly confirmYes: Locator;
    readonly editCalendar : Locator;
    readonly createCalendar : Locator;
    readonly name: Locator;
    readonly editCalendarButton: Locator;
    readonly firstCalendarElement: Locator;
    readonly deleteCalendarButton: Locator;
    readonly calendarList: Locator;

    constructor(page: Page) {
        this.page = page;
        this.createEvent = page.locator(locator.createEvent);
        this.title = page.locator(locator.title);
        this.saveButton = page.locator(locator.saveButton);
        this.firstElement = page.locator(locator.firstElement);
        this.lastElement = page.locator(locator.lastElement);
        this.actionIcon = page.locator(locator.actionIcon);
        this.optionCopy = page.locator(locator.optionCopy);
        this.optionUpdate = page.locator(locator.optionUpdate);
        this.optionDelete = page.locator(locator.optionDelete);
        this.confirmYes = page.locator(locator.confirmYes);
        this.editCalendar = page.locator(locator.editCalendar);
        this.createCalendar = page.locator(locator.createCalendar);
        this.name = page.locator(locator.name);
        this.editCalendarButton = page.locator(locator.editCalendarButton);
        this.firstCalendarElement = page.locator(locator.firstCalendarElement);
        this.deleteCalendarButton = page.locator(locator.deleteCalendarButton);
        this.calendarList = page.locator(locator.calendarList);

    }
    async addEvent() {
        await this.createEvent.click();
        const id = getUniqueNumber();
        const title = `event_${id}`;
        await this.title.fill(title);
        await this.saveButton.click();
    }
    async afterAddEvent() {
        const date = getDate();
        const id = getUniqueNumber();
        const updatedCate = await this.lastElement.innerText();
        expect(updatedCate).toBe(`${date} event_${id}`);

    }
    async copyEvent() {
        await this.actionIcon.click();
        await this.optionCopy.click();
        const id = getUniqueNumber();
        const title = `event_${id}`;
        await this.title.fill(title);
        await this.saveButton.click();
    }
    async updateEvent() {
        await this.actionIcon.click();
        await this.optionUpdate.click();
        const id = getUniqueNumber();
        const title = `event_${id}`;
        await this.title.fill(title);
        await this.saveButton.click();
    }
    async afterUpdateEvent() {
        const date = getDate();
        const id = getUniqueNumber();
        const updatedCate = await this.firstElement.innerText();
        expect(updatedCate).toBe(`${date} event_${id}`);

    }
    async deleteEvent() {
        await this.actionIcon.click();
        await this.optionDelete.click();
        await this.confirmYes.click();
    }
    async afterDeleteEvent() {
        try {
            const response = await axios.get('https://buianthai.infinityfreeapp.com/adm_program/modules/events/events_function.php?');
            expect(response.status).toBe(200);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async addCalendar() {
        await this.editCalendar.click();
        await this.createCalendar.click();
        const id = getUniqueNumber();
        const name = `calendar_${id}`;
        await this.name.fill(name);
        await this.saveButton.click();
    }
    async afterAddCalendar() {
        await expect(this.calendarList).toBeVisible();
    }
    async updateCalendar() {
        await this.editCalendar.click();
        await this.editCalendarButton.click();
        const id = getUniqueNumber();
        const name = `calendar_${id}`;
        await this.name.fill(name);
        await this.saveButton.click();
        
    }

    async afterEditCalendar() {
        const id = getUniqueNumber();
        const updatedCate = await this.firstCalendarElement.innerText();
        expect(updatedCate).toBe(`calendar_${id}`);

    }
    async deleteCalendar() {
        await this.editCalendar.click();
        await this.deleteCalendarButton.click();
        await this.confirmYes.click();

    }
    async afterDeleteCalendar() {
        try {
            const response = await axios.get('https://buianthai.infinityfreeapp.com/adm_program/modules/categories/categories_function.php?');
            expect(response.status).toBe(200);
        } catch (error) {
            console.error('Error:', error);
        }

    }

}