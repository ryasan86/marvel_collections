import React, { useState } from 'react'
import { Row, SortBy } from '../styles/ControlsStyles'
import { MagnifierSVG } from '../images'

const Controls = ({ isAscending, setIsAscending, searchTerm }) => {
  const [input, setInput] = useState('')

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleKeyPress = e => {
    if (e.key === 'Enter') searchTerm(input)
  }

  const handleClick = () => {
    setIsAscending(!isAscending)
  }

  return (
    <div>
      <Row>
        <img src={MagnifierSVG} alt='search-icon' />
        <input
          type='text'
          value={input}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      </Row>
      <Row>
        <div>1000 RESULTS</div>
        <SortBy>
          <div>SORT BY</div>
          <a className='sort-btn' onClick={handleClick}>
            {isAscending ? 'Z-A' : 'A-Z'}
          </a>
        </SortBy>
      </Row>
    </div>
  )
}

export default Controls
