import url from 'url'
import querystring, { ParsedUrlQuery, ParsedUrlQueryInput } from 'querystring'

export const parseUrlQuery = (str: string): ParsedUrlQuery => {
  try {
    const { query } = url.parse(str)
    return querystring.parse(query || '')
  } catch {
    return {}
  }
}

export const formatUrlQuery = (params: ParsedUrlQueryInput) => querystring.stringify(params)

export const isUnsafeUrl = (str: string) => {
  const isValidUrlString = /^([!#$&-;=?-\[\]_a-z~]|%[0-9a-fA-F]{2})+$/.test(str)
  return !isValidUrlString
}

export const urlify = (name: string) => {
  if (typeof name !== 'string') {
    return name
  }
  return name.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase()
}
