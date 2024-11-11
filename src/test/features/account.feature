# Feature: Homepage Functionality

#   Background:
#     Given User navigates to page

#   @high
#   Scenario: TC_01 : User create new account successfully
#     When User goes to Register page
#     And User inputs all valid data
#     Then New account has been created successfully

#   @medium
#   Scenario: TC_02 : User create new account with existing data
#     When User goes to Register page
#     And User inputs data for all required fields: "<username>", "<password>", "<confirm password>", "<surName>", "<firstName>", "<email>"
#     Then Cannot create a new account with existed username

#     Examples:
#       | username | password    | confirm password | surName | firstName | email            |
#       | Admint   | Admint@1234 | Admint@1234      | tina    | nguyen    | theu@yopmail.com |

#   @high
#   Scenario: TC_03: Reset Password
#     When User clicks on the Password forgotten link
#     And User enters "<email>"
#     Then User should see a success message

#     Examples:
#       | email            |
#       | theu@yopmail.com |

#   @high
#   Scenario: TC_04: Login Attempt with invalid credentials
#     When User enters an invalid "<username>" or "<password>"
#     Then User should see an error message indicating invalid credentials

#     Examples:
#       | username | password |
#       | Admin    | Admin    |

#   @high
#   Scenario: TC_05: Login Attempt with valid credentials
#     When User login with a valid credential: "<username>","<password>"
#     Then User should see the homepage

#     Examples:
#       | username | password  |
#       | Admin    | Admin@123 |

#   @high
#   Scenario: TC_08: Add a new announcement
#     When User login with a valid credential: "<username>","<password>"
#     And User clicks on Annoucements on left menu
#     And User add a new annoucement title "<title>" and text "<text>"
#     Then New annoucement with title "<title>" has been created successfully

#     Examples:
#       | username | password  | title  | text |
#       | Admin    | Admin@123 | title1 | text |

#   @high
#   Scenario: TC_09: Copy an announcement
#     When User login with a valid credential: "<username>","<password>"
#     And User clicks on Annoucements on left menu
#     And User copy the first announcement and change title "<title>" and text "<text>"
#     Then New annoucement has been copied successfully with new title "<title>"

#     Examples:
#       | username | password  | title  | text  |
#       | Admin    | Admin@123 | title2 | text2 |

#   @high
#   Scenario: TC_10: Update an announcement
#     When User login with a valid credential: "<username>","<password>"
#     And User clicks on Annoucements on left menu
#     And User updates the first announcement and change title "<title>" and text "<text>"
#     Then The annoucement has been updated with new title "<title>"

#     Examples:
#       | username | password  | title  | text  |
#       | Admin    | Admin@123 | title3 | text3 |

#   @high
#   Scenario: TC_11: Delete an announcement
#     When User login with a valid credential: "<username>","<password>"
#     And User clicks on Annoucements on left menu
#     And User deletes the first announcement
#     Then The annoucement has been deleted successfully

#     Examples:
#       | username | password  |
#       | Admin    | Admin@123 |

#   @high
#   Scenario: TC_12: Add a new category
#     When User login with a valid credential: "<username>","<password>"
#     And User clicks on Annoucements on left menu
#     And User create new category
#     Then The new category has been created successfully

#     Examples:
#       | username | password  |
#       | Admin    | Admin@123 |

#   @high
#   Scenario: TC_13: Edit a new category
#     When User login with a valid credential: "<username>","<password>"
#     And User clicks on Annoucements on left menu
#     And User edit a category
#     Then The category has been updated successfully

#     Examples:
#       | username | password  |
#       | Admin    | Admin@123 |

#   @high
#   Scenario: TC_14: Delete a new category
#     When User login with a valid credential: "<username>","<password>"
#     And User clicks on Annoucements on left menu
#     And User delete a category
#     Then The category has been deleted successfully

#     Examples:
#       | username | password  |
#       | Admin    | Admin@123 |

#   @high
#   Scenario: TC_15: Create a new event
#     When User login with a valid credential: "<username>","<password>"
#     And User clicks on Events on left menu
#     And User create a new event
#     Then The new event has been created successfully

#     Examples:
#       | username | password  |
#       | Admin    | Admin@123 |

#   @high
#   Scenario: TC_18: Copy a new event
#     When User login with a valid credential: "<username>","<password>"
#     And User clicks on Events on left menu
#     And User makes a copy of a new event
#     Then The new event has been created successfully

#     Examples:
#       | username | password  |
#       | Admin    | Admin@123 |

#   @high
#   Scenario: TC_19: Update an event
#     When User login with a valid credential: "<username>","<password>"
#     And User clicks on Events on left menu
#     And User updates an event
#     Then The event has been updated successfully

#     Examples:
#       | username | password  |
#       | Admin    | Admin@123 |

#   @high
#   Scenario: TC_20: Delete an event
#     When User login with a valid credential: "<username>","<password>"
#     And User clicks on Events on left menu
#     And User removes an event
#     Then The event has been removed successfully

#     Examples:
#       | username | password  |
#       | Admin    | Admin@123 |

#   @high
#   Scenario: TC_21: Create a new calendar
#     When User login with a valid credential: "<username>","<password>"
#     And User clicks on Events on left menu
#     And User creates a new calendar
#     Then The new calendar has been created successfully

#     Examples:
#       | username | password  |
#       | Admin    | Admin@123 |

#   @high
#   Scenario: TC_22: Edit a calendar
#     When User login with a valid credential: "<username>","<password>"
#     And User clicks on Events on left menu
#     And User updates a new calendar
#     Then The calendar has been updated successfully

#     Examples:
#       | username | password  |
#       | Admin    | Admin@123 |

#   @high 
#   Scenario: TC_23: Edit a calendar
#     When User login with a valid credential: "<username>","<password>"
#     And User clicks on Events on left menu
#     And User removes a new calendar
#     Then The calendar has been deleted successfully

#     Examples:
#       | username | password  |
#       | Admin    | Admin@123 |
