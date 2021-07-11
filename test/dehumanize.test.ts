import { dehumanize } from '../src'

describe('dehumanizeString()', () => {
  it('converts a string to be URL safe', async () => {
    await expect(dehumanize('a-b-c')).toBe('a-b-c')
  })
  it('converts a string to be URL safe', async () => {
    await expect(dehumanize('a_b_-_c')).toBe('a-b-c')
  })
})
