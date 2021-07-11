import { obfuscate } from '../src'

describe('obfuscate()', () => {

  it('hides long string', () => {
    expect(obfuscate('abcdefg')).toBe('abcd*****')
  })

  it('hides short string', () => {
    expect(obfuscate('abcd')).toBe('a*****')
  })

  it('hides entire string if too short', () => {
    expect(obfuscate('abc')).toBe('*****')
  })

  it('hides empty string', () => {
    expect(obfuscate('')).toBe('*****')
  })

})
