export const getIdFromPath = (pathString: string): number => {
  if (Number(pathString)) {
    return Number(pathString)
  }

  const regexPattern = /-(\d+)$/
  const match = pathString?.match(regexPattern)
  if (match && match[1]) {
    return Number(match[1])
  }

  return 0
}
