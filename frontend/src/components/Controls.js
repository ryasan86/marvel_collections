import React, { useState } from 'react'
import PropTypes from 'prop-types'
import StyledControls from '../styles/ControlsStyles'
import SortBy from './SortBy'
import { Input } from './common/Input'
import { Row } from './common/Row'
import { MagnifierSVG } from '../images'

const Controls = ({ setSearch, total, dispatchOrderBy, endpoint }) => {
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
        <div>{total ? `${total} RESULTS` : ''}</div>
        <SortBy dispatchOrderBy={dispatchOrderBy} endpoint={endpoint} />
      </Row>
    </StyledControls>
  )
}

Controls.propTypes = {
  dispatchOrderBy: PropTypes.func.isRequired,
  setSearch: PropTypes.func.isRequired,
  total: PropTypes.number
}

export default Controls
