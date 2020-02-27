import React from 'react'
import moment from 'moment'
import Layout from './Layout'
import StyledComicDetails, {
  ContentContainer,
  TextContainer,
  MetaItem
} from '../styles/ComicDetailsStyles'
import { capitalize } from '../utils/capitalize'

const TextContent = ({ state }) => {
  const comicMetas = [
    {
      label: 'Description',
      value: state.description ? state.description : 'DESCRIPTION UNAVAILABLE'
    },
    {
      label: 'Last Modified',
      value: moment(state.modified).format('LL')
    },
    {
      label: 'Price',
      value: state.prices.map(p => p.price).join(', ')
    }
  ]

  const renderComicMetas = () => {
    return comicMetas.map((meta, i) => (
      <MetaItem key={i}>
        <strong>{meta.label}:</strong>
        <p>{meta.value}</p>
      </MetaItem>
    ))
  }

  const renderCreators = () => {
    return state.creators.items.map((creator, i) => (
      <MetaItem key={i}>
        <strong>{capitalize(creator.role)}:</strong>
        <p>{creator.name}</p>
      </MetaItem>
    ))
  }

  return (
    <TextContainer>
      <h3>{state.title}</h3>
      <ul className='meta-info'>
        {renderComicMetas()}
        {renderCreators()}
      </ul>
    </TextContainer>
  )
}

const ComicDetails = ({ location: { state } }) => {
  const portrait = state.thumbnail.path + '/portrait_incredible.jpg'
  return (
    <Layout>
      <StyledComicDetails bg={portrait}>
        <div className='background'></div>
        <ContentContainer>
          <img src={portrait} alt={state.title} />
          <TextContent state={state} />
        </ContentContainer>
      </StyledComicDetails>
    </Layout>
  )
}

export default ComicDetails
