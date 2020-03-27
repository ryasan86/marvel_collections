import styled from 'styled-components'
import PleaseWait from '../components/PleaseWait'
import { DelayMessage } from '../components/common'

const Modal = styled.div`
  background: transparent;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 9999;
  justify-content: center;
  align-items: center;
  display: flex;
  transition: all 0.5s ease;
  position: fixed;
  left: ${props => (props.isVisible ? '0' : '-100%')};
  opacity: ${props => (props.isVisible ? '100%' : '60%')};
`

Modal.PleaseWait = PleaseWait

Modal.DelayMessage = DelayMessage

Modal.Inner = styled.ul`
  width: var(--max-width);
  background: white;
  max-height: 60rem;
  overflow-y: scroll;
`

Modal.Item = styled.li`
  display: flex;
  align-items: center;
  height: 30rem;
  padding-left: 2rem;
  border-left: 1.5rem solid var(--gray);
  border-bottom: 2px solid var(--gray);
  &:last-child {
    border-bottom: none;
  }
`

Modal.Text = styled.div`
  width: 50%;
  p {
    font-size: var(--regular-font);
  }
  a {
    color: black;
    &:hover {
      color: var(--gray);
    }
  }
`

Modal.Price = styled.h3`
  flex-grow: 1;
  text-align: center;
`

Modal.Image = styled.div`
  width: 25rem;
  height: 75%;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`

export default Modal
