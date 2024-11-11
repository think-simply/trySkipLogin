// loginSteps.ts
import { Given, When, Then } from "@cucumber/cucumber";
import MessagePage from "../pages/messagePage";
import { pageFixture } from "../../hooks/pageFixture";


When("User send a private message", { timeout: 30000 }, async () => {
  const messagePage = new MessagePage(pageFixture.adminPage);
  await messagePage.sendPrivateMess();
});
Then("Message has been sent successfully", { timeout: 30000 }, async () => {
  const messagePage = new MessagePage(pageFixture.adminPage);
  await messagePage.aftersendPrivateMess();
});
When("User removes a private message", { timeout: 30000 }, async () => {
  const messagePage = new MessagePage(pageFixture.adminPage);
  await messagePage.deleteMesssage();
});
Then("Message has been deleted successfully", { timeout: 30000 }, async () => {
  const messagePage = new MessagePage(pageFixture.adminPage);
  await messagePage.afterDeleteMessage();
});
 