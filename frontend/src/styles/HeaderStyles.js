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
  padding: 0 0.5rem;
  a {
    color: var(--off-white);
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-width: 8rem;
    border: 2px solid transparent;
    font-size: 1.2rem;
  }
  &:hover {
    a {
      color: white;
      border-bottom-color: var(--red);
    }
  }
  &.logo a {
    border: none;
  }
  img {
    display: block;
  }
`

export { StyledNavItem }
export default StyledHeader
