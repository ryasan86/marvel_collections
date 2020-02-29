import React from 'react'
import moment from 'moment'
import Layout from './layout'
import StyledComicDetails, {
  ContentContainer,
  TextContainer,
  MetaItem
} from '../styles/comic-details.styles'
import { capitalize } from '../utils/capitalize'
import { BackgroundImage } from './common'

const TextContent = ({ state }) => {
  const { description, modified, prices, creators, title } = state

  const comicMeta = [
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

  const renderComicMeta = () => {
    return comicMeta.map((meta, i) => (
      <MetaItem key={i}>
        <strong>{meta.label}:</strong>
        <p>{meta.value}</p>
      </MetaItem>
    ))
  }

  const renderCreators = () => {
    return creators.items.map((creator, i) => (
      <MetaItem key={i}>
        <strong>{capitalize(creator.role)}:</strong>
        <p>{creator.name}</p>
      </MetaItem>
    ))
  }

  return (
    <TextContainer>
      <h3>{title}</h3>
      <ul className='meta-info'>
        {renderComicMeta()}
        {renderCreators()}
      </ul>
    </TextContainer>
  )
}

const ComicDetails = ({ location: { state } }) => {
  const portrait = state.thumbnail.path + '/portrait_incredible.jpg'
  return (
    <Layout>
      <StyledComicDetails>
        <BackgroundImage bg={portrait} />
        <ContentContainer>
          <img src={portrait} alt={state.title} />
          <TextContent state={state} />
        </ContentContainer>
      </StyledComicDetails>
    </Layout>
  )
}

export default ComicDetails
