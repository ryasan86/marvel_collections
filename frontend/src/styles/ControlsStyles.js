import styled from 'styled-components'

const StyledControls = styled.div`
  font-size: var(--regular-font);
  font-weight: normal;
  color: var(--gray);
  & > div {
    position: relative;
    margin: 2rem 0;
  }
  input {
    width: 50%;
    outline: none;
    border: none;
    border-bottom: 2px solid black;
    padding: 1rem 4.5rem;
    font-size: 2rem;
    font-weight: bolder;
    &:focus {
      box-shadow: 0 0 3px 1px var(--gray);
    }
    &::placeholder {
      color: #eee;
    }
  }
  img {
    position: absolute;
    height: 100%;
    padding: 1rem;
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

export { SortBy }
export default StyledControls
