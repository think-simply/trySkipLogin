// loginSteps.ts
import { Given, When, Then } from "@cucumber/cucumber";
import DashboardPage from "../pages/dashboardPage";
import { pageFixture } from "../../hooks/pageFixture";

Given("User navigates to page", { timeout: 20000 }, async () => {
  const dashboardPage = new DashboardPage(pageFixture.adminPage); // Use pageFixture here
  await dashboardPage.visit();

});
When("User goes to Register page", { timeout: 20000 }, async () => {
  const dashboardPage = new DashboardPage(pageFixture.page);
  await dashboardPage.gotoRegister();
});
When("User clicks on the Password forgotten link", { timeout: 20000 }, async () => {
  const dashboardPage = new DashboardPage(pageFixture.page);
  await dashboardPage.gotoForgotPass();
});
When("User enters an invalid {string} or {string}", { timeout: 20000 }, async (username, password) => {
  const dashboardPage = new DashboardPage(pageFixture.page);
  await dashboardPage.login(username, password);
});

When("User login with a valid credential: {string},{string}", { timeout: 20000 }, async (username, password) => {
  const dashboardPage = new DashboardPage(pageFixture.page);
  await dashboardPage.login(username, password);
});
When("User should see the homepage", { timeout: 20000 }, async () => {
  const dashboardPage = new DashboardPage(pageFixture.page);
  await dashboardPage.messLogin();
});
When("User clicks on Annoucements on left menu", { timeout: 20000 }, async () => {
  const dashboardPage = new DashboardPage(pageFixture.page);
  await dashboardPage.clickonAnnouce();
});
When("User clicks on Events on left menu", { timeout: 20000 }, async () => {
  const dashboardPage = new DashboardPage(pageFixture.page);
  await dashboardPage.clickonEvent();
});
// When("User clicks on Messages on left menu", { timeout: 20000 }, async () => {
//   const dashboardPage = new DashboardPage(pageFixture.page);
//   await dashboardPage.clickonMessages();
// });
When("User clicks on Groups and Roles on left menu", { timeout: 20000 }, async () => {
  const dashboardPage = new DashboardPage(pageFixture.page);
  await dashboardPage.clickonGroupAndRole();
});

When("User login with the admin account: {string},{string}", { timeout: 20000 }, async (username, password) => {
  const dashboardPage = new DashboardPage(pageFixture.adminPage);
  await dashboardPage.login(username, password);
});
When("User clicks on Messages on left menu", { timeout: 20000 }, async () => {
  const dashboardPage = new DashboardPage(pageFixture.adminPage);
  await dashboardPage.clickonMessages();
});
