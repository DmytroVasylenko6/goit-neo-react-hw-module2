import s from './Options.module.css'
import Button from '../Button'

interface OptionsProps {
  options: {
    good: number
    neutral: number
    bad: number
  }
  totalFeedback: number
  onLeaveFeedback: (feedback: 'good' | 'neutral' | 'bad') => void
  onResetFeedback: () => void
}

export default function Options({
  options,
  totalFeedback,
  onLeaveFeedback,
  onResetFeedback
}: OptionsProps) {
  const OptionsArray = Object.keys(options)
  return (
    <>
      <ul className={s.list}>
        {OptionsArray.map((option) => {
          return (
            <li key={option} className={s.item}>
              <Button
                text={option}
                listener={() => onLeaveFeedback(option as keyof typeof options)}
              />
            </li>
          )
        })}
        {totalFeedback > 0 && (
          <li className={s.item}>
            <Button text="Reset" listener={onResetFeedback} />
          </li>
        )}
      </ul>
    </>
  )
}
