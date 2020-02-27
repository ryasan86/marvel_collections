import React from 'react'
import StyledPagination from '../styles/PaginationStyles'
import { limit } from '../client'

const PrevIcon = ({ disabled }) => (
  <button disabled={disabled}>&lt; Prev</button>
)

const NextIcon = ({ disabled }) => (
  <button disabled={disabled}>Next &gt;</button>
)

const Ellipsis = () => <a>...</a>

const Pagination = ({ total, page, setPage }) => {
  const pageCount = Math.ceil(total / limit)
  const handlePageChange = p => setPage(p)

  return (
    <StyledPagination
      total={total}
      current={page}
      defaultPageSize={limit}
      onChange={handlePageChange}
      showTitle={false}
      prevIcon={<PrevIcon disabled={page === 1} />}
      nextIcon={<NextIcon disabled={page === pageCount} />}
      jumpPrevIcon={<Ellipsis />}
      jumpNextIcon={<Ellipsis />}
    />
  )
}

export default Pagination
