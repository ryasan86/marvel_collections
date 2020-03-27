import styled from 'styled-components'

const StyledErrorBoundary = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
    border-left: 3px solid red;
    font-size: var(--regular-font);
    display: inline-block;
    background: white;
    margin: 3rem 0;
    padding: 1rem 2rem;
  }
  span {
    color: red;
  }
`

export default StyledErrorBoundary
