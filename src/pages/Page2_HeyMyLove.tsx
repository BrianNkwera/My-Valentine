import React from 'react'
import { useNavigate } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'

const Page2_HeyMyLove: React.FC = () => {
  const navigate = useNavigate()

  return (
    <PageWrapper>
      <h1 className="valentine-title">Hey My Love</h1>
      <p className="valentine-text">
        Every morning, I wake up grateful that you're in my life...
      </p>
      <button
        className="btn-valentine"
        onClick={() => navigate('/brighten-days')}
      >
        Continue 💞
      </button>

      <div className="progress-dots">
        <span className="progress-dot active" />
        <span className="progress-dot" />
        <span className="progress-dot" />
      </div>
    </PageWrapper>
  )
}

export default Page2_HeyMyLove