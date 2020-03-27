import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const H4 = styled.h4`
  background: white;
  padding: 1rem 2rem;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s;
  min-width: 28rem;
  text-align: center;
  opacity: ${props => (props.isVisible ? '1' : '0')};
`

export const DelayMessage = ({ text, modalRef }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <H4 isVisible={isVisible} ref={modalRef}>
      {text}
    </H4>
  )
}
