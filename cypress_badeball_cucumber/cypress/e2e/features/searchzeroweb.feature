Feature: Search feature zeroweb

    Scenario: Make sure the search feature on the web can work
        When User access homepage
        Then User see a search bar and type keyword
