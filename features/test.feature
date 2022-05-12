Feature: First feature


Scenario Outline: get categories
When I send a GET request to http://localhost:4000/api/categories
Then I receive a status code of 200