const REGEX_UNSAFE_CHARACTERS = /[^a-z0-9]+/gi

export const dehumanize = (str: string, delimiter = '-') => str.replace(REGEX_UNSAFE_CHARACTERS, delimiter).toLowerCase()
