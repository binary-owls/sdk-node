export const encodeEmail = (email: string, key: number) => {
  if (typeof key !== 'number') {
    throw new Error('key is required')
  }

  // Hex encode the key
  let encodedString = key.toString(16)

  // loop through every character in the email
  for (let n = 0; n < email.length; n++) {

    // Get the code (in decimal) for the nth character
    const charCode = email.charCodeAt(n)

    // XOR the character with the key
    const encoded = charCode ^ key

    // Hex encode the result, and append to the output string
    encodedString += encoded.toString(16)
  }
  return encodedString
}
