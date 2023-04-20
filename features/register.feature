Feature: Register API

  Scenario: Successful registration
    Given I have a valid registration payload
    When I send a POST request to register"
    Then I should receive a status code of 200
    And the response should include an access token

  Scenario: Unsuccessful registration with invalid email and password
    Given I have an invalid registration payload
    When I send a POST request to register"
    Then I should receive a status code of 400
