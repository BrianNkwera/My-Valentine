import React from 'react'
import { useNavigate } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'

const Page3_BrightenDays: React.FC = () => {
  const navigate = useNavigate()

  return (
    <PageWrapper>
      <h1 className="valentine-title">You Brighten My Days</h1>
      <p className="valentine-text">
        Your smile, your laugh, every little thing you do makes my heart happy 💓
      </p>
      <button
        className="btn-valentine"
        onClick={() => navigate('/confession')}
      >
        Keep Going 💫
      </button>

      <div className="progress-dots">
        <span className="progress-dot active" />
        <span className="progress-dot active" />
        <span className="progress-dot" />
      </div>
    </PageWrapper>
  )
}

export default Page3_BrightenDays