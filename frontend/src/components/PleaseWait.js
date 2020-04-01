import React, { useState, useEffect } from 'react'
import ErrorBoundary from './ErrorBoundary'
import { StyledDelayMessage } from '../styles/PleaseWaitStyles'

export const DelayMessage = ({ text, type, modalRef }) => {
  const [isVisible, setIsVisible] = useState(false)
  const _text = text.toUpperCase()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const renderText = () => {
    if (_text.includes('...')) {
      return (
        <>
          {_text.slice(0, -3)}
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </>
      )
    }

    return _text
  }

  return (
    <StyledDelayMessage isVisible={isVisible} ref={modalRef}>
      <h4>{renderText()}</h4>
    </StyledDelayMessage>
  )
}

const PleaseWaitComponent = props => {
  const { loading, error, loadingText, modalRef, className } = props

  return (
    <div className={className}>
      {loading ? (
        <DelayMessage modalRef={modalRef} text={loadingText} />
      ) : error ? (
        <ErrorBoundary error={error} modalRef={modalRef} />
      ) : (
        ''
      )}
    </div>
  )
}

export default PleaseWaitComponent
