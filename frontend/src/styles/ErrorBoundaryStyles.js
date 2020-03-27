import styled from 'styled-components'

const StyledErrorBoundary = styled.div`
  border-left: 3px solid red;
  background: white;
  padding: 1rem 2rem;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
  p {
    font-size: var(--regular-font);
    display: inline;
  }
  span {
    color: red;
  }
`

export default StyledErrorBoundary
