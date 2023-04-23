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
    const users = response.body.data;
    expect(users).to.be.an('array');
    expect(users).to.not.be.empty;
    expect(users[0]).to.have.property('id');
    expect(users[0]).to.have.property('email');
    expect(users[0]).to.have.property('first_name');
    expect(users[0]).to.have.property('last_name');
    expect(users[0]).to.have.property('avatar');
});