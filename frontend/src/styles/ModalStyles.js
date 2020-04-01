import styled from 'styled-components'
import PleaseWait, { DelayMessage } from '../components/PleaseWait'
import { ListHeader } from '../styles/shared'

const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.4);
  z-index: ${props => props => (props.modalOpen ? '2' : '-1')};
  opacity: ${props => (props.modalOpen ? '1' : '0')};
`

const Modal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${props => (props.modalOpen ? '3' : '-1')};
  opacity: ${props => (props.modalOpen ? '1' : '0')};
  transform: ${props => (props.modalOpen ? 'scale(1)' : 'scale(0)')};
`

Modal.Header = ListHeader
Modal.PleaseWait = PleaseWait
Modal.DelayMessage = DelayMessage

Modal.CloseBtn = styled.button`
  width: 3rem;
  height: 3rem;
  position: absolute;
  border-radius: 50%;
  top: -1.5rem;
  right: -1.5rem;
  background: var(--dark);
  border: 1.5px solid white;
  cursor: pointer;
  transform: rotate(45deg);
  outline: none;
  z-index: 3;
  &:before {
    content: '';
    width: 0.3rem;
    height: 1.5rem;
    background: white;
    position: absolute;
    transform: translate(-50%, -50%);
  }
  &:after {
    content: '';
    width: 1.5rem;
    height: 0.3rem;
    background: white;
    position: absolute;
    transform: translate(-50%, -50%);
  }
`

Modal.Inner = styled.div`
  position: absolute;
`

Modal.ItemsList = styled.ul`
  width: 100%;
  max-height: 64.4rem;
  max-width: 1100px;
  background: white;
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;
`

Modal.Item = styled.li`
  display: flex;
  height: 15rem;
  padding: 2rem 0 2rem 2rem;
  border-bottom: 2px solid #555;
  overflow-y: hidden;
  &:last-child {
    border-bottom: none;
  }
`

const Text = styled.div`
  width: 65%;
`

Text.Link = styled.a`
  color: black;
  &:hover {
    color: var(--gray);
  }
`

Text.Title = styled.h4`
  margin: 0;
  display: flex;
  align-items: center;
`

Text.Description = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: var(--small-font);
`

const Vendor = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`

Vendor.Img = styled.img`
  height: 2.5rem;
  width: 2.5rem;
`

const Shop = styled.div`
  flex-grow: 1;
  text-align: center;
  font-size: var(--regular-font);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  span {
    font-size: var(--large-font);
  }
`

Shop.Price = styled.h4`
  margin: 0;
`

Shop.Button = styled.a`
  border: none;
  background: #5dade2;
  border: 2px solid #5dade2;
  color: white;
  outline: none;
  border-radius: 2px;
  padding: 0.5rem 1rem;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background: transparent;
    color: #5dade2;
  }
`

const ComicImg = styled.div`
  width: 10%;
  height: 100%;
`

ComicImg.Link = styled.a`
  cursor: pointer;
`

ComicImg.Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`

export { Text, Shop, ComicImg, Vendor, ModalOverlay }
export default Modal
