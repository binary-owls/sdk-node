export const joinPaths = (...args: string[]) => {
  return args.map((part, i) => {
    if (i === 0) {
      return part.trim().replace(/[\/]*$/g, '')
    } else {
      return part.trim().replace(/(^[\/]*|[\/]*$)/g, '')
    }
  }).filter(part => part.length).join('/')
}
