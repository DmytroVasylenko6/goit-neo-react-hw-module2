import { useState } from 'react'
import Feedback from './Feedback'
import Section from './Section'
import Options from './Options'
import Notification from './Notification'
import Description from './Description'
interface FeedbackState {
  good: number
  neutral: number
  bad: number
}

type FeedbackType = keyof FeedbackState

export default function FeedBack() {
  const [state, setState] = useState<FeedbackState>({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const totalFeedback = state.good + state.neutral + state.bad

  const updateFeedback = (feedback: FeedbackType): void => {
    setState((prevState) => ({
      ...prevState,
      [feedback]: prevState[feedback] + 1
    }))
  }

  const resetFeedback = (): void => {
    setState({ good: 0, neutral: 0, bad: 0 })
  }

  const countPositiveFeedbackPercentage = (): string | undefined => {
    const percentage = (state.good * 100) / totalFeedback
    if (isNaN(percentage)) return
    return Number(percentage).toFixed()
  }

  const { good, neutral, bad } = state

  return (
    <>
      <Section>
        <Description />
      </Section>
      <Section>
        <Options
          options={state}
          totalFeedback={totalFeedback}
          onLeaveFeedback={updateFeedback}
          onResetFeedback={resetFeedback}
        />
      </Section>

      <Section>
        {totalFeedback > 0 ? (
          <Feedback
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback yet" />
        )}
      </Section>
    </>
  )
}
