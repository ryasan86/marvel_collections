import React from 'react'
import Modal from '../styles/ModalStyles'

const items = [
  {
    title: 'Spider-Man (2019-) #1 (of 5)',
    price: '$4.99',
    imgSrc:
      'https://images-na.ssl-images-amazon.com/images/I/416vgS4RXzL._SY346_.jpg'
  },
  {
    title: 'Wolverine: Enemy of the State (Wolverine (2003-2009))',
    price: '$11.99',
    imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/61MftRlTQ6L.jpg'
  }
]

const ModalComponent = () => {
  return (
    <Modal>
      <Modal.Inner>modal</Modal.Inner>
    </Modal>
  )
}

export default ModalComponent
