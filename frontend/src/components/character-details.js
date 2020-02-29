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
import DelayMessage from './delay-message'
import { MaxWidth, Row, BackgroundImage } from './common'
import { useComicsByCharacter } from '../graphql/comics.hook'

const BannerSection = ({ state }) => {
  const { thumbnail: bg, name } = state

  return (
    <Banner bg={bg}>
      <BackgroundImage bg={bg} />
      <MaxWidth className='banner-content'>
        <LeftColumn>
          <img src={bg} alt={name} />
        </LeftColumn>
        <RightColumn>
          <h1>{name}</h1>
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

const CharacterComicsList = ({ charId, orderBy }) => {
  const [page, setPage] = useState(1)
  const comics = useComicsByCharacter({ page, orderBy, charId })
  const { data, loading, error, refetch } = comics

  useEffect(() => {
    refetch()
  }, [page, orderBy])

  if (loading) {
    return <DelayMessage text='LOADING...' />
  }

  const { totalCount, edges } = data.comicsByCharacter

  return (
    <ErrorBoundary error={error}>
      <ItemsList
        page={page}
        setPage={setPage}
        total={totalCount}
        items={edges}
        path='/comics'
      />
    </ErrorBoundary>
  )
}

const CharacterComicsSection = ({ comics, charId }) => {
  const [orderBy, setOrderBy] = useState(sortMap.comics.ascending_alpha)

  return (
    <CharacterComics>
      <Row className='comics-list-row'>
        <LeftColumn>
          <h3>COMICS LIST</h3>
        </LeftColumn>
        <SortBy setOrderBy={setOrderBy} path='/comics' />
      </Row>
      <CharacterComicsList orderBy={orderBy} charId={charId} />
    </CharacterComics>
  )
}

const CharacterDetails = ({ location: { state } }) => (
  <Layout>
    <StyledCharacterDetails>
      <SEO title={state.name} />
      <BannerSection state={state} />
      <ContentContainer>
        <DescriptionSection state={state}></DescriptionSection>
        <CharacterComicsSection charId={state.id} />
      </ContentContainer>
    </StyledCharacterDetails>
  </Layout>
)

CharacterDetails.propTypes = {
  state: PropTypes.object
}

export default CharacterDetails
