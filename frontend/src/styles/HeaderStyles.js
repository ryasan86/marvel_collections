import { css } from '@nfront/global-styles'

const StyledHeader = css`
  .header {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    background: var(--dark);
    position: sticky;
    z-index: 10;
  }
`

const StyledNavItem = css`
  .nav-item {
    display: flex;
    align-items: center;
    margin-left: 1rem;
  }
  .nav-item:first-child {
    margin-left: 0;
  }
  .nav-item:hover a {
    color: white;
    border-bottom-color: var(--red);
  }
  .nav-item a {
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
  .nav-item.logo > a {
    border: none;
    height: 100%;
  }
  .nav-item img {
    display: block;
    height: 100%;
  }
`

export { StyledNavItem }
export default StyledHeader
