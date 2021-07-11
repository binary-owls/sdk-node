const DELIMITER = '-'
const REGEX_SUFFIX_INDEX = /\b\d+$/

export interface IndexedNameOptions {
  existing: string[]
  name: string
}

export const generateIndexedName = ({ existing = [], name }: IndexedNameOptions) => {
  if (!existing.includes(name)) {
    return name
  }

  let max = 0
  existing.forEach(str => {
    const matches = str.match(REGEX_SUFFIX_INDEX)
    if (matches) {
      const number = parseInt(matches[0])
      if (number > max) {
        max = number
      }
    }
  })
  return `${name ? name + DELIMITER : ''}${max + 1}`
}
