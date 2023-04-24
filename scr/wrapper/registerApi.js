const checkStatusCode = require('../helpers/checkStatusCode');
const supertest = require("supertest");
const endpoints = require('../../config/endpoints.json');


class RegisterApi {
  constructor(baseUrl) {
    this.request = supertest(baseUrl);
  }

  async register(payload) {
    const response = await this.request.post(endpoints.register).send({
      email: payload.email,
      password: payload.password,
    });
  
    return response;
  }
}

module.exports = RegisterApi;
