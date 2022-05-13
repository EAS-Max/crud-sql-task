Feature: First feature


Scenario Outline: get categories
When I send a GET request to http://localhost:4000/api/categories
Then I receive a status code of 200

Scenario Outline: update
When I send PATCH request with {"name": "drink"} to http://localhost:4000/api/categories/1
Then I receive a status code of 200

Scenario Outline: get categories by id 
When I send a GET request to http://localhost:4000/api/categories/2
Then I receive a response name of food


Scenario Outline: adding contact
When I send POST request with a {"name": "boomPow"} to http://localhost:4000/api/categories
Then I receive a status code of 200
