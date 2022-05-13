const { Before, Given, When, Then } = require('@cucumber/cucumber');
const { assert } = require('chai');
const { response } = require('express');
const restHelper = require('../utils/restHelper.js');

When('I send a GET request to {}', async function (path) {
    const response = await restHelper.getData(`${path}`)
    this.response = response;
});

//When I send PATCH request with {"name": "drink"} to http://localhost:4000/api/categories/1
When('I send PATCH request with {} to {}', async function (data, path) {
    const response = await restHelper.patchData(`${path}`, JSON.parse(data));
    this.response = response;
});


When('I send POST request with a {} to {}', async function (data, url) {
    const response = await restHelper.postData(`${url}`, JSON.parse(data));
    this.response = response;
});

When('I send a DELETE request to {}', async function (path) {
    const response = await restHelper.deleteData(`${path}`);
    this.response = response;
});

Then('I receive a response name of {}', async function (status) {
    assert.equal(this.response.data.name, status);
});

Then('I receive a response of {}', async function (response) {
    assert.equal(this.response.data.response, response);
});


Then('I receive a status code of {}', async function (status) {
    assert.equal(this.response.status, status)
})


