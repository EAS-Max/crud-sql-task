const { Before, Given, When, Then } = require('@cucumber/cucumber');
const { assert } = require('chai');
const { response } = require('express');
const restHelper = require('../utils/restHelper.js');

When('I send a GET request to {}', async function (path) {
    const response = await restHelper.getData(`${path}`)
    console.log(response.status)
    this.response = response;
});

Then('I receive a status code of {}', async function (status) {
    assert.equal(this.response.status, status)
})