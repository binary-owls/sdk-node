// https://stackoverflow.com/questions/643782/how-to-check-whether-an-object-is-a-date
export const isValidDate = (date: any) => {
  return !!date && Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date)
}