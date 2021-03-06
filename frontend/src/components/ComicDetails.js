import React, { useEffect } from 'react'
import moment from 'moment'
import Layout from './Layout'
import ComicDetails from '../styles/ComicDetailsStyles'
import SEO from './SEO'
import { useComic } from '../graphql/ComicsHooks'
import { uncamel, extractId, capitalize } from '../utils'
import {
  useSetShopForTitleMutation,
  useToggleModalMutation
} from '../graphql/LocalStateHooks'

const ComicDetailsContent = ({ comic }) => {
  const [_comic] = comic
  const { description, modified, prices, thumbnail, title, creators } = _comic.node // prettier-ignore
  const [setShopForTitle] = useSetShopForTitleMutation({ shopForTitle: title })
  const [toggleModal] = useToggleModalMutation()

  // prettier-ignore
  const info = [
    { label: 'Description', value: description || 'DESCRIPTION UNAVAILABLE' },
    { label: 'Last Modified', value: moment(modified).format('LL') },
    { label: 'Price', value: prices.map(p => `${uncamel(p.type)} ${p.price}`).join(', ') }
  ]

  useEffect(() => {
    setShopForTitle({ shopForTitle: title })
  }, [title])

  return (
    <ComicDetails>
      <SEO title={title} />
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

const ComicDetailsComponent = ({ location }) => {
  const { data, loading, error } = useComic({
    id: extractId(location.pathname)
  })

  return (
    <Layout>
      {loading || error ? (
        <ComicDetails.PleaseWait
          loadingText="loading comic"
          loading={loading}
          error={error}
        />
      ) : (
        <ComicDetailsContent comic={data.comic.edges} />
      )}
    </Layout>
  )
}

export default ComicDetailsComponent
