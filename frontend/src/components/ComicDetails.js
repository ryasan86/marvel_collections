import React, { useState, useRef, useEffect } from 'react'
import moment from 'moment'
import Layout from './Layout'
import ComicDetails from '../styles/ComicDetailsStyles'
import SEO from './SEO'
import ModalComponent from './Modal'
import { useComic } from '../graphql/ComicsHooks'
import { uncamel, extractId, capitalize } from '../utils'
import { DelayMessage } from './common/DelayMessage'

const ComicDetailsInner = ({
  description,
  modified,
  prices,
  thumbnail,
  title,
  toggleModal,
  creators,
  setTitle
}) => {
  // prettier-ignore
  const info = [
      { label: 'Description', value: description || 'DESCRIPTION UNAVAILABLE' },
      { label: 'Last Modified', value: moment(modified).format('LL') },
      { label: 'Price', value: prices.map(p => `${uncamel(p.type)} ${p.price}`).join(', ') }
    ]

  useEffect(() => {
    setTitle(title)
  }, [title])

  return (
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
  )
}

const ComicDetailsComponent = ({ location, navigate }) => {
  const modalRef = useRef(null)
  const [title, setTitle] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const { data, loading, error } = useComic({
    id: extractId(location.pathname)
  })

  const toggleModal = e => {
    if (!modalRef.current.contains(e.target)) {
      setIsVisible(prevState => !prevState)
    }
  }

  useEffect(() => {
    if (isVisible) document.addEventListener('click', toggleModal)
    return () => document.removeEventListener('click', toggleModal)
  }, [isVisible])

  if (loading || error) {
    return (
      <Layout>
        <div style={{ width: '100%', flexGrow: 1 }}>
          <ComicDetails.PleaseWait
            error={error}
            loading={loading}
            loadingText="loading comic..."
          />
        </div>
      </Layout>
    )
  }

  if (data.comic === null) {
    return (
      <Layout>
        <div style={{ width: '100%', flexGrow: 1 }}>
          <DelayMessage text="loading comic..." />
        </div>
      </Layout>
    )
  }

  const comic = data && data.comic.edges[0].node

  return (
    <Layout>
      <SEO title={title} />
      <ModalComponent isVisible={isVisible} modalRef={modalRef} title={title} />
      <ComicDetailsInner
        {...comic}
        setTitle={setTitle}
        toggleModal={toggleModal}
      />
    </Layout>
  )
}

export default ComicDetailsComponent
