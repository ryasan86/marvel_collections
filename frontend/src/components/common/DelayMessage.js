import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

const blink1 = keyframes`
   0%{ color: transparent; }
  25%{ color: transparent; }
  99%{ color: black; }
 100%{ color: transparent; }
`

const blink2 = keyframes`
   0%{ color: transparent; }
  50%{ color: transparent; }
  99%{ color: black; }
 100%{ color: transparent; } 
`

const blink3 = keyframes`
   0%{ color: transparent; }
  75%{ color: transparent; }
  99%{ color: black; }
 100%{ color: transparent; } 
`

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
  span {
    margin-left: 2px;
    animation: ${blink1} 1.25s infinite;
    &:nth-child(2) {
      animation-name: ${blink2};
    }
    &:nth-child(3) {
      animation-name: ${blink3};
    }
  }
`

export const DelayMessage = ({ text, type, modalRef }) => {
  const [isVisible, setIsVisible] = useState(false)
  const _text = text.toUpperCase()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const renderText = () => {
    if (_text.includes('...')) {
      return (
        <>
          {_text.slice(0, -3)}
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </>
      )
    }

    return _text
  }

  return (
    <StyledDelayMessage isVisible={isVisible} ref={modalRef}>
      <h4>{renderText()}</h4>
    </StyledDelayMessage>
  )
}
