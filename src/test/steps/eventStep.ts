// loginSteps.ts
import { Given, When, Then } from "@cucumber/cucumber";
import EventPage from "../pages/eventPage";
import { pageFixture } from "../../hooks/pageFixture";


When("User create a new event", { timeout: 30000 }, async () => {
  const eventPage = new EventPage(pageFixture.page);
  await eventPage.addEvent();
});
Then("The new event has been created successfully", { timeout: 30000 }, async () => {
  const eventPage = new EventPage(pageFixture.page);
  await eventPage.afterAddEvent();
});

When("User makes a copy of a new event", { timeout: 30000 }, async () => {
  const eventPage = new EventPage(pageFixture.page);
  await eventPage.copyEvent();
});

When("User updates an event", { timeout: 30000 }, async () => {
  const eventPage = new EventPage(pageFixture.page);
  await eventPage.updateEvent();
});
Then("The event has been updated successfully", { timeout: 30000 }, async () => {
  const eventPage = new EventPage(pageFixture.page);
  await eventPage.afterUpdateEvent();
});

When("User removes an event", { timeout: 30000 }, async () => {
  const eventPage = new EventPage(pageFixture.page);
  await eventPage.deleteEvent();
});
Then("The event has been removed successfully", { timeout: 30000 }, async () => {
  const eventPage = new EventPage(pageFixture.page);
  await eventPage.afterDeleteEvent();
});

When("User creates a new calendar", { timeout: 30000 }, async () => {
  const eventPage = new EventPage(pageFixture.page);
  await eventPage.addCalendar();
});
Then("The new calendar has been created successfully", { timeout: 30000 }, async () => {
  const eventPage = new EventPage(pageFixture.page);
  await eventPage.afterAddCalendar();
});

When("User updates a new calendar", { timeout: 30000 }, async () => {
  const eventPage = new EventPage(pageFixture.page);
  await eventPage.updateCalendar();
});
Then("The calendar has been updated successfully", { timeout: 30000 }, async () => {
  const eventPage = new EventPage(pageFixture.page);
  await eventPage.afterEditCalendar();
});
When("User removes a new calendar", { timeout: 30000 }, async () => {
  const eventPage = new EventPage(pageFixture.page);
  await eventPage.deleteCalendar();
});
Then("The calendar has been deleted successfully", { timeout: 30000 }, async () => {
  const eventPage = new EventPage(pageFixture.page);
  await eventPage.afterDeleteCalendar();
});


