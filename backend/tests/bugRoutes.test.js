
const request = require('supertest');
const app = require('../server');

describe('Bug API Routes', () => {
  it('should create a bug', async () => {
    const response = await request(app).post('/api/bugs').send({
      title: 'Bug 1',
      description: 'Sample Bug',
      status: 'open'
    });
    expect(response.status).toBe(201);
  });
});
