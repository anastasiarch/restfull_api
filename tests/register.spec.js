const config = require('../config/config');
const request = require('supertest')(config.baseUrl);

describe('Register API', () => {
  let payload = null;
  let response = null;

  beforeAll(() => {
    payload = {
      email: 'eve.holt@reqres.in',
      password: 'pistol',
    };
  });

  it('should return a 200 status code and an access token', async () => {
    response = await request.post('/register').send(payload);

    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
  });
});
