import { createGlobalStyle, css } from '@nfront/global-styles'
import StyledHeader, { StyledNavItem } from './HeaderStyles'
import StyledFooter from './FooterStyles'

const StyledHomeLink = css`
  .home-link {
    text-decoration: none;
    border-radius: 3px;
    padding: 1rem 0;
    width: 15rem;
    text-align: center;
    margin-bottom: 1rem;
    color: var(--red);
    font-size: var(--large-font);
    border: 2px solid var(--red);
    cursor: pointer;
  }
  .home-links:hover {
    color: var(--dark);
    border-color: var(--dark);
  }
`

const StyledRoot = css`
  :root {
    --dark: #1f1f1f;
    --darker: #141414;
    --red: #ec1c24;
    --off-white: #e1e1e1;
    --gray: #999;
    --light-gray: #bbb;
    --small-font: 1.2rem;
    --regular-font: 1.4rem;
    --large-font: 1.7rem;
    --max-width: 120rem;
    --focus-shadow: 0 0 2px 1px var(--light-gray);
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
`

const StyledHtml = css`
  html,
  body {
    font-family: 'Roboto Condensed', Arial, Helvetica, sans-serif;
    font-size: 10px;
    margin: 0;
    padding: 0;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  h1 {
    font-size: 5rem;
  }

  h2 {
    font-size: 4rem;
  }

  h3 {
    font-size: 3rem;
  }

  h4 {
    font-size: 2rem;
  }

  p {
    font-size: var(--large-font);
  }
`
// temporary because styled components causes flicker
const GlobalStyles = createGlobalStyle`
  ${StyledRoot}
  ${StyledHtml}
  ${StyledHomeLink}
  ${StyledHeader}
  ${StyledNavItem}
  ${StyledFooter}
`

export default GlobalStyles
