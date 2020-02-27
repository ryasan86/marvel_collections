import styled from 'styled-components'
import ReactPaginate from 'rc-pagination'

const StyledPagination = styled(ReactPaginate)`
  margin: 2rem 0;
  display: flex;
  justify-content: center;

  li {
    margin: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--large-font);
    &.rc-pagination-item-active {
      font-weight: bolder;
    }
    &:focus {
      outline: none;
      box-shadow: 0 0 2px 1px var(--darker);
    }
    a,
    button {
      cursor: pointer;
      font-size: var(--large-font);
      border: none;
      background: transparent;
    }
    button:focus {
      outline: none;
      box-shadow: 0 0 2px 1px var(--darker);
    }
  }
`

export default StyledPagination
