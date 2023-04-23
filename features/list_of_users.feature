Feature: User API

Scenario: List users
    Given the user API is available
    When I make a GET request to "/users"
    Then I should receive a response with status code 200
    And the response should include a list of users