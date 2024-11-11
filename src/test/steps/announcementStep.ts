// loginSteps.ts
import { Given, When, Then } from "@cucumber/cucumber";
import AnnoucePage from "../pages/announcementPage";
import { pageFixture } from "../../hooks/pageFixture";


When("User add a new annoucement title {string} and text {string}", { timeout: 30000 }, async (title, text) => {
  const annoucePage = new AnnoucePage(pageFixture.page);
  await annoucePage.addAnnouce(title, text);
});
Then("New annoucement with title {string} has been created successfully", { timeout: 30000 }, async (title) => {
  const annoucePage = new AnnoucePage(pageFixture.page);
  await annoucePage.newAnnouce(title);
});
When("User copy the first announcement and change title {string} and text {string}", { timeout: 30000 }, async (title, text) => {
  const annoucePage = new AnnoucePage(pageFixture.page);
  await annoucePage.copyAnnouce(title, text);
});
Then("New annoucement has been copied successfully with new title {string}", { timeout: 30000 }, async (title) => {
  const annoucePage = new AnnoucePage(pageFixture.page);
  await annoucePage.newAnnouce(title);
});
When("User updates the first announcement and change title {string} and text {string}", { timeout: 30000 }, async (title, text) => {
  const annoucePage = new AnnoucePage(pageFixture.page);
  await annoucePage.updateAnnouce(title, text);
});
Then("The annoucement has been updated with new title {string}", { timeout: 30000 }, async (title) => {
  const annoucePage = new AnnoucePage(pageFixture.page);
  await annoucePage.newAnnouce(title);
});

When("User deletes the first announcement", { timeout: 30000 }, async () => {
  const annoucePage = new AnnoucePage(pageFixture.page);
  await annoucePage.deleteAnnouce();
});
Then("The annoucement has been deleted successfully", { timeout: 30000 }, async () => {
  const annoucePage = new AnnoucePage(pageFixture.page);
  await annoucePage.deleteAnnouceMess();
});

When("User create new category", { timeout: 30000 }, async () => {
  const annoucePage = new AnnoucePage(pageFixture.page);
  await annoucePage.createCategory();
});
Then("The new category has been created successfully", { timeout: 30000 }, async () => {
  const annoucePage = new AnnoucePage(pageFixture.page);
  await annoucePage.createCategorylist();
});

When("User edit a category", { timeout: 30000 }, async () => {
  const annoucePage = new AnnoucePage(pageFixture.page);
  await annoucePage.editCategory();
});
Then("The category has been updated successfully", { timeout: 30000 }, async () => {
  const annoucePage = new AnnoucePage(pageFixture.page);
  await annoucePage.afterUpdateCate();
});

When("User delete a category", { timeout: 30000 }, async () => {
  const annoucePage = new AnnoucePage(pageFixture.page);
  await annoucePage.deleteCate();
});
Then("The category has been deleted successfully", { timeout: 30000 }, async () => {
  const annoucePage = new AnnoucePage(pageFixture.page);
  await annoucePage.deleteCateMess();
});

