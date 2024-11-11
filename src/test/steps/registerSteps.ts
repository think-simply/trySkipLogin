// loginSteps.ts
import { Given, When, Then } from "@cucumber/cucumber";
import RegisterPage from "../pages/registerPage";
import DashboardPage from "../pages/dashboardPage"
import { pageFixture } from "../../hooks/pageFixture";


When("User inputs all valid data", { timeout: 30000 }, async () => {
  const registerPage = new RegisterPage(pageFixture.page);
  await registerPage.registAccount(pageFixture.page);
});

Then("New account has been created successfully", { timeout: 30000 }, async () => {
  const registerPage = new RegisterPage(pageFixture.page);
  await registerPage.registMess();
})

When("User inputs data for all required fields: {string}, {string}, {string}, {string}, {string}, {string}", { timeout: 30000 }, async (username, password, cpassword, surName, firstName, email) => {
  const registerPage = new RegisterPage(pageFixture.page);
  await registerPage.registFillData(username, password, cpassword, surName, firstName, email);
})
Then("Cannot create a new account with existed username", { timeout: 30000 }, async () => {
  const registerPage = new RegisterPage(pageFixture.page);
  await registerPage.registMessFail();
})

