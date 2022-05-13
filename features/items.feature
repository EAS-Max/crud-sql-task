Feature: Item testing

Scenario Outline: get items
When I send a GET request to http://localhost:4000/api/items
Then I receive a status code of 200

Scenario Outline: update
When I send PATCH request with {"name": "drink"} to http://localhost:4000/api/items/1
Then I receive a status code of 200

Scenario Outline: get items by id 
When I send a GET request to http://localhost:4000/api/items/2
Then I receive a response name of milk


Scenario Outline: adding contact
When I send POST request with a {"name": "boomPow"} to http://localhost:4000/api/items
Then I receive a status code of 200

Scenario Outline: delete by ID 
When I send a DELETE request to http://localhost:4000/api/items/5
Then I receive a status code of 200