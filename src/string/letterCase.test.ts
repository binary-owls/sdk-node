import { toSnakeCase, isLowerCaseLetter, isUpperCaseLetter } from './letterCase'

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

  describe('toSnakeCase()', () => {
    it('input is already snake_case', () => {
      expect(toSnakeCase('capital_hill_road')).toBe('capital_hill_road')
    })

    it(`numbers do not add extra _underscore_ (unlike lodash/snakeCase)`, () => {
      expect(toSnakeCase('ipv4Address')).toBe('ipv4_address')
      expect(toSnakeCase('k8sClusterId')).toBe('k8s_cluster_id')
    })

    it('input with random punctuation', () => {
      expect(toSnakeCase('k8s!_@*()cluster_!_ID')).toBe('k8s_cluster_id')
    })

    it('punctuation at beginning/end', () => {
      expect(toSnakeCase('!!!ipv4Address((*))')).toBe('_ipv4_address_')
    })

    it('acronyms', () => {
      expect(toSnakeCase('LOREMIpsum')).toBe('lorem_ipsum')
    })

    it('length of 2', () => {
      expect(toSnakeCase('aK')).toBe('a_k')
      expect(toSnakeCase('Ak')).toBe('ak')
      expect(toSnakeCase('AK')).toBe('ak')
      expect(toSnakeCase('ak')).toBe('ak')
    })

    it(`input is has other "cases"`, () => {
      expect(toSnakeCase('capital_hillRoad')).toBe('capital_hill_road')
    })

    it(`is an acronym`, () => {
      expect(toSnakeCase('capitalHILLRoad')).toBe('capital_hill_road')
    })

    it('input is PascalCase', () => {
      expect(toSnakeCase('CapitalHillRoad')).toBe('capital_hill_road')
    })

    it('input has number after UPPER_CASE', () => {
      expect(toSnakeCase('myI8nName')).toBe('my_i8n_name')
    })

    it('input has number before lower_case letter', () => {
      expect(toSnakeCase('i8nName')).toBe('i8n_name')
    })

    it('input has number before UPPER_CASE letter', () => {
      expect(toSnakeCase('web3Name')).toBe('web3_name')
    })

    it('punctuation mixed with UPPER_CASE letters', () => {
      expect(toSnakeCase('K8S__Cluster')).toBe('k8s_cluster')
    })

    it('preceding characters are not alphabetical', () => {
      expect(toSnakeCase('32__Ipv4')).toBe('32_ipv4')
    })

    it('preceding characters are not letters', () => {
      expect(toSnakeCase('32IPV4')).toBe('32ipv4')
      expect(toSnakeCase('32ipv4')).toBe('32ipv4')
    })
  })

})
