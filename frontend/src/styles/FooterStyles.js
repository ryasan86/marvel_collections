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
  .max-width {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    max-width: var(--max-width);
    color: var(--gray);
  }
  .footer a {
    color: var(--off-white);
    margin: 0;
  }
  a:hover {
    color: white;
  }
`

export default StyledFooter
