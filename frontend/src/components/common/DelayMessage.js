import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const StyledDelayMessage = styled.div`
  h4 {
    background: white;
    padding: 1rem 2rem;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
    transition: opacity 0.3s;
    min-width: 28rem;
    text-align: center;
    display: inline-block;
    opacity: ${props => (props.isVisible ? '1' : '0')};
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin: 3rem 0;
  }
`

export const DelayMessage = ({ text, modalRef }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <StyledDelayMessage isVisible={isVisible} ref={modalRef}>
      <h4>{text}</h4>
    </StyledDelayMessage>
  )
}
