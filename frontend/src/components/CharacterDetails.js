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
import { sortMap } from './SortBy'
import { useCharacter } from '../graphql/CharactersHooks'
import { useComicsByCharacter } from '../graphql/ComicsHooks'
import { extractId } from '../utils'

const CharacterComicsList = ({ charId }) => {
  const [orderBy, setOrderBy] = useState(sortMap.comics.ascending_alpha)
  const [page, setPage] = useState(1)
  const comics = useComicsByCharacter({ page, orderBy, charId })
  const { data, loading, error, refetch } = comics

  useEffect(() => {
    refetch()
  }, [page, orderBy])

  if (loading || error) {
    return (
      <CharacterComics.PleaseWait
        loading={loading}
        error={error}
        loadingText="loading comics..."
      />
    )
  }

  const { totalCount, edges } = data.comicsByCharacter

  return (
    <CharacterComics>
      <CharacterComics.H3>COMICS</CharacterComics.H3>
      <CharacterComics.SortBy setOrderBy={setOrderBy} slug="/comics" />
      <CharacterComics.List>
        <ItemsList
          page={page}
          setPage={setPage}
          total={totalCount}
          items={edges}
          slug="/comics"
        />
      </CharacterComics.List>
    </CharacterComics>
  )
}

const CharacterDetailsInner = ({ id, thumbnail, description, name }) => (
  <CharacterDetails>
    <Banner bg={thumbnail}>
      <Banner.BackgroundImage bg={thumbnail} />
      <Banner.Image src={thumbnail} alt={name} />
      <Banner.H1>{name}</Banner.H1>
    </Banner>
    <Description>
      <Description.H3>DESCRIPTION</Description.H3>
      <Description.P>{description || 'DESCRIPTION UNAVAILABLE'}</Description.P>
    </Description>
    <CharacterComicsList charId={id} />
  </CharacterDetails>
)

const CharacterDetailsComponent = ({ location }) => {
  let { data, loading, error } = useCharacter({
    id: extractId(location.pathname)
  })
  const character = data && data.character.edges[0].node

  return (
    <Layout>
      <SEO title={name} />
      {loading || error ? (
        <CharacterDetails.PleaseWait
          loading={loading}
          error={error}
          loadingText="loading character..."
        />
      ) : (
        <CharacterDetailsInner {...character} />
      )}
    </Layout>
  )
}

CharacterDetailsComponent.propTypes = {
  state: PropTypes.object
}

export default CharacterDetailsComponent
