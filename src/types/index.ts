import type { ReactNode, CSSProperties } from 'react'

// ===== Component Props =====
export interface PageWrapperProps {
  children: ReactNode
}

// ===== Floating Hearts =====
export interface FloatingHeartData {
  id: number
  emoji: string
  left: string
  animationDuration: string
  animationDelay: string
  fontSize: string
}

// ===== Confetti =====
export type ConfettiShape = 'circle' | 'square' | 'rectangle'

export interface ConfettiPieceData {
  id: number
  left: string
  bg: string
  duration: string
  delay: string
  width: number
  height: number
  borderRadius: string
}

// ===== Heart Puzzle =====
export interface HeartItem {
  id: number
  emoji: string
  label: string
}

export type HeartButtonState = 'idle' | 'pressed' | 'correct' | 'wrong'

// ===== Quiz =====
export type QuizAnswer = 'me' | 'chicken' | 'mbuzi'

// ===== Button Position (No Button) =====
export interface ButtonPosition {
  top: string
  left: string
}

// ===== Style helpers =====
export interface DynamicStyle extends CSSProperties {
  [key: string]: string | number | undefined
}