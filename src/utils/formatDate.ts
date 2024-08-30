import moment from 'moment'

const padTo2Digits = (num: any) => {
  return num.toString().padStart(2, '0')
}

export const formatDate = (date: Date) => {
  return [padTo2Digits(date.getDate()), padTo2Digits(date.getMonth() + 1), date.getFullYear()].join(
    '/'
  )
}

type DateTimeType = 'TIME' | 'DATE' | 'DATE_TIME'

export const getRegion = () => {
  const defaultRegion = { timezone: 'Asia/Ho_Chi_Minh', locale: 'vi', zoneOffSet: '+07:00' }
  return defaultRegion
}

export const formatDateTime = (date: any, type?: DateTimeType) => {
  let result = ''
  if (date) {
    // const dateUTC = moment.utc(date).toDate()
    switch (type) {
      case 'DATE':
        result = moment(date).local().format('DD-MM-YYYY')
        break
      case 'TIME':
        result = moment(date).local().format('HH:mm:ss')
        break
      default:
        result = moment(date).local().format('DD-MM-YYYY HH:mm:ss')
        break
    }
  } else {
    result = 'Không xác định'
  }
  return `${result}`
}

// export const formatDateTime = (date: any, type?: DateTimeType) => {
//   if (date) {
//     const newDate = new Date(date.toString())
//     const hour = newDate.getHours() < 10 ? `0${newDate.getHours()}` : newDate.getHours()
//     const minute = newDate.getMinutes() < 10 ? `0${newDate.getMinutes()}` : newDate.getMinutes()
//     const second = newDate.getSeconds() < 10 ? `0${newDate.getSeconds()}` : newDate.getSeconds()
//     const time = `${hour}:${minute}:${second}`
//     const dateString = [
//       padTo2Digits(newDate.getDate()),
//       padTo2Digits(newDate.getMonth() + 1),
//       newDate.getFullYear(),
//     ].join('/')

//     switch (type) {
//       case 'TIME':
//         if (
//           Number.isNaN(newDate.getSeconds()) ||
//           Number.isNaN(newDate.getMinutes()) ||
//           Number.isNaN(newDate.getHours()) ||
//           newDate.toString() === ''
//         ) {
//           return 'Không xác định'
//         }
//         return `${hour}:${minute}:${second}`
//       case 'DATE':
//         if (
//           Number.isNaN(newDate.getDate()) ||
//           Number.isNaN(newDate.getMonth()) ||
//           Number.isNaN(newDate.getFullYear()) ||
//           newDate.toString() === ''
//         ) {
//           return 'Không xác định'
//         }

//         return [
//           padTo2Digits(newDate.getDate()),
//           padTo2Digits(newDate.getMonth() + 1),
//           newDate.getFullYear(),
//         ].join('/')

//       default:
//         if (
//           Number.isNaN(newDate.getSeconds()) ||
//           Number.isNaN(newDate.getMinutes()) ||
//           Number.isNaN(newDate.getHours()) ||
//           Number.isNaN(newDate.getDate()) ||
//           Number.isNaN(newDate.getMonth()) ||
//           Number.isNaN(newDate.getFullYear()) ||
//           newDate.toString() === ''
//         ) {
//           return 'Không xác định'
//         }

//         return `${dateString} ${time}`
//     }
//   } else {
//     return 'Không xác định'
//   }
// }
