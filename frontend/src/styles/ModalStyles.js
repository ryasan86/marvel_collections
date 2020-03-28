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
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
`

Modal.Item = styled.li`
  display: flex;
  align-items: center;
  height: 15rem;
  padding: 2rem 0 2rem 2rem;
  border-left: 1.2rem solid var(--gray);
  border-bottom: 2px solid var(--gray);
  overflow-y: hidden;
  &:last-child {
    border-bottom: none;
  }
`

const Text = styled.div`
  width: 50%;
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
  width: 7.5rem;
  display: flex;
  justify-content: center;
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
  width: 25rem;
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

export { Text, Shop, ComicImg, Vendor }
export default Modal
