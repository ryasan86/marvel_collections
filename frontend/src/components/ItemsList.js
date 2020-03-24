import React from 'react'
import PropTypes from 'prop-types'
import ItemsList from '../styles/ItemsListStyles'
import Item from './Item'
import Pagination from './Pagination'
import { DelayMessage } from './common'

const ItemsListComponent = ({ items, slug, page, setPage, total, loading }) => {
  const itemType = slug.toUpperCase().slice(1)

  if (items.length === 0) {
    return <DelayMessage text={`0 ${itemType} FOUND 😮`} />
  }

  return (
    <>
      <ItemsList>
        {items.map(({ node }, i) => (
          <Item key={node.id} c={node} slug={slug}></Item>
        ))}
      </ItemsList>
      <Pagination page={page} setPage={setPage} total={total} />
    </>
  )
}

ItemsListComponent.propTypes = {
  total: PropTypes.number,
  setPage: PropTypes.func,
  page: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object)
}

export default ItemsListComponent
