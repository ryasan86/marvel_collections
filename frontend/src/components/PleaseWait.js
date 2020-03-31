import React from 'react'
import ErrorBoundary from './ErrorBoundary'
import { DelayMessage } from './common'

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
