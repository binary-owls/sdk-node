function qualifyExisting(value: any): boolean {
  switch (typeof value) {
    case 'boolean':
      return true
    case 'string':
      return value !== ''
    case 'object':
      // WARNING: typeof null === 'object'
      if (value === null) {
        return false
      }
      if (Array.isArray(value)) {
        return !!value.length
      }
      return !!Object.keys(value).length
    default:
      return value !== undefined && value !== null
  }
}

/**
 * Merge objects where preference is given to values for a key in subsequent objects
 * @param objects a list of objects
 * @param qualifyValue choose which values are worth considering, by default null/undefined is ignored
 */
export const defaultsFavoringLast = (objects: any[], qualifyValue = qualifyExisting) => {
  const items = objects.filter(x => typeof x === 'object' && x !== null)
  const entries = ([] as [string, any][]).concat(...items.map(Object.entries))
  return entries.reduce(
    (previous, [key, value]) => {
      if (qualifyValue(value)) {
        previous[key] = value
      } else if (!qualifyValue(previous[key])) {
        // In this case, if previous value is bad anyways, just use this value
        previous[key] = value
      }
      return previous
    },
    {} as any,
  )
}
