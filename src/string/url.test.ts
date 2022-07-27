import { formatUrlQuery, isUnsafeUrl, parseUrlQuery } from './url'

describe('formatUrlQuery()', () => {
  it('formats normal object', () => {
    expect(formatUrlQuery({ a: 1, b: 'c' })).toBe('a=1&b=c')
  })
})

describe('hasInvalidUrlCharacters()', () => {
  it('is valid URL', () => {
    expect(isUnsafeUrl(`http://example.com/?a=1&b=c`)).toEqual(false)
  })

  it('is valid URL', () => {
    expect(isUnsafeUrl(`https://challonge.com/users/%EC%98%A4%EC%A0%80%EC%94%A8`)).toEqual(false)
  })

  it('is invalid URL', () => {
    expect(isUnsafeUrl(`https://challonge.com/users/7_IツI_Г`)).toEqual(true)
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


