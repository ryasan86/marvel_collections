import React from 'react'
import Modal, { Shop, Text, ComicImg, Vendor } from '../styles/ModalStyles'
import { useShopForComic } from '../graphql/ComicsHooks'

const ModalItem = ({
  title,
  price,
  image,
  description,
  url,
  favicon,
  vendor
}) => (
  <Modal.Item>
    <Text>
      <Text.Link href={url} target="_blank" rel="noopener noreferrer">
        <Text.Title>{title}</Text.Title>
      </Text.Link>
      <Text.Description>{description}</Text.Description>
    </Text>
    <Vendor>
      <Vendor.Img src={favicon} alt={vendor} />
    </Vendor>
    <Shop>
      <Shop.Price>{price}</Shop.Price>
      <Shop.Button href={url} target="_blank˝">
        Purchase
      </Shop.Button>
    </Shop>
    <ComicImg>
      <ComicImg.Link href={url} target="_blank" rel="noopener noreferrer">
        <ComicImg.Img src={image} alt={title} />
      </ComicImg.Link>
    </ComicImg>
  </Modal.Item>
)

const ModalComponent = ({ isVisible, title, modalRef, toggleModal }) => {
  const { data, loading, error } = useShopForComic({ title })
  const empty = data && data.shopForComic.length === 0

  return (
    <Modal isVisible={isVisible}>
      {loading || error ? (
        <Modal.PleaseWait
          error={error}
          loading={loading}
          modalRef={modalRef}
          loadingText="searching"
        />
      ) : empty ? (
        <Modal.DelayMessage text="0 VENDORS FOUND 😮" />
      ) : (
        <Modal.Content>
          <Modal.Header>Search Results</Modal.Header>
          <Modal.CloseBtn />
          <Modal.Inner ref={modalRef}>
            {data.shopForComic.map((props, i) => (
              <ModalItem key={i} {...props} />
            ))}
          </Modal.Inner>
        </Modal.Content>
      )}
    </Modal>
  )
}

export default ModalComponent
