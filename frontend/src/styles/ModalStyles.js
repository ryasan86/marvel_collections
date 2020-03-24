import styled from 'styled-components'

const Modal = styled.div`
  background: transparent;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`

Modal.Inner = styled.div`
  width: var(--max-width);
  background: white;
`

export default Modal
