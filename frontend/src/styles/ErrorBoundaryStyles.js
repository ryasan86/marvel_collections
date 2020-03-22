import styled from 'styled-components'

const StyledErrorBoundary = styled.div`
  border-left: 3px solid red;
  padding: 1rem;
  background: white;
  p {
    font-size: var(--regular-font);
    display: inline;
  }
  span {
    color: red;
  }
`

export default StyledErrorBoundary
