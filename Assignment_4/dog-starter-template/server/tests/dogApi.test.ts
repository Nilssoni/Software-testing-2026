import { describe, expect, test } from 'vitest';
import request from 'supertest';
import { app } from '../index';



describe('dogApi', () => {

    // POSITIVE TEST

    test('GET random dog image - success', async () => {
        const response = await request(app)
            .get('/api/dogs/random');

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('success', true);
        expect(response.body).toHaveProperty('data');
        expect(response.body.data).toHaveProperty('imageUrl');
        expect(response.body.data).toHaveProperty('status', 'success');
    });

    // NEGATIVE TEST

    test('GET random dog image - failure', async () => {
        const response = await request(app)
            .get('/api/dogs/invalid');

        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty('success', false);
        expect(response.body).toHaveProperty('error', 'Route not found');
    });    
})