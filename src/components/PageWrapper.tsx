import React from 'react'
import FloatingHearts from './FloatingHearts'
import type { PageWrapperProps } from '../types'

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className="page-wrapper">
      <FloatingHearts />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <div className="valentine-card">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageWrapper