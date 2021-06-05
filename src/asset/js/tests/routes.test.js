
const request = require('supertest')
describe('Get user data endpoint', () => {
    it('Should get user data', async () => {
        const res = await request('https://5dc588200bbd050014fb8ae1.mockapi.io/assessment')
            .get('/')
        expect(res.statusCode).toEqual(200)
    })
})