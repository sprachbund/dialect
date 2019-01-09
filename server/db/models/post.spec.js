const {expect} = require('chai')
const db = require('../index')
const Post = db.model('post')

describe('Post model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })
  // placeholder for future complexity
})
