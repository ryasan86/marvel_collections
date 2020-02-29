import React from 'react'
import PropTypes from 'prop-types'
import StyledList from '../styles/ItemsListStyles'
import Item from './Item'
import DelayMessage from './DelayMessage'
import Pagination from './Pagination'
import { capitalize } from '../utils'

const ItemsList = ({ items, path, page, setPage, total }) => {
  const itemType = capitalize(path.slice(1))

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
          <Item key={c.id} c={c} path={path}></Item>
        ))}
      </StyledList>
      <Pagination page={page} setPage={setPage} total={total} />
    </>
  )
}

ItemsList.propTypes = {
  total: PropTypes.number,
  path: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object)
}

export default ItemsList
