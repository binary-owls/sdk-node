export function generateRandomString(length: number): string {
  // Generate a random number between 0 and length
  const splitIndex = Math.floor(Math.random() * (length + 1))

  // Generate the first part of the string
  let firstPart = ''
  for (let i = 0; i < splitIndex; i++) {
    const randomChar = String.fromCharCode(97 + Math.floor(Math.random() * 26))
    firstPart += randomChar
  }

  // Generate the second part of the string
  let secondPart = ''
  for (let i = 0; i < length - splitIndex; i++) {
    const randomDigit = Math.floor(Math.random() * 10)
    secondPart += randomDigit
  }

  // Concatenate the two parts together
  const result = firstPart + secondPart

  return result
}