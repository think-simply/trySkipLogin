Feature: Messages Functionality

  Background:
    Given User navigates to page

  @high @now
  Scenario: TC_26 : Write a private message
    When User login with the admin account: "Admin","Admin@123"
    And User clicks on Messages on left menu
    And User send a private message
    Then Message has been sent successfully

  # @high 
  # Scenario: TC_27 : Delete a private message
  #   When User login with a valid credential: "Admin","Admin@123"
  #   And User clicks on Messages on left menu
  #   And User removes a private message
  #   Then Message has been deleted successfully
