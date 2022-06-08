import { snakeToCamel } from './letterCase'

describe('letter cases', () => {
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
    it('input is ALL_CAPS', () => {
      expect(snakeToCamel('CAPITAL_HILL_ROAD')).toBe('capitalHillRoad')
    })
    it('input has first word in ALL_CAPS', () => {
      expect(snakeToCamel('CAPITAL_hill_road')).toBe('capitalHillRoad')
    })
  })
})
