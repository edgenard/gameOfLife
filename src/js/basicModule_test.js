import {add} from './basicModule'
import {assert} from 'chai'

describe('Basic test', () => {
  it('bascially works', () => {
    assert.equal(add(1, 2), 3)
  })

  it('check for failing', () => {
    assert.equal(add(2, 3), 4)
  })
})
