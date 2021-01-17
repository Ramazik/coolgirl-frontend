@setupApplicationTest
Feature: Games page - Viewing



Background:
  Given server.logging
  Given there are records of type "Games" with the following properties:
    -------------------------------------------------------------------------------------
    | id | name     | description | battery | is_default | language | size | screenshot |
    | 1  | "Game 1" | "1 desc"    | false   | false      | "eng"    | 128  | "1 scr"    |
    | 2  | "Game 2" | "2 desc"    | true    | true       | "rus"    | 64   | "2 scr"    |
    -------------------------------------------------------------------------------------



Scenario: Viewing thumbs view
  When I visit URL "/games"
  Then there should be a Thumbs-View
  Then there should be NO Cards-View
  Then there should be NO Compact-View
  And there should be 2 Games

  And the checkbox Checkbox in the 1st Game should NOT be selected
  And the Name of the 1st Game should be "Game 1"
  And the Description of the 1st Game should be "1 desc"
  And there should be NO Battery in the 1st Game
  And the Language of the 1st Game should be "🇬🇧"
  And the Size of the 1st Game should be "128 KiB"
  And the Screenshot of the 1st Game should have HTML attr "src" with value "/1 scr"

  And the checkbox Checkbox in the 2nd Game should be selected
  And the Name of the 2nd Game should be "Game 2"
  And the Description of the 2nd Game should be "2 desc"
  And there should be a Battery in the 2nd Game
  And the Language of the 2nd Game should be "🇷🇺"
  And the Size of the 2nd Game should be "64 KiB"
  And the Screenshot of the 2nd Game should have HTML attr "src" with value "/2 scr"
