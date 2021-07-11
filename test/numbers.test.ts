import { isNumeric, stringifyPlacing } from '../src'

describe('isNumber()', () => {
  it('does NOT handle comma', async () => {
    await expect(isNumeric('33,538')).toBe(false)
  })
  it('handle stringified int', async () => {
    await expect(isNumeric('392384928')).toBe(true)
  })
  it('handle stringified float', async () => {
    await expect(isNumeric('33.538')).toBe(true)
  })
  it('handle empty string', async () => {
    await expect(isNumeric('')).toBe(false)
  })
  it('handle whitespace', async () => {
    await expect(isNumeric(' \t')).toBe(false)
  })
  it('handle words', async () => {
    await expect(isNumeric('hello word')).toBe(false)
  })
  it('handle array', async () => {
    await expect(isNumeric([])).toBe(false)
  })
  it('handle object', async () => {
    await expect(isNumeric({})).toBe(false)
  })
  it('handle bool', async () => {
    await expect(isNumeric(true)).toBe(false)
  })
})

describe('stringifyPlacing()', () => {
  it('truncates a float', async () => {
    await expect(stringifyPlacing(123.45)).toBe('123rd')
  })
  it('only works on numbers', async () => {
    // @ts-ignore
    await expect(stringifyPlacing('nada')).toBe('nada')
  })
  it('1st place', async () => {
    await expect(stringifyPlacing(1)).toBe('1st')
  })
  it('2nd place', async () => {
    await expect(stringifyPlacing(2)).toBe('2nd')
  })
  it('3rd place', async () => {
    await expect(stringifyPlacing(3)).toBe('3rd')
  })
  it('4th place', async () => {
    await expect(stringifyPlacing(4)).toBe('4th')
  })
  it('place 11, 12, 13', async () => {
    await expect(stringifyPlacing(11)).toBe('11th')
    await expect(stringifyPlacing(12)).toBe('12th')
    await expect(stringifyPlacing(13)).toBe('13th')
  })
  it('88th place', async () => {
    await expect(stringifyPlacing(88)).toBe('88th')
  })
  it('works for big number', async () => {
    await expect(stringifyPlacing(33538)).toBe('33538th')
  })
})
