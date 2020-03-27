import React from 'react'
import { DelayMessage } from './common'
import ErrorBoundary from './ErrorBoundary'

const PleaseWaitComponent = props => {
  const { loading, error, loadingText, modalRef } = props

  if (loading) {
    return (
      <DelayMessage
        modalRef={modalRef}
        text={`${loadingText.toUpperCase()}...`}
      />
    )
  }

  if (error) {
    return <ErrorBoundary error={error} modalRef={modalRef} />
  }
}

export default PleaseWaitComponent
