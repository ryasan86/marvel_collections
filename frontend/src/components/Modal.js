import React from 'react'
import Modal from '../styles/ModalStyles'
import { useShopForComic } from '../graphql/ComicsHooks'

const ModalItem = ({ title, price, image, description, url }) => {
  return (
    <Modal.Item>
      <Modal.Text>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h4>{title}</h4>
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

const ModalComponent = ({ isVisible, title, modalRef }) => {
  let { data, loading, error } = useShopForComic({ title })
  const empty = data && data.shopForComic.length === 0

  const renderContent = () => {
    return loading || error ? (
      <Modal.PleaseWait
        modalRef={modalRef}
        loading={loading}
        error={error}
        loadingText="searching"
      />
    ) : empty ? (
      <Modal.DelayMessage modalRef={modalRef} text="0 VENDORS FOUND 😮" />
    ) : (
      <Modal.Inner ref={modalRef}>
        {data.shopForComic.map((props, i) => (
          <ModalItem key={i} {...props} />
        ))}
      </Modal.Inner>
    )
  }

  return <Modal isVisible={isVisible}>{renderContent()}</Modal>
}

export default ModalComponent
