import styled from 'styled-components'
import { Row } from '../styles/shared'

const Controls = styled.div`
  font-size: var(--regular-font);
  font-weight: normal;
  color: var(--gray);
  margin-bottom: 1rem;
`

Controls.Row = styled(Row)`
  position: relative;
  margin-top: 2rem;
  &:last-child {
    padding: 0 1.2rem;
  }
`

Controls.Image = styled.img`
  position: absolute;
  height: 100%;
  padding: 1rem;
`

Controls.Input = styled.input`
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
`

Controls.Total = styled.div`
  transition: opacity 0.7s;
  transition-delay: 0.5s;
  opacity: ${props => (props.isVisible ? '1' : '0')};
`

export default Controls
