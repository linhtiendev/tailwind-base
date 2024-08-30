import { message } from 'antd'

export const copyToClipboard = (text: any) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      message.info('Đã copy vào clipboard!')
    })
    .catch(() => {
      message.info('Lỗi khi copy vào clipboard!')
    })
}
