const chai = require('chai');
const chaiHttp = require('chai-http');
const faker = require('faker');

chai.use(chaiHttp);

describe('Register API', () => {
  describe('Successful registration', () => {
    it('should register a user and return a token', async () => {
      const payload = {
        email: 'eve.holt@reqres.in',
        password: 'pistol',
      };

      const response = await chai.request('https://reqres.in/api')
        .post('/register')
        .send(payload);

      chai.expect(response).to.have.status(200);
      chai.expect(response.body).to.have.property('token');
    });
  });

  describe('Unsuccessful registration with invalid email and password', () => {
    it('should return a 400 error', async () => {
      const payload = {
        email: faker.internet.email(),
        password: 'pistol',
      };

      const response = await chai.request('https://reqres.in/api')
        .post('/register')
        .send(payload);

      chai.expect(response).to.have.status(400);
    });
  });
});
