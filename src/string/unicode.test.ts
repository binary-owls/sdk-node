import { containsUnicode } from './unicode'

describe('isUnicodeCharacter()', () => {
  it('recognizes English to be false', () => {
    expect(containsUnicode('hello')).toBe(false)
  })
  it('recognizes Chinese', () => {
    expect(containsUnicode('卡文杯超级联赛 拳皇98个人赛')).toBe(true)
    expect(containsUnicode('love立诚')).toBe(true)
  })
  it('recognizes Japanese', () => {
    expect(containsUnicode('レジェンダー')).toBe(true)
    expect(containsUnicode('arutena 日本')).toBe(true)
  })
  it('punctuation can also be unicode e.g. |', () => {
    for (const char of `。丨？，／`) {
      expect(containsUnicode(char)).toBe(true)
    }
    expect(containsUnicode('SH100C丨DingChunQiu')).toBe(true)
  })
  it('unicode English characters', () => {
    expect(containsUnicode('Ｍ')).toBe(true)
    expect(containsUnicode('AG ＭCG Marlinpie (Cammy)')).toBe(true)
  })
})
