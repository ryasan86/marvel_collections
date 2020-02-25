import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Row, SortBy } from '../styles/ControlsStyles'
import { MagnifierSVG } from '../images'

const Controls = ({ isAscending, setIsAscending, setSearch, total }) => {
  const [input, setInput] = useState('')

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleKeyPress = e => {
    if (e.key === 'Enter') setSearch(input)
  }

  const handleSortClick = () => {
    setIsAscending(prevState => !prevState)
  }

  return (
    <>
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
        <div>{total && `${total} RESULTS`}</div>
        <SortBy>
          <div>SORT BY</div>
          <a className='sort-btn' onClick={handleSortClick}>
            {isAscending ? 'Z-A' : 'A-Z'}
          </a>
        </SortBy>
      </Row>
    </>
  )
}

Controls.propTypes = {
  isAscending: PropTypes.bool.isRequired,
  setIsAscending: PropTypes.func.isRequired,
  setSearch: PropTypes.func.isRequired,
  total: PropTypes.number
}

export default Controls
