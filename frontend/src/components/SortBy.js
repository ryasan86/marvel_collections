import React from 'react'
import SortBy from '../styles/SortByStyles'

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

const SortByComponent = ({ className, setOrderBy, slug }) => {
  const category = slug.slice(1)
  const handleChange = e => setOrderBy(sortMap[category][e.target.value])

  return (
    <SortBy className={className}>
      <span>SORT BY</span>
      <select onChange={handleChange}>
        {options.map((opt, i) => (
          <option key={i} value={opt.value}>
            {opt.name}
          </option>
        ))}
      </select>
    </SortBy>
  )
}

export default SortByComponent
