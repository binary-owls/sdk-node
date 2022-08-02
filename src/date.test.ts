import { isValidDate } from './date'

describe('isValidate()', () => {
  it('detects date object', () => {
    expect(isValidDate(new Date())).toBe(true)
  })
  it('detects string', () => {
    expect(isValidDate('2020')).toBe(false)
  })
  it('detects invalid dates', () => {
    expect(isValidDate(new Date('invalid'))).toBe(false)
  })
  it('detects invalid types', () => {
    expect(isValidDate(null)).toBe(false)
    expect(isValidDate(true)).toBe(false)
    expect(isValidDate(123)).toBe(false)
  })
})
