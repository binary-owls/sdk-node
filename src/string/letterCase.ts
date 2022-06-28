export function isLowerCaseLetter(str: string) {
  if (typeof str !== 'string') {
    return false
  }
  if (str.length !== 1) {
    throw Error(`input should be length of 1: "${str}"`)
  }

  // a-z 97-122
  const charCode = str.charCodeAt(0)
  return 97 <= charCode && charCode <= 122
}

export function isUpperCaseLetter(str: string) {
  if (typeof str !== 'string') {
    return false
  }
  if (str.length !== 1) {
    throw Error(`input should be length of 1: "${str}"`)
  }

  // A-Z 65-90
  const charCode = str.charCodeAt(0)
  return 65 <= charCode && charCode <= 90
}

/**
 * Converts a string in camelCase to snake_case
 *
 * @param str
 */
export function camelToSnake(str: string) {
  let output = str.charAt(0)
  for (let i = 1; i < str.length; i++) {

    const char = str.charAt(i)
    if (isUpperCaseLetter(char)) {

      const previousChar = str.charAt(i - 1)
      if (isUpperCaseLetter(previousChar)) {

        const nextChar = str.charAt(i + 1)
        if (isLowerCaseLetter(nextChar)) {
          // Scenario:
          // 2 UPPER_CASE followed by a lower_case letter, e.g. LOREMIpsum at "MIp"
          output += '_'
        }

      } else {
        // NOTE in this conditional, it can be
        //  (1) previous char is lower_case
        //  (2) previous char is not a letter!

        // Scenario:
        // lower_case char followed by UPPER_CASE char, e.g. loremIpsum at "mI"
        output += '_'
      }
    }

    output += char
  }
  return output.toLowerCase()
}

// Discussion about camelCase for acronyms/abbreviations https://stackoverflow.com/questions/15526107/acronyms-in-camelcase
export function snakeToCamel(str: string) {
  if (!str.includes('_')) {
    return str
  }

  const tokens = str
    .split('_')
    .map((token, i) => {
      if (i === 0) {
        return token.toLowerCase()
      }

      if (token.length) {
        const firstChar = token[0].toUpperCase()

        // The rest of the characters should be lower-case, e.g. gRPC_URI -> grpcUri
        const restOfToken = token.slice(1).toLowerCase()

        return `${firstChar}${restOfToken}`
      }

      return token
    })

  return tokens.join('')
}
