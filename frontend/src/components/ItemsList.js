import React from 'react'
import PropTypes from 'prop-types'
import StyledList from '../styles/ListStyles'
import Item from './Item'
import DelayMessage from './DelayMessage'
import Pagination from './Pagination'
import { capitalize } from '../utils'

const ItemsList = ({ items, endpoint, page, setPage, total }) => {
  const itemType = capitalize(endpoint.slice(1))

  if (!items) {
    return <DelayMessage text='LOADING...' />
  }

  if (items.length === 0) {
    return <DelayMessage text={`0 ${itemType} FOUND 😮`} />
  }

  return (
    <>
      <StyledList>
        {items.map((c, i) => (
          <Item key={i} c={c} endpoint={endpoint}></Item>
        ))}
      </StyledList>
      <Pagination page={page} setPage={setPage} total={total} />
    </>
  )
}

ItemsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
}

export default ItemsList
