const supertest = require('supertest');
const { expect } = require('chai');
const { baseUrl } = require('../config/config');
const endpoints = require('../config/endpoints.json');


const request = supertest(baseUrl);

describe("Users API", () => {
  describe("List users", () => {
    it("should return a list of users with 200 status code", async () => {
      const { status, body: { data } } = await request.get(endpoints.users);

      expect(status).to.equal(200);
      expect(data).to.be.an('array');
    });
  });
});
