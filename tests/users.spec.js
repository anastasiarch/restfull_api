const config = require('../config/config');
const request = require("supertest")(config.baseUrl);
const chai = require('chai');

describe("Users API", () => {
  describe("List users", () => {
    it("should return a list of users with 200 status code", async () => {
      const response = await request.get("/users");

      chai.expect(response.status).to.equal(200);
      chai.expect(response.body.data).to.be.an("array");
    });
  });
});
