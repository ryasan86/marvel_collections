import React from 'react'

export const Input = ({
  onChange,
  onKeyPress,
  type,
  value,
  name,
  placeholder
}) => {
  const handleChange = e => {
    onChange(e.target.value)
  }
  const handleEnterPress = e => {
    if (e.key === 'Enter') onKeyPress(value)
  }

  return (
    <input
      type={type}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      onKeyPress={handleEnterPress}
    />
  )
}
