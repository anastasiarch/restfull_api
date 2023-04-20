const { Given, When, Then } = require('cucumber');
const config = require('../../config/config');
const request = require('supertest')(config.baseUrl);
const { expect } = require('chai');


let payload = null;
let response = null;

Given('I have a valid registration payload', function () {
  payload = {
    email: 'eve.holt@reqres.in',
    password: 'pistol',
  };
});

When('I send a POST request to "/register"', async function () {
  response = await request.post('/register').send(payload);
});

Then('I should receive a status code of {int}', function (statusCode) {
  expect(response.status).to.equal(statusCode);
});

Then('the response should include an access token', function () {
  expect(response.body.token).to.exist;
});
