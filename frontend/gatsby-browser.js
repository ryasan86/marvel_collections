import React from 'react'
import GlobalStyles from './src/styles/GlobalStyles'

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyles />
      {element}
    </>
  )
}
