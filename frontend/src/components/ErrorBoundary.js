import React from 'react'
import PropTypes from 'prop-types'
import ErrorBoundary from '../styles/ErrorBoundaryStyles'

const ErrorBoundaryComponent = ({ error, children }) => {
  if (error) {
    return (
      <ErrorBoundary>
        {error.name}: {error.message}
      </ErrorBoundary>
    )
  }

  return children
}

ErrorBoundaryComponent.propTypes = {
  error: PropTypes.object,
  children: PropTypes.node
}

export default ErrorBoundaryComponent
