import React, { useState, useEffect } from 'react'
import PageWrapper from '../components/PageWrapper'
import Confetti from '../components/Confetti'

const Page11_YesCelebration: React.FC = () => {
  const [showContent, setShowContent] = useState<boolean>(false)

  useEffect(() => {
    const timer: ReturnType<typeof setTimeout> = setTimeout(
      () => setShowContent(true),
      300
    )
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Confetti />
      <PageWrapper>
        {showContent && (
          <div>
            <div
              style={{
                fontSize: '4rem',
                marginBottom: '1rem',
                animation: 'scaleIn 0.6s ease',
              }}
            >
              💖🎉
            </div>

            <h1 className="valentine-title">
              You Just Made My Day My Love
            </h1>

            <p className="valentine-text">
              I promise to protect my heart the way you protect mine 💕
            </p>

            <div
              className="mt-4"
              style={{
                fontSize: '3rem',
                animation: 'pulse 1.5s ease infinite',
              }}
            >
              ❤️
            </div>

            <p
              className="valentine-text mt-3"
              style={{ fontSize: '0.95rem', opacity: 0.85 }}
            >
              Happy Valentine's Day, My Love 🌹
            </p>
          </div>
        )}
      </PageWrapper>
    </>
  )
}

export default Page11_YesCelebration