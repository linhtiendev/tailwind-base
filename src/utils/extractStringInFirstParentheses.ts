export const extractStringInFirstParentheses = (input: string): string => {
  const match = input.match(/\(([^)]+)\)/)
  if (match && match[1]) {
    return match[1]
  }
  return ''
}
