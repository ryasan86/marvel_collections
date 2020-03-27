import React from 'react'
import PropTypes from 'prop-types'
import ErrorBoundary from '../styles/ErrorBoundaryStyles'

const ErrorBoundaryComponent = ({ error, children, modalRef }) => {
  if (
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
  ) {
    return (
      <ErrorBoundary ref={modalRef}>
        {error.networkError.result.errors.map((error, i) => (
          <p key={i}>
            <span>!&nbsp;</span>
            {error.message}
          </p>
        ))}
      </ErrorBoundary>
    )
  }

  if (error.message) {
    return (
      <ErrorBoundary ref={modalRef}>
        <p>
          <span>!&nbsp;</span>
          {error.title}: {error.message}
        </p>
      </ErrorBoundary>
    )
  }

  return children
}

ErrorBoundaryComponent.defaultProps = {
  error: {}
}

ErrorBoundaryComponent.propTypes = {
  error: PropTypes.object,
  children: PropTypes.node
}

export default ErrorBoundaryComponent
