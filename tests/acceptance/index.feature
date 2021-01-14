@setupApplicationTest
Feature: Index page


Scenario: Homepage renders
  When I visit URL "/"
  Then the Title should have text "Welcome."
