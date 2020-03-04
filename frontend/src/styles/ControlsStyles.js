import styled from 'styled-components'

const StyledControls = styled.div`
  font-size: var(--regular-font);
  font-weight: normal;
  color: var(--gray);
  margin-bottom: 1rem;
  & > div {
    position: relative;
    margin-top: 2rem;
  }
  input {
    width: 50%;
    outline: none;
    border: none;
    border-bottom: 2px solid black;
    padding: 1rem 4.5rem;
    font-size: 2rem;
    font-weight: bolder;
    &:focus {
      box-shadow: 0 0 3px 1px var(--gray);
    }
    &::placeholder {
      color: #eee;
    }
  }
  img {
    position: absolute;
    height: 100%;
    padding: 1rem;
  }
`

const StyledTotal = styled.div`
  transition: opacity 0.7s;
  transition-delay: 0.5s;
  margin-left: 1.2rem;
  opacity: ${props => props.isVisible ? '1' : '0'};
`

export { StyledTotal }
export default StyledControls
