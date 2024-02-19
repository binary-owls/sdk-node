import { generateRandomString } from './generateAlphanumericString'

describe('generateRandomString', () => {

  test('throws an error when length is less than 1', () => {
    expect(() => generateRandomString(0)).toThrow('Length must be at least 1')
  })

  test('throws an error when length is greater than or equal to 32', () => {
    expect(() => generateRandomString(32)).toThrow('Length must be less than 32, otherwise just use an UUID')
  })

  test('returns a string', () => {
    const result = generateRandomString(10)
    expect(typeof result).toBe('string')
  })

  test('returns a string of correct length', () => {
    const SIZE = 10
    const result = generateRandomString(SIZE)
    expect(result.length).toBe(SIZE)
  })

  test('returns a string containing only alphanumeric characters', () => {
    for (let size = 1; size < 10; size++) {
      for (let i = 0; i < 100; i++) {
        const result = generateRandomString(size)
        expect(result).toMatch(/^[a-z]+[0-9]*$/)
        // check size is correct
        expect(result.length).toBe(size)
      }
    }
  })

  test('when 1 is passed, returns a string of length 1', () => {
    for (let i = 0; i < 100; i++) {
      const result = generateRandomString(1)
      expect(result.length).toBe(1)
    }
  })

})