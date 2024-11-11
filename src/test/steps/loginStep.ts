// loginSteps.ts
import { Given, When, Then } from "@cucumber/cucumber";
import LoginPage from "../pages/loginPage";
import { pageFixture } from "../../hooks/pageFixture";


Then("User should see an error message indicating invalid credentials", { timeout: 30000 }, async () => {
  const loginPage = new LoginPage(pageFixture.page);
  await loginPage.errorMessage();
});