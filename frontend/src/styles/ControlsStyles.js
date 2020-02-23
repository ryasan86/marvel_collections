import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
  position: relative;
  input {
    width: 50%;
    outline: none;
    border: none;
    border-bottom: 2px solid black;
    padding: 1rem 3rem;
    font-size: 2rem;
    &:focus {
      box-shadow: 0 0 3px 1px gold;
    }
  }
  img {
    position: absolute;
    height: 100%;
    padding: 1rem 0;
  }
`

const SortBy = styled.div`
  display: flex;
  .sort-btn {
    color: var(--red);
    margin-left: 0.5rem;
    cursor: pointer;
  }
`

export { Row, SortBy }
