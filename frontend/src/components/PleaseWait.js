import React from 'react'
import { DelayMessage } from './common'
import ErrorBoundary from './ErrorBoundary'

const PleaseWaitComponent = ({ loading, error, itemType }) => {
  if (loading) {
    return <DelayMessage text={`LOADING ${itemType.toUpperCase()}...`} />
  }
  if (error) {
    return <ErrorBoundary error={error} />
  }
}

export default PleaseWaitComponent