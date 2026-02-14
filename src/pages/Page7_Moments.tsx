import React from 'react'
import { useNavigate } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'

const Page7_Moments: React.FC = () => {
  const navigate = useNavigate()

  return (
    <PageWrapper>
      <h1 className="valentine-title">Moments I Love With You</h1>
      <p className="valentine-text">
        From our crazy flour on the face days, laughing at our inside jokes,
        every memory feels magical 💫
      </p>
      <button
        className="btn-valentine"
        onClick={() => navigate('/heart-puzzle')}
      >
        Almost There 😍
      </button>
    </PageWrapper>
  )
}

export default Page7_Moments