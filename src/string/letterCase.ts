export function isLowerCaseLetter(str: string) {
  if (typeof str !== 'string') {
    return false
  }
  if (!str.length) {
    return false
  }
  if (str.length !== 1) {
    throw Error(`string length too long: "${str}"`)
  }

  // a-z 97-122
  const charCode = str.charCodeAt(0)
  return 97 <= charCode && charCode <= 122
}

export function isUpperCaseLetter(str: string) {
  if (typeof str !== 'string') {
    return false
  }
  if (!str.length) {
    return false
  }
  if (str.length !== 1) {
    throw Error(`string length too long: "${str}"`)
  }

  // A-Z 65-90
  const charCode = str.charCodeAt(0)
  return 65 <= charCode && charCode <= 90
}

export function isDigit(str: string) {
  if (typeof str !== 'string') {
    return false
  }
  if (!str.length) {
    return false
  }
  if (str.length !== 1) {
    throw Error(`string length too long: "${str}"`)
  }

  // 0-9 is ASCII 48-57
  const charCode = str.charCodeAt(0)
  return 48 <= charCode && charCode <= 57
}

/**
 * Converts a string to snake_case.
 *
 * We cannot use lodash/snakeCase because it adds extra underscores between digits
 * e.g. given `k8sCluster`
 * Lodash gives `k_8_s_cluster`
 * But we want `k8s_cluster`
 *
 * @param str
 */
export function toSnakeCase(inputString: string) {
  const str = inputString.replace(/[\W_]+/g, '_')
  let output = str.charAt(0)
  for (let i = 1; i < str.length; i++) {

    const char = str.charAt(i)
    if (isUpperCaseLetter(char)) {
      for (let j = i - 1; j >= 0; j--) {
        const prevChar = str.charAt(j)
        if (isLowerCaseLetter(prevChar)) {
          // Scenario (most common):
          // lower_case char followed by UPPER_CASE char
          // e.g. loremIpsum at "mI"
          output += '_'
          break

        } else if (isUpperCaseLetter(prevChar)) {
          // Scenario (less common):
          // 2 UPPER_CASE followed by a lower_case letter
          // e.g. LOREMIpsum at "MIp"
          for (let k = i + 1; k < str.length; k++) {
            const followingChar = str.charAt(k)
            if (isUpperCaseLetter(followingChar)) {
              // do nothing
              break
            } else if (isLowerCaseLetter(followingChar)) {
              output += '_'
              break
            } else if (isDigit(followingChar)) {
              // keep going
            } else {
              break
            }
          }
          break

        } else if (isDigit(prevChar)) {
          // keep going
        } else {
          // probably a punctuation, so stop
          break
        }
      }
    }

    output += char
  }
  return output.toLowerCase()
}

// NOTE: lodash/camelCase works as expected, no need to implement this
// Discussion about camelCase for acronyms/abbreviations https://stackoverflow.com/questions/15526107/acronyms-in-camelcase

// export function toCamelCase(str: string) {
//   const tokens = str
//     .split(/\W/)
//     .map((token, i) => {
//
//       const firstLetter = token[0]
//       const otherLetters = token.substr(1)
//
//       if (i === 0) {
//         return `${firstLetter.toLowerCase()}${otherLetters}`
//       }
//
//       if (token.length) {
//         const firstChar = token[0].toUpperCase()
//
//         // The rest of the characters should be lower-case, e.g. gRPC_URI -> grpcUri
//         const restOfToken = token.slice(1).toLowerCase()
//
//         return `${firstChar}${restOfToken}`
//       }
//
//       return token
//     })
//
//   return tokens.join('')
// }
