/**
 * Generate a random string with a given length
 *
 * The string always start with alphabets and followed by numbers
 *
 * It can have all alphabets but not all numbers, i.e. the first char is always a letter
 *
 * Possibility estimates by AI:
 * length 2 permutes 260
 * length 3 permutes 9360
 * length 4 permutes 269360
 * length 8 permutes 3391814799360
 * length 9 permutes 88213184783360
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

  // random number between 1 and length
  const alphaLength = Math.ceil(Math.random() * length)

  // a-z
  let part1 = ''
  for (let i = 0; i < alphaLength; i++) {
    const randomChar = String.fromCharCode(97 + Math.floor(Math.random() * 26))
    part1 += randomChar
  }


  //////////////////////////////////////////////////////
  // part 2: numerical substring
  //////////////////////////////////////////////////////

  // the number is always follows numerical
  // e.g. if the length is 3, then value will be a random number between 100 and 999
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