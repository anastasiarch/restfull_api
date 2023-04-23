const { Given, When, Then } = require('cucumber');
const config = require('../../config/config');
const request = require('supertest')(config.baseUrl);
const { expect } = require('chai');

let response;

Given('the user API is available', () => {});

When('I make a GET request to {string}', async (url) => {
  response = await request.get(url);
});

Then('I should receive a response with status code {int}', (statusCode) => {
  expect(response.status).to.equal(statusCode);
});

Then('the response should include a list of users', () => {
  expect(response.body.data).to.be.an('array');
});