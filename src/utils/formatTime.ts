const formatTime = (date: string) => {
  if (date.toString() === '') {
    return ''
  }

  const dateObj = new Date(date)

  return `${(dateObj.getUTCHours() + 1).toString().padStart(2, '0')}:${dateObj
    .getUTCMinutes()
    .toString()
    .padStart(2, '0')} ${(dateObj.getUTCMonth() + 1).toString().padStart(2, '0')}-${dateObj
    .getUTCDate()
    .toString()
    .padStart(2, '0')}-${dateObj.getUTCFullYear()}`
}

export default formatTime
