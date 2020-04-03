import React, { useState, useEffect } from 'react'
import ErrorBoundary from './ErrorBoundary'
import { StyledDelayMessage } from '../styles/PleaseWaitStyles'

export const DelayMessage = ({ textRender, type, modalRef }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <StyledDelayMessage isVisible={isVisible} ref={modalRef}>
      <h4>{textRender}</h4>
    </StyledDelayMessage>
  )
}

const LoadingText = ({ text }) => (
  <>
    {text}
    <span>.</span>
    <span>.</span>
    <span>.</span>
  </>
)

const PleaseWaitComponent = props => {
  const { loading, loadingText, error, modalRef, className } = props

  return (
    <div className={className}>
      {loading && (
        <DelayMessage
          modalRef={modalRef}
          textRender={<LoadingText text={loadingText} />}
        />
      )}
      {error && <ErrorBoundary error={error} modalRef={modalRef} />}
    </div>
  )
}

export default PleaseWaitComponent
