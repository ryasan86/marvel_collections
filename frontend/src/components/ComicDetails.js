import React from 'react'
import moment from 'moment'
import Layout from './Layout'
import ComicDetails from '../styles/ComicDetailsStyles'
import { capitalize } from '../utils/capitalize'
import SEO from './SEO'

const ComicDetailsComponent = ({ location: { state } }) => {
  const { description, modified, prices, creators, title, thumbnail } = state

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

  return (
    <Layout>
      <SEO title={title} />
      <ComicDetails>
        <ComicDetails.BackgroundImage bg={thumbnail} />
        <ComicDetails.Content>
          <img src={thumbnail} alt={title} />
          <ComicDetails.TextContainer>
            <ComicDetails.Header>
              <h3>{title}</h3>
              <button>Shop</button>
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
