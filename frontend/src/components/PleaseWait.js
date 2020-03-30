import React from 'react'
import { DelayMessage } from './common'
import ErrorBoundary from './ErrorBoundary'

const PleaseWaitComponent = props => {
  const { loading, error, loadingText, modalRef, emptyText } = props

  if (loading) {
    return <DelayMessage modalRef={modalRef} text={loadingText} />
  }

  if (error) {
    return <ErrorBoundary error={error} modalRef={modalRef} />
  }

  return <DelayMessage modalRef={modalRef} text={emptyText} />
}

export default PleaseWaitComponent
