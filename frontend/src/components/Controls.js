import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Controls from '../styles/ControlsStyles'
import SortBy from './SortBy'
import { MagnifierSVG } from '../images'

const Total = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return <Controls.Total isVisible={isVisible}>{children}</Controls.Total>
}

const ControlsComponent = ({ setSearch, total, setOrderBy, slug }) => {
  const [input, setInput] = useState('')

  return (
    <Controls>
      <Controls.Row className="top">
        <Controls.Image src={MagnifierSVG} alt="search-icon" />
        <Controls.Input
          type="text"
          placeholder="SEARCH"
          value={input}
          onChange={setInput}
          onKeyPress={setSearch}
        />
      </Controls.Row>
      <Controls.Row>
        <Total>{total ? `${total} RESULTS` : ''}</Total>
        <SortBy setOrderBy={setOrderBy} slug={slug} />
      </Controls.Row>
    </Controls>
  )
}

ControlsComponent.propTypes = {
  setOrderBy: PropTypes.func.isRequired,
  setSearch: PropTypes.func.isRequired,
  total: PropTypes.number
}

export default ControlsComponent
