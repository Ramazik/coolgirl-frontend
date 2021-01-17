@setupApplicationTest
Feature: Navigation


Scenario: Viewing
  When I visit URL "/"
  And there should be 2 Links
  And Link(home) should have HTML attr "href" with value "/"
  And Link(home) should have HTML class "active"
  And Link(games) should have HTML attr "href" with value "/games"
  And Link(games) should NOT have HTML class "active"



Scenario: Proceeding to games
  When I visit URL "/"
  And I click Link(games)
  Then I should be at URL "/games"
