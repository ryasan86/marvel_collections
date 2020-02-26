import React from 'react'
import StyledPagination from '../styles/PaginationStyles'
import { perPage } from '../client'

// offset - skip the specified number resources in the result set
// pages = total items / per page
// truncate right side if pages - 5 is greater than 0

const Pagination = ({ total, page, setPage }) => {
  const pageCount = Math.ceil(total / perPage)

  const nextClick = () => {
    setPage(prevState => prevState + 1)
  }

  const prevClick = () => {
    setPage(prevState => prevState - 1)
  }

  // if current page - 1 is greater than 3 truncate left side
  // if total page - current page is greater than 3 truncate right side

  return (
    <StyledPagination>
      {page > 1 ? <button onClick={prevClick}>⬅ Prev</button> : ''}
      <button>1</button>
      <button>{pageCount}</button>
      {page < pageCount ? <button onClick={nextClick}>Next ➡</button> : ''}
    </StyledPagination>
  )
}

export default Pagination
