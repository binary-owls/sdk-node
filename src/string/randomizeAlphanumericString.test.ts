import { randomizeAlphanumericString } from '../'

describe('generateRandomString', () => {

  test('throws an error when length is less than 1', () => {
    expect(() => randomizeAlphanumericString(0)).toThrow('Length must be at least 1')
  })

  test('throws an error when length is greater than or equal to 32', () => {
    expect(() => randomizeAlphanumericString(32)).toThrow('Length must be less than 32, otherwise just use an UUID')
  })

  test('returns a string', () => {
    const result = randomizeAlphanumericString(10)
    expect(typeof result).toBe('string')
  })

  test('returns a string of correct length', () => {
    const SIZE = 10
    const result = randomizeAlphanumericString(SIZE)
    expect(result.length).toBe(SIZE)
  })

  test('returns a string containing only alphabets if length is 3 or less', () => {
    for (let size = 1; size <= 3; size++) {
      for (let i = 0; i < 100; i++) {
        const result = randomizeAlphanumericString(size)
        expect(result).toMatch(/^[a-z]{1,3}$/)
        // check size is correct
        expect(result.length).toBe(size)
      }
    }
  })

  test('returns a string containing only alphanumeric characters', () => {
    for (let size = 4; size < 9; size++) {
      for (let i = 0; i < 100; i++) {
        const result = randomizeAlphanumericString(size)
        expect(result).toMatch(/^[a-z]{3,8}[0-9]*$/)
        // check size is correct
        expect(result.length).toBe(size)
      }
    }
  })

  test('returns a string containing only alphanumeric characters for length of 9 or more', () => {
    for (let size = 9; size < 15; size++) {
      for (let i = 0; i < 100; i++) {
        const result = randomizeAlphanumericString(size)
        expect(result).toMatch(/^[a-z]{3,}[0-9]{3,}$/)
        // check size is correct
        expect(result.length).toBe(size)
      }
    }
  })

  test('when 1 is passed, returns a string of length 1', () => {
    for (let i = 0; i < 100; i++) {
      const result = randomizeAlphanumericString(1)
      expect(result.length).toBe(1)
    }
  })

})