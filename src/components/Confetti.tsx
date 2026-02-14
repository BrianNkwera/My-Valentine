import React, { useMemo } from 'react'
import type { ConfettiPieceData, ConfettiShape } from '../types'

const COLORS: string[] = [
  '#e91e63', '#f06292', '#ff4081', '#ff80ab',
  '#ffd700', '#ff6b6b', '#ee5a24', '#ffffff',
  '#f8bbd0', '#fce4ec', '#c2185b', '#ad1457',
]

const SHAPES: ConfettiShape[] = ['circle', 'square', 'rectangle']

const CONFETTI_COUNT = 80

const Confetti: React.FC = () => {
  const pieces: ConfettiPieceData[] = useMemo(() => {
    return Array.from({ length: CONFETTI_COUNT }, (_, i): ConfettiPieceData => {
      const shape: ConfettiShape = SHAPES[Math.floor(Math.random() * SHAPES.length)]
      let width: number
      let height: number
      let borderRadius: string

      switch (shape) {
        case 'circle': {
          const size = 6 + Math.random() * 10
          width = size
          height = size
          borderRadius = '50%'
          break
        }
        case 'square': {
          const size = 6 + Math.random() * 10
          width = size
          height = size
          borderRadius = '2px'
          break
        }
        case 'rectangle':
        default: {
          width = 4 + Math.random() * 8
          height = 10 + Math.random() * 16
          borderRadius = '2px'
          break
        }
      }

      return {
        id: i,
        left: `${Math.random() * 100}%`,
        bg: COLORS[Math.floor(Math.random() * COLORS.length)],
        duration: `${2 + Math.random() * 4}s`,
        delay: `${Math.random() * 3}s`,
        width,
        height,
        borderRadius,
      }
    })
  }, [])

  return (
    <div className="confetti-container">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="confetti-piece"
          style={{
            left: piece.left,
            backgroundColor: piece.bg,
            animationDuration: piece.duration,
            animationDelay: piece.delay,
            width: `${piece.width}px`,
            height: `${piece.height}px`,
            borderRadius: piece.borderRadius,
          }}
        />
      ))}
    </div>
  )
}

export default Confetti