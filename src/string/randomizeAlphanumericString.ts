/**
 * Generate a pseudo-random string with a given length. The string always start with alphabets and followed by numbers.
 *
 * It tries to use Rule of Three when `length` grows by ensuring:
 * - 3 alphabets at the start and/or
 * - 3 numbers at the end
 *
 * Possibility estimates by AI:
 * NOTE: length=9 is actually smaller
 * * 1 = 26^1                = 26
 * * 2 = 26^2                = 676
 * * 3 = 26^3                = 17576
 * * 4 = 26^3 * 36^1         = 632736
 * * 5 = 26^3 * 36^2         = 22778496
 * * 6 = 26^3 * 36^3         = 820025856
 * * 7 = 26^3 * 36^4         = 29520930816
 * * 8 = 26^3 * 36^5         = 1062753509376
 * * 9 = 26^3 * 36^3 * 10^3  = 820025856000
 * * 10 = 26^3 * 36^4 * 10^3 = 29520930816000
 * * 11 = 26^3 * 36^5 * 10^3 = 1.06275E+15
 * * 12 = 26^3 * 36^6 * 10^3 = 3.82591E+16
 * * 13 = 26^3 * 36^7 * 10^3 = 1.37733E+18
 * * 14 = 26^3 * 36^8 * 10^3 = 4.95838E+19
 * * 15 = 26^3 * 36^9 * 10^3 = 1.78502E+21
 *
 * @param length
 */
export function randomizeAlphanumericString(length: number): string {

  if (length < 1) {
    throw new Error('Length must be at least 1')
  }

  if (length >= 32) {
    throw new Error('Length must be less than 32, otherwise just use an UUID')
  }

  //////////////////////////////////////////////////////
  // part 1: alphabetical substring
  //////////////////////////////////////////////////////

  // use the Rule of Odds to improve UX
  const offset = Math.min(3, length)
  const suffixOffset = length < 9 ? 0 : 3

  const alphaLength = offset + Math.round(Math.random() * (length - offset - suffixOffset))

  // generate a-z
  let part1 = ''
  for (let i = 0; i < alphaLength; i++) {
    const randomChar = String.fromCharCode(97 + Math.floor(Math.random() * 26))
    part1 += randomChar
  }


  //////////////////////////////////////////////////////
  // part 2: numerical substring
  //////////////////////////////////////////////////////

  // generate 0-9
  // e.g. if numericLength is 3, then value will be a random number between 100 and 999
  let part2
  const numericLength = length - alphaLength
  if (numericLength < 1) {
    // nothing to do
    part2 = ''
  } else {
    const offset = Math.pow(10, numericLength - 1)
    const randomNum = Math.floor(Math.random() * offset * 9) + offset
    part2 = Math.floor(randomNum).toString()
  }

  // Concatenate the two parts together
  return part1 + part2
}