import React, { useMemo } from 'react'
import type { FloatingHeartData } from '../types'

const HEART_EMOJIS: string[] = [
  '💕', '💗', '💖', '❤️', '💘', '💝', '💞', '🌹', '✨', '💓',
]

const HEART_COUNT = 18

const FloatingHearts: React.FC = () => {
  
    const hearts: FloatingHeartData[] = useMemo(() => {
    return Array.from({ length: HEART_COUNT }, (_, i): FloatingHeartData => ({
      id: i,
      emoji: HEART_EMOJIS[i % HEART_EMOJIS.length],
      left: `${Math.random() * 100}%`,
      animationDuration: `${6 + Math.random() * 10}s`,
      animationDelay: `${Math.random() * 8}s`,
      fontSize: `${1 + Math.random() * 1.5}rem`,
    }))
  }, []);

  return (
    <div className="floating-hearts-container">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="float-heart"
          style={{
            left: heart.left,
            animationDuration: heart.animationDuration,
            animationDelay: heart.animationDelay,
            fontSize: heart.fontSize,
          }}
        >
          {heart.emoji}
        </span>
      ))}
    </div>
  )
}

export default FloatingHearts