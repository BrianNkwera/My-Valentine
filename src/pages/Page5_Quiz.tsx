import React from 'react'
import { useNavigate } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'
import type { QuizAnswer } from '../types'

interface QuizOption {
  answer: QuizAnswer
  label: string
}

const QUIZ_OPTIONS: QuizOption[] = [
  { answer: 'me', label: 'Me 🥰' },
  { answer: 'chicken', label: 'Chicken 🍗' },
  { answer: 'mbuzi', label: 'Mbuzi 🐐' },
]

const Page5_Quiz: React.FC = () => {
  const navigate = useNavigate()

  const handleAnswer = (answer: QuizAnswer): void => {
    if (answer === 'me') {
      navigate('/moments')
    } else {
      navigate('/wrong-answer')
    }
  }

  return (
    <PageWrapper>
      <h1 className="valentine-title">Quick Quiz</h1>
      <p className="valentine-text">
        Who always has my heart?
      </p>

      <div className="d-flex flex-column align-items-center gap-3">
        {QUIZ_OPTIONS.map((option) => (
          <button
            key={option.answer}
            className="quiz-btn text-danger"
            onClick={() => handleAnswer(option.answer)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </PageWrapper>
  )
}

export default Page5_Quiz