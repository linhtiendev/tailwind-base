const stringToColor = (string: string) => {
  let hash = 0
  let i
  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash)
  }

  let color = '#'

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff
    color += `00${value.toString(16)}`.slice(-2)
  }

  /* tslint:disable:no-bitwise */
  return color
}

export const stringAvatar = (name: string) => {
  if (!name) {
    return {
      bgColor: stringToColor('Chưa cập nhật'),
      children: 'CC',
    }
  }

  const firstLetter = ((name.split(' ') || [])[0] || [])[0] ?? ''
  const secondLetter = ((name.split(' ') || [])[1] || [])[0] ?? ''

  return {
    bgColor: stringToColor(name),
    children: `${firstLetter}${secondLetter}`,
  }
}
