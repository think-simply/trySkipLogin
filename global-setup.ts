import { chromium } from '@playwright/test';
import { authConfig } from './auth.config';
const locator = require("../selectors/dashboardSelector.json");

async function globalSetup() {
  const browser = await chromium.launch();
 
  // Setup for admin
  const adminContext = await browser.newContext();
  const adminPage = await adminContext.newPage();
  await adminPage.goto(`${process.env.WEB_URL}`);
  await adminPage.fill('#plg_usr_login_name', authConfig.admin.username);
  await adminPage.fill('#plg_usr_password', authConfig.admin.password);
  await adminPage.click('#next_page');
  // Wait for login to complete - adjust selector as needed
  await adminPage.waitForSelector('h3:text("Logged in as")');
  await adminContext.storageState({ path: authConfig.admin.storageState });


  await browser.close();
}

export default globalSetup;