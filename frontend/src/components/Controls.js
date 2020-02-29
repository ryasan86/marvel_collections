import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import StyledControls, { StyledTotal } from '../styles/ControlsStyles'
import SortBy from './SortBy'
import { Input } from './common/Input'
import { Row } from './common/Row'
import { MagnifierSVG } from '../images'

const Total = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => setIsVisible(true), [])
  
  return <StyledTotal isVisible={isVisible}>{children}</StyledTotal>
}

const Controls = ({ setSearch, total, setOrderBy, path }) => {
  const [input, setInput] = useState('')

  return (
    <StyledControls>
      <Row>
        <img src={MagnifierSVG} alt='search-icon' />
        <Input
          type='text'
          placeholder='SEARCH'
          value={input}
          onChange={setInput}
          onKeyPress={setSearch}
        />
      </Row>
      <Row>
        <Total>{total ? `${total} RESULTS` : ''}</Total>
        <SortBy setOrderBy={setOrderBy} path={path} />
      </Row>
    </StyledControls>
  )
}

Controls.propTypes = {
  setOrderBy: PropTypes.func.isRequired,
  setSearch: PropTypes.func.isRequired,
  total: PropTypes.number
}

export default Controls
