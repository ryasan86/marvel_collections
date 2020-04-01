import React from 'react'
import PropTypes from 'prop-types'
import ItemsList from '../styles/ItemsListStyles'
import Item from './Item'
import Pagination from './Pagination'
import { DelayMessage } from './PleaseWait'

const ItemsListComponent = ({ data, slug, page, setPage, loading }) => {
  const { totalCount, edges } = data
  const itemType = slug.toUpperCase().slice(1)

  if (edges.length === 0) {
    return <DelayMessage text={`0 ${itemType} found 😮`} />
  }

  return (
    <>
      <ItemsList>
        {edges.map(({ node }, i) => (
          <Item key={node.id} c={node} slug={slug}></Item>
        ))}
      </ItemsList>
      <Pagination page={page} setPage={setPage} total={totalCount} />
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
