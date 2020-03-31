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

const ModalComponent = ({ modalRef, modalOpen, shopForTitle }) => {
  const { data, loading, error } = useShopForComic({ title: shopForTitle })
  const totalCount = data && data.shopForComic.totalCount

  return (
    <Modal modalOpen={modalOpen}>
      {loading || error ? (
        <Modal.PleaseWait
          error={error}
          loading={loading}
          modalRef={modalRef}
          loadingText="searching..."
          emptyText="0 vendors found 😮"
        />
      ) : totalCount === 0 ? (
        <Modal.DelayMessage modalRef={modalRef} text="0 vendors found 😮" />
      ) : (
        <Modal.Inner>
          <Modal.CloseBtn />
          <Modal.ItemsList ref={modalRef}>
            <Modal.Header>
              <span>Found {totalCount} Comics</span>
            </Modal.Header>
            {data.shopForComic.edges.map(({ node }, i) => (
              <ModalItem key={i} {...node} />
            ))}
          </Modal.ItemsList>
        </Modal.Inner>
      )}
    </Modal>
  )
}

export default ModalComponent
