const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Post = db.model('post')

describe('Post routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/posts', () => {
    beforeEach(() => {
      return Post.create({
        content: 'Hello world!'
      })
    })

    it('GET /api/posts', async () => {
      const res = await request(app)
        .get('/api/posts')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].content).to.equal('Hello world!')
    })
  })
})
