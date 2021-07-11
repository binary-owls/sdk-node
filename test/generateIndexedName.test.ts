import { generateIndexedName } from '../src'

describe('generateIndexedName', () => {
  let existing: string[]
  beforeEach(async () => {
    existing = [
      'photo',
      'photo2000',
      'photo-30',
      'photo-2',
      'photo-3',
      'photo-6',
      'alpha',
    ]
  })

  it('generates indexed name when something similar already exists', async () => {
    await expect(generateIndexedName({
      existing,
      name: 'photo',
    })).toBe('photo-31')
  })

  it('simply returns name if it does not yet exist', async () => {
    await expect(generateIndexedName({
      existing,
      name: 'pic',
    })).toBe('pic')
  })

  it('handles empty string', async () => {
    await expect(generateIndexedName({
      existing: [],
      name: '',
    })).toBe('')
  })

  it('handles empty string with existing empty string', async () => {
    await expect(generateIndexedName({
      existing: [''],
      name: '',
    })).toBe('1')
  })
})
