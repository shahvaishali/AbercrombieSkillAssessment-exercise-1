jest.setTimeout(10000); // in milliseconds
const request = require('supertest')
describe('Get user data endpoint', () => {

    
    it('Should get user data', async () => {
        const res = await request('https://5dc588200bbd050014fb8ae1.mockapi.io/assessment')
            .get('/')
        expect(res.statusCode).toEqual(200)
    })
})

describe('Get user data image', () => {
    it('Should get user data', async () => {
        const res = await request('https://5dc588200bbd050014fb8ae1.mockapi.io/assessment')
            .get('/')

        const body = res.body
        let imgres = await request(body[0].avatar)
            .get('/')
        expect(imgres.statusCode).toEqual(200)

    })
})