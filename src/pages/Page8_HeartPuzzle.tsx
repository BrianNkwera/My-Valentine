import React, { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'
import type { HeartItem } from '../types'

const HEARTS: HeartItem[] = [
  { id: 0, emoji: '💝', label: 'Gift Heart' },
  { id: 1, emoji: '💘', label: 'Cupid Heart' },
  { id: 2, emoji: '❤️‍🩹', label: 'Mending Heart' },
  { id: 3, emoji: '💞', label: 'Revolving Hearts' },
]

const CORRECT_ORDER: number[] = [0, 1, 2, 3]

const Page8_HeartPuzzle: React.FC = () => {
  const [pressed, setPressed] = useState<number[]>([])
  const [wrongId, setWrongId] = useState<number | null>(null)
  const [correctId, setCorrectId] = useState<number | null>(null)
  const navigate = useNavigate()

  const handlePress = useCallback(
    (id: number): void => {
      const nextIndex: number = pressed.length
      const expectedId: number = CORRECT_ORDER[nextIndex]

      if (id === expectedId) {
        setCorrectId(id)
        setTimeout(() => setCorrectId(null), 400)

        const newPressed: number[] = [...pressed, id]
        setPressed(newPressed)

        if (newPressed.length === CORRECT_ORDER.length) {
          setTimeout(() => {
            navigate('/always-be')
          }, 600)
        }
      } else {
        setWrongId(id)
        setTimeout(() => {
          setWrongId(null)
          setPressed([])
        }, 500)
      }
    },
    [pressed, navigate]
  )

  const getButtonClass = (heartId: number): string => {
    const isPressed: boolean = pressed.includes(heartId)
    const isWrong: boolean = wrongId === heartId
    const isCorrect: boolean = correctId === heartId

    let extraClass = ''
    if (isPressed) extraClass = 'pressed'
    if (isCorrect) extraClass = 'correct-flash'
    if (isWrong) extraClass = 'wrong-flash'

    return `heart-btn ${extraClass}`
  }

  return (
    <PageWrapper>
      <h1 className="valentine-title">Tap Hearts In Order</h1>
      <p className="valentine-text">
        Unlock your surprise by tapping in the correct order 💖
      </p>

      <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
        {HEARTS.map((heart) => {
          const isPressed: boolean = pressed.includes(heart.id)
          const pressedIndex: number = pressed.indexOf(heart.id)

          return (
            <button
              key={heart.id}
              className={getButtonClass(heart.id)}
              onClick={() => !isPressed && handlePress(heart.id)}
              disabled={isPressed}
              aria-label={heart.label}
              style={{ position: 'relative' }}
            >
              {heart.emoji}
              {isPressed && (
                <span className="order-badge">
                  {pressedIndex + 1}
                </span>
              )}
            </button>
          )
        })}
      </div>

      {pressed.length > 0 && pressed.length < CORRECT_ORDER.length && (
        <p
          className="valentine-text"
          style={{ fontSize: '0.9rem', opacity: 0.8 }}
        >
          {pressed.length} of {CORRECT_ORDER.length} selected ✨
        </p>
      )}
    </PageWrapper>
  )
}

export default Page8_HeartPuzzle