import React, { useState, useRef, useEffect } from 'react'
import moment from 'moment'
import Layout from './Layout'
import ComicDetails from '../styles/ComicDetailsStyles'
import { capitalize } from '../utils/capitalize'
import SEO from './SEO'
import ModalComponent from './Modal'

const ComicDetailsComponent = ({ location: { state } }) => {
  const { description, modified, prices, creators, title, thumbnail } = state
  const [isVisible, setIsVisible] = useState(false)
  const modalRef = useRef(null)

  const info = [
    {
      label: 'Description',
      value: description || 'DESCRIPTION UNAVAILABLE'
    },
    {
      label: 'Last Modified',
      value: moment(modified).format('LL')
    },
    {
      label: 'Price',
      value: prices.map(p => p.price).join(', ')
    }
  ]

  const toggleModal = e => {
    if (!modalRef.current.contains(e.target)) {
      setIsVisible(prevState => !prevState)
    }
  }

  useEffect(() => {
    if (isVisible) document.addEventListener('click', toggleModal)
    return () => document.removeEventListener('click', toggleModal)
  }, [isVisible])

  return (
    <Layout>
      <SEO title={title} />
      <ModalComponent isVisible={isVisible} modalRef={modalRef} />
      <ComicDetails>
        <ComicDetails.BackgroundImage bg={thumbnail} />
        <ComicDetails.Content>
          <ComicDetails.ImageContainer>
            <img src={thumbnail} alt={title} />
            <button onClick={toggleModal}>Shop</button>
          </ComicDetails.ImageContainer>
          <ComicDetails.TextContainer>
            <ComicDetails.Header>
              <h3>{title}</h3>
            </ComicDetails.Header>
            <ComicDetails.MetaItemsList>
              {[...info, ...creators].map((meta, i) => (
                <ComicDetails.MetaItem key={i}>
                  <strong>{capitalize(meta.label || meta.role)}:</strong>
                  <p>{meta.value || meta.name}</p>
                </ComicDetails.MetaItem>
              ))}
            </ComicDetails.MetaItemsList>
          </ComicDetails.TextContainer>
        </ComicDetails.Content>
      </ComicDetails>
    </Layout>
  )
}

export default ComicDetailsComponent
