// https://stackoverflow.com/questions/15526107/acronyms-in-camelcase
export function snakeToCamel(str: string) {
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

export function camelToSnake(str: string) {
  // Everything will be lower-case, so our prerogative is to insert underscores
// The default example is a "negative edge" i.e. lower_case char followed by UPPER_CASE char
  for (let i = 1; i < str.length; i++) {
    // const firstCharCode = str.charCodeAt(i - 1)
    const secondCharCode = str.charCodeAt(i)
    if (65 <= secondCharCode && secondCharCode <= 90) {
      // A-Z 65-90
      // a-z 97-122
    }


    // e.g. porousGANScientist -> porous_gan
    const ch = str.charAt(i)
    if (ch) {

    }
  }
}

