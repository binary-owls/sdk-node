import { camelToSnake, isLowerCaseLetter, isUpperCaseLetter, snakeToCamel } from './letterCase'

describe('letter cases', () => {

  describe('isLowerCaseLetter()', () => {
    it('input is not a string', () => {
      // @ts-ignore
      expect(isLowerCaseLetter(9000)).toBe(false)
    })

    it('input is lower_case', () => {
      expect(isLowerCaseLetter('a')).toBe(true)
    })

    it('input is UPPER_CASE letter', () => {
      expect(isLowerCaseLetter('A')).toBe(false)
    })

    it('input is length of 2+', () => {
      expect(() => isLowerCaseLetter('aBc')).toThrow(/.*/)
    })

    it('input is not a letter', () => {
      expect(isLowerCaseLetter('1')).toBe(false)

      // @ is char code 64
      expect(isLowerCaseLetter('@')).toBe(false)

      // [ is char code 91
      expect(isLowerCaseLetter('[')).toBe(false)

      // ` is char code 96
      expect(isLowerCaseLetter('`')).toBe(false)

      // { is char code 123
      expect(isLowerCaseLetter('{')).toBe(false)
    })
  })

  describe('isUpperCaseLetter()', () => {
    it('input is not a string', () => {
      // @ts-ignore
      expect(isUpperCaseLetter(9000)).toBe(false)
    })

    it('input is length of 2+', () => {
      expect(() => isUpperCaseLetter('aBC')).toThrow(/.*/)
    })

    it('input is lower_case', () => {
      expect(isUpperCaseLetter('a')).toBe(false)
    })

    it('input is UPPER_CASE letter', () => {
      expect(isUpperCaseLetter('A')).toBe(true)
    })

    it('input is not a letter', () => {
      expect(isUpperCaseLetter('1')).toBe(false)

      // @ is char code 64
      expect(isUpperCaseLetter('@')).toBe(false)

      // [ is char code 91
      expect(isUpperCaseLetter('[')).toBe(false)

      // ` is char code 96
      expect(isUpperCaseLetter('`')).toBe(false)

      // { is char code 123
      expect(isUpperCaseLetter('{')).toBe(false)
    })
  })

  describe('convert snake_case to camelCase', () => {
    it('input is already camelCase', () => {
      expect(snakeToCamel('capitalHillRoad')).toBe('capitalhillroad')
    })

    it('input is all lower_case', () => {
      expect(snakeToCamel('capital_hill_road')).toBe('capitalHillRoad')
    })

    it('input has PascalCase mixed with snake_case', () => {
      expect(snakeToCamel('Capital_Hill_Road')).toBe('capitalHillRoad')
    })

    it('input has mixed cases', () => {
      expect(snakeToCamel('cAPITal_hIlL_RoAd')).toBe('capitalHillRoad')
    })

    it('input is ALL_CAPS', () => {
      expect(snakeToCamel('CAPITAL_HILL_ROAD')).toBe('capitalHillRoad')
    })

    it('input has first word in ALL_CAPS', () => {
      expect(snakeToCamel('CAPITAL_hill_road')).toBe('capitalHillRoad')
    })
  })

  describe('convert camelCase to snake_case', () => {
    it('input is already snake_case', () => {
      expect(camelToSnake('capital_hill_road')).toBe('capital_hill_road')
    })

    it(`is an acronym`, () => {
      expect(camelToSnake('capitalHILLRoad')).toBe('capital_hill_road')
    })

    it('input is PascalCase', () => {
      expect(camelToSnake('CapitalHillRoad')).toBe('capital_hill_road')
    })

    it('input has number after UPPER_CASE', () => {
      expect(camelToSnake('myI8nName')).toBe('my_i8n_name')
    })

    it('input has number before lower_case letter', () => {
      expect(camelToSnake('i8nName')).toBe('i8n_name')
    })

    it('input has number before UPPER_CASE letter', () => {
      expect(camelToSnake('web3Name')).toBe('web3_name')
    })
  })

})
