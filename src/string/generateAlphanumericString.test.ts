import { generateRandomString } from './generateAlphanumericString'

describe('generateRandomString', () => {
  test('returns a string', () => {
    const result = generateRandomString(10)
    expect(typeof result).toBe('string')
  })

  test('returns a string of correct length', () => {
    const length = 10
    const result = generateRandomString(length)
    expect(result.length).toBe(length)
  })

  test('returns a string containing only alphanumeric characters', () => {
    const result = generateRandomString(10)
    expect(result).toMatch(/^[a-z]+[0-9]*$/)
  })
})