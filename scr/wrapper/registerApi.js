const checkStatusCode = require('../helpers/checkStatusCode');
const supertest = require("supertest");

class RegisterApi {
  constructor(baseUrl) {
    this.request = supertest(baseUrl);
  }

  async register(payload) {
    const response = await this.request.post("/register").send({
      email: payload.email,
      password: payload.password,
    });
  
    return response;
  }
}

module.exports = RegisterApi;
