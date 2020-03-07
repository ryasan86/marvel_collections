import styled from 'styled-components'

const Footer = styled.footer`
  padding: 2rem 0;
  background: var(--dark);
  color: var(--off-white);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--small-font);
  a {
    color: var(--off-white);
    margin: 0;
    &:hover {
      color: white;
    }
  }
`

Footer.MaxWidth = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: var(--max-width);
  color: var(--gray);
`

Footer.A = styled.a``

export default Footer
