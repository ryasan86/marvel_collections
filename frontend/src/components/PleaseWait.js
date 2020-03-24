import React from 'react'
import { DelayMessage } from './common'
import ErrorBoundary from './ErrorBoundary'

const PleaseWaitComponent = ({ loading, error, loadingText }) => {
  if (loading) {
    return <DelayMessage text={`${loadingText.toUpperCase()}...`} />
  }
  if (error) {
    return <ErrorBoundary error={error} />
  }
}

export default PleaseWaitComponent
