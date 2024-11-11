import { chromium } from '@playwright/test';
import { authConfig } from './auth.config';

async function globalSetup() {
  const browser = await chromium.launch();

  // Setup for admin
  const adminContext = await browser.newContext();
  const adminPage = await adminContext.newPage();
  await adminPage.goto('your-login-url');
  await adminPage.fill('#email', authConfig.admin.email);
  await adminPage.fill('#password', authConfig.admin.password);
  await adminPage.click('#login-button');
  // Wait for login to complete - adjust selector as needed
  await adminPage.waitForSelector('.dashboard-page');
  await adminContext.storageState({ path: authConfig.admin.storageState });

  // Setup for staff
  const staffContext = await browser.newContext();
  const staffPage = await staffContext.newPage();
  await staffPage.goto('your-login-url');
  await staffPage.fill('#email', authConfig.staff.email);
  await staffPage.fill('#password', authConfig.staff.password);
  await staffPage.click('#login-button');
  await staffPage.waitForSelector('.dashboard-page');
  await staffContext.storageState({ path: authConfig.staff.storageState });

  await browser.close();
}

export default globalSetup;