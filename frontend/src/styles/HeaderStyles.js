import styled from 'styled-components'
import { Link } from 'gatsby'

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  background: var(--dark);
  position: relative;
  z-index: 10;
`

Header.NavItem = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  &:first-child {
    margin-left: 0;
  }
  &:hover a {
    color: white;
    border-bottom-color: var(--red);
  }
  &.login {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 100%;
  }
  &.logo a {
    border: none;
    height: 100%;
  }
`

Header.Link = styled(Link)`
  color: var(--light-gray);
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-width: 9rem;
  border: 2px solid transparent;
  font-size: var(--regular-font);
`

export default Header
