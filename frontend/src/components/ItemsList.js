import React from 'react'
import PropTypes from 'prop-types'
import StyledList from '../styles/ListStyles'
import Item from './Item'
import DelayMessage from './DelayMessage'

const ItemsList = ({ items, endpoint }) => {
  if (!items) {
    return <DelayMessage text='Loading...' />
  }

  if (items.length === 0) {
    return <DelayMessage text='0 Results Found 😮' />
  }

  return (
    <StyledList>
      {items.map((c, i) => (
        <Item key={i} c={c} endpoint={endpoint}></Item>
      ))}
    </StyledList>
  )
}

ItemsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
}

export default ItemsList
