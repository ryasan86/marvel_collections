import React from 'react'
import PropTypes from 'prop-types'
import StyledList from '../styles/ItemsListStyles'
import Item from './Item'
import DelayMessage from './DelayMessage'
import Pagination from './Pagination'

const ItemsList = ({ items, path, page, setPage, total, loading }) => {
  const itemType = path.toUpperCase()

  if (!items) {
    return <DelayMessage text={`LOADING ${itemType}S...`} />
  }

  if (items.length === 0) {
    return <DelayMessage text={`0 ${itemType}S FOUND 😮`} />
  }

  return (
    <>
      <StyledList>
        {items.map(({ node }, i) => (
          <Item key={node.id} c={node} path={path}></Item>
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
