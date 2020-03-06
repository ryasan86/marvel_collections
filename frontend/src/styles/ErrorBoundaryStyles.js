import styled from 'styled-components'

const StyledErrorBoundary = styled.div`
  border-left: 3px solid red;
  padding: 1rem;
  p {
    font-size: var(--regular-font);
  }
  span {
    color: red;
  }
`

export default StyledErrorBoundary
