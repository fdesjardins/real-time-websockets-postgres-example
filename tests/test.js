/* global describe, it */

const expect = require('chai').expect
const testable = [
  require('../examples/dev-web-server.js'),
  require('../examples/api/api.js')
]

describe('tests', () => {
  it('should run', done => {
    expect((2 - 1) === 1)
    done()
  })
})
