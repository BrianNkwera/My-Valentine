import React, { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'
import type { ButtonPosition } from '../types'

const Page10_BeMyValentine: React.FC = () => {
  const navigate = useNavigate()
  const [noPos, setNoPos] = useState<ButtonPosition>({ top: 'auto', left: 'auto' })
  const [noMoved, setNoMoved] = useState<boolean>(false)

  const moveNoButton = useCallback((): void => {
    const maxX: number = window.innerWidth - 150
    const maxY: number = window.innerHeight - 60
    const randomX: number = Math.max(20, Math.floor(Math.random() * maxX))
    const randomY: number = Math.max(20, Math.floor(Math.random() * maxY))

    setNoPos({ top: `${randomY}px`, left: `${randomX}px` })
    setNoMoved(true)
  }, [])

  const noButtonStyle: React.CSSProperties = noMoved
    ? {
        position: 'fixed',
        top: noPos.top,
        left: noPos.left,
        zIndex: 999,
        transition: 'all 0.05s ease',
      }
    : {}

  return (
    <PageWrapper>
      <h1 className="valentine-title pulse-animation">
        Will You Be My Valentine?
      </h1>

      <div className="d-flex flex-column align-items-center gap-3 mt-4">
        <button
          className="btn-valentine"
          style={{ fontSize: '1.3rem', padding: '16px 50px' }}
          onClick={() => navigate('/yes-celebration')}
        >
          Yes 🌹
        </button>

        <button
          className="btn-valentine-outline"
          onMouseEnter={moveNoButton}
          onTouchStart={moveNoButton}
          onClick={moveNoButton}
          style={noButtonStyle}
        >
          No 😭
        </button>
      </div>
    </PageWrapper>
  )
}

export default Page10_BeMyValentine