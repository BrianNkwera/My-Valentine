import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'

const SECRET_CODE = '2607'

const Page1_SecretCode: React.FC = () => {
  const [code, setCode] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [shaking, setShaking] = useState<boolean>(false)
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    if (code.trim() === SECRET_CODE) {
      navigate('/hey-my-love')
    } else {
      setError('Wrong code! Try again my love 💔')
      setShaking(true)
      setTimeout(() => setShaking(false), 500)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCode(e.target.value)
    setError('')
  }

  return (
    <PageWrapper>
      <div className={shaking ? 'shake' : ''}>
        <h1 className="valentine-title text-danger">
          🔒 My Valentine 💌
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="valentine-label text-danger" htmlFor="secret-code">
              Enter our special code to unlock your surprise 😌
            </label>
            <input
              id="secret-code"
              type="text"
              className="valentine-input"
              value={code}
              onChange={handleChange}
              placeholder="Enter code..."
              autoFocus
              autoComplete="off"
            />
            {error && <p className="error-text">{error}</p>}
          </div>

          <button type="submit" className="btn-valentine">
            Unlock 💖
          </button>
        </form>
      </div>
    </PageWrapper>
  )
}

export default Page1_SecretCode