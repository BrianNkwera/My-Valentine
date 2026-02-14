import React from 'react'
import { useNavigate } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'

const Page9_AlwaysBe: React.FC = () => {
  const navigate = useNavigate()

  return (
    <PageWrapper>
      <h1 className="valentine-title">This Is How We Should Always Be</h1>
      <p className="valentine-text">
        We love, we get hurt, we fix, we stay together 💕
      </p>
      <button
        className="btn-valentine"
        onClick={() => navigate('/be-my-valentine')}
      >
        One More Step 💖
      </button>
    </PageWrapper>
  )
}

export default Page9_AlwaysBe