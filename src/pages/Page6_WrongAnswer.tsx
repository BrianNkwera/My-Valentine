import React from 'react'
import { useNavigate } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'

const Page6_WrongAnswer: React.FC = () => {
  const navigate = useNavigate()

  return (
    <PageWrapper>
      <div className="shake">
        <h1 className="valentine-title-bold">
          Wrong Answer ❌
        </h1>
        <p className="valentine-text">
          Really?! Think again... 😤💔
        </p>
        <button
          className="btn-valentine"
          onClick={() => navigate('/quiz')}
        >
          Try Again 🔄
        </button>
      </div>
    </PageWrapper>
  )
}

export default Page6_WrongAnswer