import React from 'react'
import { useNavigate } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'

const Page4_Confession: React.FC = () => {
  const navigate = useNavigate()

  return (
    <PageWrapper>
      <h1 className="valentine-title">A Little Confession... 💌</h1>
      <p className="valentine-text">
        Being with you makes every ordinary moment extraordinary 💝
      </p>
      <button
        className="btn-valentine"
        onClick={() => navigate('/quiz')}
      >
        Go On 💝
      </button>

      <div className="progress-dots">
        <span className="progress-dot active" />
        <span className="progress-dot active" />
        <span className="progress-dot active" />
      </div>
    </PageWrapper>
  )
}

export default Page4_Confession