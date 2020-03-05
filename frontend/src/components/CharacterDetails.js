import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import SEO from './SEO'
import CharacterDetails, {
  Banner,
  Description,
  CharacterComics
} from '../styles/CharacterDetailsStyles'
import Layout from './Layout'
import ItemsList from './ItemsList'
import ErrorBoundary from './ErrorBoundary'
import { sortMap } from './SortBy'
import { MaxWidth, DelayMessage } from './common'
import { useComicsByCharacter } from '../graphql/ComicsHooks'

const CharacterComicsList = ({ charId, orderBy }) => {
  const [page, setPage] = useState(1)
  const comics = useComicsByCharacter({ page, orderBy, charId })
  const { data, loading, error, refetch } = comics

  useEffect(() => {
    refetch()
  }, [page, orderBy])

  if (loading) {
    return <DelayMessage text="LOADING COMICS..." />
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

const CharacterDetailsComponent = ({ location: { state } }) => {
  const [orderBy, setOrderBy] = useState(sortMap.comics.ascending_alpha)

  return (
    <Layout>
      <SEO title={state.name} />
      <MaxWidth>
        <CharacterDetails>
          <Banner bg={state.thumbnail}>
            <Banner.BackgroundImage bg={state.thumbnail} />
            <Banner.Image src={state.thumbnail} alt={state.name} />
            <Banner.H1>{state.name}</Banner.H1>
          </Banner>
          <Description>
            <Description.H3>DESCRIPTION</Description.H3>
            <Description.P>
              {state.description
                ? state.description
                : 'DESCRIPTION UNAVAILABLE'}
            </Description.P>
          </Description>
          <CharacterComics>
            <CharacterComics.H3>COMICS</CharacterComics.H3>
            <CharacterComics.SortBy setOrderBy={setOrderBy} slug="/comics" />
            <CharacterComics.List>
              <CharacterComicsList orderBy={orderBy} charId={state.id} />
            </CharacterComics.List>
          </CharacterComics>
        </CharacterDetails>
      </MaxWidth>
    </Layout>
  )
}

CharacterDetailsComponent.propTypes = {
  state: PropTypes.object
}

export default CharacterDetailsComponent
