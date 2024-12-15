import s from './Notification.module.css'

interface NotificationProps {
  message: string
}

export default function Notification({ message }: NotificationProps) {
  return (
    <div className={s.container}>
      <span className={s.notification}>{message}</span>
    </div>
  )
}
