import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const H4 = styled.h4`
  width: 100%;
  text-align: center;
  background: white;
  transition: opacity 0.3s;
  opacity: ${props => (props.isVisible ? '1' : '0')};
`

export const DelayMessage = ({ text }) => {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => setIsVisible(true), [])

  return <H4 isVisible={isVisible}>{text}</H4>
}
