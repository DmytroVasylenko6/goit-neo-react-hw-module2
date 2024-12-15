import s from './Feedback.module.css'

interface FeedbackProps {
  good: number
  neutral: number
  bad: number
  total: number
  positivePercentage?: string
}

export default function Feedback({
  good,
  neutral,
  bad,
  total,
  positivePercentage
}: FeedbackProps) {
  return (
    <>
      <ul className={s.list}>
        <li key="1" className={s.item}>
          Good: <span className={s.number}>{good}</span>
        </li>
        <li key="2" className={s.item}>
          Neutral: <span className={s.number}>{neutral}</span>
        </li>
        <li key="3" className={s.item}>
          Bad: <span className={s.number}>{bad}</span>
        </li>
        <li key="4" className={s.item}>
          Total: <span className={s.number}>{total}</span>
        </li>
        <li key="5" className={s.item}>
          PositivePercentage:{' '}
          <span className={s.number}>{positivePercentage}%</span>
        </li>
      </ul>
    </>
  )
}
