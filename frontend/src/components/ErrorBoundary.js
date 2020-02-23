import React from 'react'
import PropTypes from 'prop-types'
import StyledErrorBoundary from '../styles/ErrorBoundaryStyles'

const ErrorBoundary = ({ error, children }) => {
  if (error) {
    return (
      <StyledErrorBoundary>
        {error.name}: {error.message}
      </StyledErrorBoundary>
    )
  }

  return children
}

ErrorBoundary.propTypes = {
  error: PropTypes.object,
  children: PropTypes.node
}

export default ErrorBoundary
