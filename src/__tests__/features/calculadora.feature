Feature: Calculator
  As a user
  I want to perform basic math operations
  So that I can do simple calculations

  Scenario: Add two numbers
    Given I have the numbers 5 and 7
    When I add them
    Then the result should be 12

  Scenario: Subtract two numbers
    Given I have the numbers 10 and 4
    When I subtract them
    Then the result should be 6
