const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
const RegisterModel = require("../scr/models/register");
const RegisterApi = require("../scr/wrapper/registerApi");
const config = require("../config/config");
const testData = require("../tests/testData/registerPayload");

chai.use(chaiHttp);

describe("Register API", () => {
  let registerApi;

  before(() => {
    const baseUrl = config.baseUrl;
    registerApi = new RegisterApi(baseUrl);
  });

  describe("Successful registration", () => {
    let payload;

    before(() => {
      payload = new RegisterModel(testData.validUser);
    });

    it("should register a user and return a token", async () => {
      const response = await registerApi.register(payload);

      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("token");
    });
  });

  describe("Unsuccessful registration with invalid email and password", () => {
    let payload;

    before(() => {
      payload = new RegisterModel(testData.invalidUser);
    });

    it("should return a 400 error", async () => {
      const response = await registerApi.register(payload);

      expect(response).to.have.status(400);
    });
  });

  describe("Unsuccessful registration with email only", () => {
    let payload;

    before(() => {
      payload = new RegisterModel(testData.emailOnly);
    });

    it("should return a 400 error", async () => {
      const response = await registerApi.register(payload);

      expect(response).to.have.status(400);
    });
  });

  after(() => {
    // clean up the test environment
  });
});
