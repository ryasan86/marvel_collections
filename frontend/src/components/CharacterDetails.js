import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import SEO from './SEO'
import Content, {
  StyledBanner,
  StyledDescription,
  StyledCharacterComics,
  LeftColumn,
  RightColumn
} from '../styles/CharacterDetailsStyles'
import Layout from './Layout'
import ItemsList from './ItemsList'
import SortBy, { sortMap } from './SortBy'
import ErrorBoundary from './ErrorBoundary'
import DelayMessage from './DelayMessage'
import { MaxWidth, Row } from './common'
import { BackgroundImage } from './common/BackgroundImage'
import { useComicsByCharacter } from '../graphql/ComicsHooks'

const Banner = ({ state }) => {
  const { thumbnail: bg, name } = state

  return (
    <StyledBanner bg={bg}>
      <BackgroundImage bg={bg} className='bg' />
      <LeftColumn>
        <img src={bg} alt={name} />
      </LeftColumn>
      <RightColumn>
        <h1>{name}</h1>
      </RightColumn>
    </StyledBanner>
  )
}

const Description = ({ state }) => (
  <StyledDescription>
    <LeftColumn>
      <h3>DESCRIPTION</h3>
    </LeftColumn>
    <RightColumn>
      <p>{state.description ? state.description : 'DESCRIPTION UNAVAILABLE'}</p>
    </RightColumn>
  </StyledDescription>
)

const CharacterComicsList = ({ charId, orderBy }) => {
  const [page, setPage] = useState(1)
  const comics = useComicsByCharacter({ page, orderBy, charId })
  const { data, loading, error, refetch } = comics

  useEffect(() => {
    refetch()
  }, [page, orderBy])

  if (loading) {
    return <DelayMessage text="LOADING..." />
  }

  const { totalCount, edges } = data.comicsByCharacter

  return (
    <ErrorBoundary error={error}>
      <ItemsList
        page={page}
        setPage={setPage}
        total={totalCount}
        items={edges}
        slug="/comics"
      />
    </ErrorBoundary>
  )
}

const CharacterComics = ({ comics, charId }) => {
  const [orderBy, setOrderBy] = useState(sortMap.comics.ascending_alpha)

  return (
    <StyledCharacterComics>
      <Row className="comics-list-row">
        <LeftColumn>
          <h3>COMICS LIST</h3>
        </LeftColumn>
        <SortBy setOrderBy={setOrderBy} slug="/comics" />
      </Row>
      <CharacterComicsList orderBy={orderBy} charId={charId} />
    </StyledCharacterComics>
  )
}

const CharacterDetails = ({ location: { state } }) => (
  <Layout>
    <SEO title={state.name} />
    <MaxWidth>
      <Content>
        <Banner state={state} />
        <Description state={state}></Description>
        <CharacterComics charId={state.id} />
      </Content>
    </MaxWidth>
  </Layout>
)

CharacterDetails.propTypes = {
  state: PropTypes.object
}

export default CharacterDetails
