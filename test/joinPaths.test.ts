import { joinPaths } from '../src'

describe('joinPathsString()', () => {
  it('joins paths without slashes', () => {
    expect(joinPaths('a', 'b')).toBe('a/b')
  })
  it('joins paths with too many slashes',  () => {
    expect(joinPaths('a//', '//b')).toBe('a/b')
    expect(joinPaths('a', '//b')).toBe('a/b')
    expect(joinPaths('a/', '/b')).toBe('a/b')
    expect(joinPaths('/a//', '//b')).toBe('/a/b')
  })
  it('gets rid of trailing slash', () => {
    expect(joinPaths('a/', 'b/')).toBe('a/b')
  })
  it('joins URL and path', () => {
    expect(joinPaths('http://localhost', 'books')).toBe('http://localhost/books')
  })
  it('joins URL and path', () => {
    expect(joinPaths('http://example.com/', '/books')).toBe('http://example.com/books')
  })
})
