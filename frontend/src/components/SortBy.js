import React from 'react'
import StyledSortBy from '../styles/SortByStyles'

export const sortMap = {
  characters: {
    ascending_alpha: 'name',
    descending_alpha: '-name',
    ascending_modified: 'modified',
    descending_modified: '-modified'
  },
  comics: {
    ascending_alpha: 'title',
    descending_alpha: '-title',
    ascending_modified: 'modified',
    descending_modified: '-modified'
  }
}

const options = [
  { name: 'A-Z', value: 'ascending_alpha' },
  { name: 'Z-A', value: 'descending_alpha' },
  { name: 'LATEST', value: 'ascending_modified' },
  { name: 'NEWEST', value: 'descending_modified' }
]

const SortBy = ({ className, setOrderBy, path }) => {
  const category = path.slice(1)
  const handleChange = e => setOrderBy(sortMap[category][e.target.value])

  return (
    <StyledSortBy className={className}>
      <div>SORT BY</div>
      <select onChange={handleChange}>
        {options.map((opt, i) => (
          <option key={i} value={opt.value}>
            {opt.name}
          </option>
        ))}
      </select>
    </StyledSortBy>
  )
}

export default SortBy
