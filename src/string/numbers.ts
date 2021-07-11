// source https://stackoverflow.com/questions/175739/built-in-way-in-javascript-to-check-if-a-string-is-a-valid-number/175787#175787
export const isNumeric = (input: any) => {
  if (typeof input == 'number') return true
  if (typeof input != 'string') return false // we only process strings!
  // @ts-ignore
  return !isNaN(input) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(input)) // ...and ensure strings of whitespace fail
}

// Converts a number into a placing
export function stringifyPlacing(n: number) {
  if (typeof n !== 'number') {
    return n
  }
  // If float, truncate the decimals
  n = (n | 0)


  let suffix: string
  if (11 <= n && n <= 13) {
    suffix = 'th'
  } else {
    const lastDigit = n % 10
    switch (lastDigit) {
      case 1:
        suffix = 'st'
        break
      case 2:
        suffix = 'nd'
        break
      case 3:
        suffix = 'rd'
        break
      default:
        suffix = 'th'
        break
    }
  }
  return n + suffix
}

