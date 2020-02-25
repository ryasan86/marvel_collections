import styled from 'styled-components'

const StyledFooter = styled.footer`
  padding: 2rem 0;
  background: var(--black);
  color: var(--off-white);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--small-font);
  div {
    width: 100%;
    text-align: right;
    max-width: var(--max-width);
    color: var(--gray);
  }
  a {
    color: var(--off-white);
    &:hover {
      color: white;
    }
  }
`

export default StyledFooter
