// loginSteps.ts
import { Given, When, Then } from "@cucumber/cucumber";
import ForgotPassPage from "../pages/forgotPasswordPage";
import { pageFixture } from "../../hooks/pageFixture";


When("User enters {string}", { timeout: 30000 }, async (email) => {
  const forgotPassPage = new ForgotPassPage(pageFixture.page);
  await forgotPassPage.forgotPass(email);
});
When("User should see a success message", { timeout: 30000 }, async () => {
  const forgotPassPage = new ForgotPassPage(pageFixture.page);
  await forgotPassPage.forgotPassMess();
});

