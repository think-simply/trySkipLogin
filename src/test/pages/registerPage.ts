import { Page, Locator, expect } from "@playwright/test";
const locator = require("../selectors/registerSelector.json");
import { getUniqueNumber } from "../../helper/utils";
import { faker } from '@faker-js/faker';


export default class RegisterPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly confirmpassword: Locator;
  readonly surname: Locator;
  readonly firstname: Locator;
  readonly email: Locator;
  readonly sendButton: Locator;
  readonly message: Locator;
  readonly messExistUsername: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator(locator.username);
    this.password = page.locator(locator.password);
    this.confirmpassword = page.locator(locator.confirmpassword);
    this.surname = page.locator(locator.surname);
    this.firstname = page.locator(locator.firstname);
    this.email = page.locator(locator.email);
    this.sendButton = page.locator(locator.sendButton);
    this.message = page.locator(locator.message);
    this.messExistUsername = page.locator(locator.messExistUsername)
  }

  async registAccount(page: Page) {
    const { firstName, surName, email, password } = await this.generateRandomUserData();

    const randomNum = Math.floor(Math.random() * 10000) + 1;
    const username = `${firstName}${randomNum}`;

    // Assuming username field has ID 'username'
    await this.username.fill(username);
    await this.password.fill(password);
    await this.confirmpassword.fill(password);
    await this.surname.fill(surName);
    await this.firstname.fill(firstName);
    await this.email.fill(email);
    await this.sendButton.click();
  }

  async generateRandomUserData(): Promise<{
    firstName: string;
    surName: string;
    email: string;
    password: string;
  }> {
    const firstName = faker.name.firstName();
    const surName: string = faker.name.lastName();
    const email = faker.internet.email();
    const password = faker.internet.password();

    return {
      firstName,
      surName,
      email,
      password,
    };
  }

  async registMess() {
    await expect(this.message).toBeVisible();
  }
  async registFillData(username: string, password: string, cpassword: string, surName: string, firstName: string, email: string) {

    await this.username.fill(username);
    await this.password.fill(password);
    await this.confirmpassword.fill(cpassword);
    await this.surname.fill(surName);
    await this.firstname.fill(firstName);
    await this.email.fill(email);
    await this.sendButton.click();
  }
  async registMessFail() {
    await expect(this.messExistUsername).toBeVisible();
  }
}