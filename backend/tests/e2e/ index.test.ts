import request from 'supertest';
import { createApp } from '../../src/createApp';

const app = createApp();

describe('GET /api/v1/users', () => {
	it('should return a list of users', async () => {
		const response = await request(app).get('/api/v1/users');
		expect(response.status).toBe(200);
		expect(response.body).toBeDefined();
		expect(response.body.data).toBeDefined();
		expect(response.body.data.length).toBeGreaterThan(0);
	});
});
