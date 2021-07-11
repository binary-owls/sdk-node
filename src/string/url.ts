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
