import { css } from '@nfront/global-styles'

const StyledFooter = css`
  .footer {
    padding: 2rem 0;
    background: var(--dark);
    color: var(--off-white);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--small-font);
  }
  .footer div {
    width: 100%;
    text-align: right;
    max-width: var(--max-width);
    color: var(--gray);
  }
  a {
    color: var(--off-white);
  }
  a:hover {
    color: white;
  }
`

export default StyledFooter
