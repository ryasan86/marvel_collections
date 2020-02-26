import React from 'react'

export const Input = ({ onChange, onKeyPress, type, value, name }) => {
  const handleChange = e => {
    onChange(e.target.value)
  }
  const handleEnterPress = e => {
    if (e.key === 'Enter') onKeyPress(value)
  }

  return (
    <input
      type={type}
      onChange={handleChange}
      onKeyPress={handleEnterPress}
      value={value}
    />
  )
}
