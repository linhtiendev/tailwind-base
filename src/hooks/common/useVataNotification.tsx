import { notification } from 'antd'
import { NotificationPlacement } from 'antd/es/notification/interface'
import { useCallback } from 'react'

import { ReactComponent as ErrorIcon } from 'assets/icons/icon_notification_error.svg'
import { ReactComponent as InfoIcon } from 'assets/icons/icon_notification_info.svg'
import { ReactComponent as SuccessIcon } from 'assets/icons/icon_notification_success.svg'
import { ReactComponent as WarningIcon } from 'assets/icons/icon_notification_warning.svg'

type NotificationType = 'success' | 'info' | 'warning' | 'error'

type NotificationProps = {
  title: React.ReactNode
  message: React.ReactNode
  type: NotificationType
  position?: NotificationPlacement
  timeout?: number | null
}

export const useVataNotification = () => {
  const getIcon = (type: NotificationType) => {
    switch (type) {
      case 'success':
        return <SuccessIcon />
      case 'info':
        return <InfoIcon />
      case 'warning':
        return <WarningIcon />
      case 'error':
        return <ErrorIcon />

      default:
        return null
    }
  }

  const showNotification = useCallback(
    ({ title, message, type, position = 'bottomRight', timeout }: NotificationProps) => {
      const notificationIcon = getIcon(type)
      notification.open({
        type,
        icon: notificationIcon,
        placement: position,
        className: 'vata-loyalty-notification',
        message: title,
        description: message,
        duration: timeout,
      })
    },
    []
  )

  return {
    showNotification,
  }
}
