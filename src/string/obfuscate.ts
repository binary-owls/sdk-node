const MINIMUM_HIDDEN = 3

export const obfuscate = (str: string) => {
  const length = Math.min(str.length, Math.max(Math.floor(str.length / 2), MINIMUM_HIDDEN))
  return str.replace(new RegExp(`.{${length}}$`), '*****')
}
