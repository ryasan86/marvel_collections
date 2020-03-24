import React from 'react'
import Modal from '../styles/ModalStyles'
import PleaseWaitComponent from './PleaseWait'
import { useShopForComic } from '../graphql/ComicsHooks'

const ModalItem = ({ title, price, image, description, url }) => {
  return (
    <Modal.Item>
      <Modal.Text>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h3>{title}</h3>
        </a>
        <p>{description}</p>
      </Modal.Text>
      <Modal.Price>{price}</Modal.Price>
      <Modal.Image>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={title} />
        </a>
      </Modal.Image>
    </Modal.Item>
  )
}

const ModalComponent = ({ isVisible, modalRef, title }) => {
  const { data, loading, error } = useShopForComic({ title })

  if (loading || error) {
    return (
      <Modal isVisible={isVisible}>
        <Modal.Inner ref={modalRef}>
          <PleaseWaitComponent
            loading={loading}
            error={error}
            loadingText="searching vendors"
          />
        </Modal.Inner>
      </Modal>
    )
  }

  return (
    <Modal isVisible={isVisible}>
      <Modal.Inner ref={modalRef}>
        {data.shopForComic.map((props, i) => (
          <ModalItem key={i} {...props} />
        ))}
      </Modal.Inner>
    </Modal>
  )
}

export default ModalComponent
