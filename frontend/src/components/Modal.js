import React from 'react'
import Modal from '../styles/ModalStyles'
import PleaseWaitComponent from './PleaseWait'
import { DelayMessage } from './common/DelayMessage'
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

const ModalComponent = ({ isVisible, modalRef, title }) => {
  const { data, loading, error } = useShopForComic({ title })
  const empty = data && data.shopForComic.length === 0

  const renderContent = state => {
    if (loading || error) {
      return (
        <PleaseWaitComponent
          loading={loading}
          error={error}
          loadingText="searching"
        />
      )
    } else if (empty) {
      return <DelayMessage text="0 VENDORS FOUND 😮" />
    }

    return data.shopForComic.map((props, i) => <ModalItem key={i} {...props} />)
  }

  return (
    <Modal isVisible={isVisible}>
      <Modal.Inner ref={modalRef}>{renderContent()}</Modal.Inner>
    </Modal>
  )
}

export default ModalComponent
