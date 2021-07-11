import { formatUrlQuery, parseUrlQuery } from './url'

describe('formatUrlQuery()', () => {
  it('formats normal object', () => {
    expect(formatUrlQuery({ a: 1, b: 'c' })).toBe('a=1&b=c')
  })
})

describe('parseUrlQuery()', () => {
  it('parses a URL', () => {
    expect(parseUrlQuery('http://example.com/?a=1&b=c')).toEqual({
      a: '1',
      b: 'c',
    })
  })
})


