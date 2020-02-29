import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import SEO from './seo'
import StyledCharacterDetails, {
  Banner,
  Description,
  CharacterComics,
  LeftColumn,
  RightColumn,
  ContentContainer
} from '../styles/character-details.styles'
import Layout from './layout'
import ItemsList from './items-list'
import SortBy, { sortMap } from './sort-by'
import ErrorBoundary from './error-boundary'
import { MaxWidth, Row, BackgroundImage } from './common'
import { Comics, Characters } from '../client'

const BannerSection = ({ state }) => {
  const bg = state.thumbnail.path + '/portrait_incredible.jpg'
  return (
    <Banner bg={bg}>
      <BackgroundImage bg={bg} />
      <MaxWidth className='banner-content'>
        <LeftColumn>
          <img
            src={state.thumbnail.path + '/portrait_incredible.jpg'}
            alt={state.name}
          />
        </LeftColumn>
        <RightColumn>
          <h1>{state.name}</h1>
        </RightColumn>
      </MaxWidth>
    </Banner>
  )
}

const DescriptionSection = ({ state }) => (
  <Description>
    <LeftColumn>
      <h3>DESCRIPTION</h3>
    </LeftColumn>
    <RightColumn>
      <p>{state.description ? state.description : 'DESCRIPTION UNAVAILABLE'}</p>
    </RightColumn>
  </Description>
)

const CharacterComicsSection = ({
  setOrderBy,
  error,
  page,
  setPage,
  comics
}) => (
  <CharacterComics>
    <Row className='comics-list-row'>
      <LeftColumn>
        <h3>COMICS LIST</h3>
      </LeftColumn>
      <SortBy setOrderBy={setOrderBy} path='/comics' />
    </Row>
    <ErrorBoundary error={error}>
      <ItemsList
        page={page}
        setPage={setPage}
        total={comics && comics.total}
        items={comics && comics.results}
        path='/comics'
      />
    </ErrorBoundary>
  </CharacterComics>
)

const CharacterDetails = ({ location: { state } }) => {
  const [orderBy, setOrderBy] = useState(sortMap.comics.ascending_alpha)
  const [comics, setComics] = useState(null)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const { id: charId, name } = state

  useEffect(() => {
    setComics(null)
    Comics.byCharacter({ page, orderBy, charId, name })
      .then(setComics)
      .catch(setError)
  }, [page, orderBy])

  return (
    <Layout>
      <StyledCharacterDetails>
        <SEO title={state.name} />
        <BannerSection state={state} />
        <ContentContainer>
          <DescriptionSection state={state}></DescriptionSection>
          <CharacterComicsSection
            error={error}
            comics={comics}
            page={page}
            setPage={setPage}
            orderBy={orderBy}
            setOrderBy={setOrderBy}
          />
        </ContentContainer>
      </StyledCharacterDetails>
    </Layout>
  )
}

Characters.propTypes = {
  state: PropTypes.object.isRequired
}

export default CharacterDetails
