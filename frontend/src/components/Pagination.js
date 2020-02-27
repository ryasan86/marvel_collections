import React from 'react'
import localeInfo from 'rc-pagination/lib/locale/en_US'
import StyledPagination from '../styles/PaginationStyles'
import { limit } from '../client'

const buttonItemRender = (current, type, element) => {
  switch (type) {
    case 'prev':
      return <button className='prev'>&#8678; Prev</button>
    case 'next':
      return <button className='next'>Next &#8680;</button>
    case 'jump-prev':
    case 'jump-next':
      return <a>...</a>
    default:
      return element
  }
}

const Pagination = ({ total, page, setPage }) => {
  const pageCount = Math.ceil(total / limit)
  const handlePageChange = p => setPage(p)

  return (
    <StyledPagination
      total={total}
      current={page}
      defaultPageSize={limit}
      onChange={handlePageChange}
      itemRender={buttonItemRender}
      prevDisabled={page === 1}
      nextDisabled={page === pageCount}
      locale={localeInfo}
      showTitle
    />
  )
}

export default Pagination
