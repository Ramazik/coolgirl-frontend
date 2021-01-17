@setupApplicationTest
Feature: Games page - Viewing



Background:
  Given there are records of type "Games" with the following properties:
    -------------------------------------------------------------------------------------
    | id | name     | description | battery | is_default | language | size | screenshot |
    | 1  | "Game 1" | "1 desc"    | false   | false      | "eng"    | 128  | "1 scr"    |
    | 2  | "Game 2" | "2-1 desc"  | true    | true       | "eng"    | 64   | "2-1 scr"  |
    | 3  | "Game 2" | "2-2 desc"  | true    | false      | "rus"    | 64   | "2-2 scr"  |
    -------------------------------------------------------------------------------------



Scenario: Viewing cards view via URL
  When I visit URL "/games?view=cards"
  Then there should be NO Thumbs-View
  Then there should be a Cards-View
  Then there should be NO Compact-View
  And there should be 2 Game-Groups

  And the Name of the 1st Game-Group should be "Game 1"
  And the Screenshot of the 1st Game-Group should have HTML attr "src" with value "/1 scr"

  And there should be 1 Game in the 1st Game-Group
  And the checkbox Checkbox in the 1st Game in the 1st Game-Group should NOT be selected
  And the Description of the 1st Game in the 1st Game-Group should be "1 desc"
  And there should be NO Battery in the 1st Game-Group
  And the Language of the 1st Game in the 1st Game-Group should be "🇬🇧"
  And the Size of the 1st Game in the 1st Game-Group should be "128 KiB"

  And the Name of the 2nd Game-Group should be "Game 2"
  And the Screenshot of the 2nd Game-Group should have HTML attr "src" with value "/2-1 scr"

  And the checkbox Checkbox in the 1st Game in the 2nd Game-Group should be selected
  And the Description of the 1st Game in the 2nd Game-Group should be "2-1 desc"
  And there should be a Battery in the 1st Game in the 2nd Game-Group
  And the Language of the 1st Game in the 2nd Game-Group should be "🇬🇧"
  And the Size of the 1st Game in the 2nd Game-Group should be "64 KiB"

  And the checkbox Checkbox in the 2nd Game in the 2nd Game-Group should NOT be selected
  And the Description of the 2nd Game in the 2nd Game-Group should be "2-2 desc"
  And there should be a Battery in the 2nd Game in the 2nd Game-Group
  And the Language of the 2nd Game in the 2nd Game-Group should be "🇷🇺"
  And the Size of the 2nd Game in the 2nd Game-Group should be "64 KiB"
