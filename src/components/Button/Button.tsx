import s from './Button.module.css'

interface ButtonProps {
  text: string
  listener: () => void
}

export default function Button({ text, listener }: ButtonProps) {
  return (
    <button className={s.button} type="button" onClick={listener}>
      {text}
    </button>
  )
}
