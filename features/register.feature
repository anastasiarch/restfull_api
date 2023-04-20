Feature: Register API

  Scenario: Register a user
    Given I have a valid registration payload
    When I send a POST request to register"
    Then I should receive a status code of 200
    And the response should include an access token