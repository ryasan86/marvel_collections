import React from 'react'
import PropTypes from 'prop-types'
import StyledList from '../styles/items-list.styles'
import Item from './item'
import DelayMessage from './delay-message'
import Pagination from './pagination'
import { capitalize } from '../utils'

const ItemsList = ({ items, path, page, setPage, total, loading }) => {
  const itemType = capitalize(path.slice(1))

  if (items.length === 0) {
    return <DelayMessage text={`0 ${itemType} FOUND 😮`} />
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
