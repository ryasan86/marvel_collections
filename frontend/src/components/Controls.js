import React, { useState } from 'react'
import PropTypes from 'prop-types'
import StyledControls, { SortBy } from '../styles/ControlsStyles'
import { Input } from './common/Input'
import { Row } from './common/Row'
import { MagnifierSVG } from '../images'

const Controls = ({ isAscending, setIsAscending, setSearch, total }) => {
  const [input, setInput] = useState('')

  const handleSortClick = () => {
    setIsAscending(prevState => !prevState)
  }

  return (
    <StyledControls>
      <Row>
        <img src={MagnifierSVG} alt='search-icon' />
        <Input
          type='text'
          value={input}
          onChange={setInput}
          onKeyPress={setSearch}
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
    </StyledControls>
  )
}

Controls.propTypes = {
  isAscending: PropTypes.bool.isRequired,
  setIsAscending: PropTypes.func.isRequired,
  setSearch: PropTypes.func.isRequired,
  total: PropTypes.number
}

export default Controls
