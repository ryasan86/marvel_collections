import styled from 'styled-components'

const StyledHeader = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  background: var(--black);
`

const StyledNavItem = styled.li`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  a {
    color: var(--light-gray);
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-width: 9rem;
    border: 2px solid transparent;
    font-size: var(--regular-font);
  }
  &.logo a {
    border: none;
  }
  img {
    display: block;
    height: 100%;
  }
  &:first-child {
    margin-left: 0;
  }
  &:hover {
    a {
      color: white;
      border-bottom-color: var(--red);
    }
  }
`

export { StyledNavItem }
export default StyledHeader
