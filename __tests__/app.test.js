
const app = require('../index.js');
const supertest = require('supertest');
const request = supertest(app);

const data = require('../data.js');




it('gets the tears endpoint', async () => {
  const response = await request.get('/tears');

  expect(response.status).toBe(200);
  expect(response.body).toEqual(data);
});

it('gets the tears team endpoint', async () => {
  const response = await request.get('/tears/8');

  expect(response.status).toBe(200);
  expect(response.body).toEqual(data[0]);
});



