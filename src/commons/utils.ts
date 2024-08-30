export const getIdFromAlias = (alias: any) => {
  if (!alias || alias === '') return alias
  let result = alias
  const pos = alias.lastIndexOf('-')
  const posDot = alias.lastIndexOf('.')
  if (pos > -1) {
    let find = null
    if (posDot > -1) {
      find = alias.substring(pos + 1, posDot)
    } else {
      find = alias.substring(pos + 1)
    }
    if (find) {
      result = parseInt(find, 10)
    }
  }
  return result
}

export const clone = (obj: any) => {
  return JSON.parse(JSON.stringify(obj))
}
