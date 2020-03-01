import styled from 'styled-components'

const StyledSortBy = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--regular-font);
  select {
    cursor: pointer;
    border: none;
    background: transparent;
    margin-left: 1rem;
    color: var(--red);
    &:focus {
      box-shadow: 0 0 2px 1px var(--light-gray);
      outline: none;
    }
  }
`

export default StyledSortBy
