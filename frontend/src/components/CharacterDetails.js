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

  const renderComicsList = () => {
    return loading || error ? (
      <CharacterComics.PleaseWait
        error={error}
        loading={loading}
        loadingText="loading comics..."
      />
    ) : (
      <ItemsList
        page={page}
        setPage={setPage}
        data={data.comicsByCharacter}
        slug="/comics"
      />
    )
  }

  return (
    <CharacterComics>
      <CharacterComics.H3>COMICS WITH {name.toUpperCase()}</CharacterComics.H3>
      <CharacterComics.SortBy setOrderBy={setOrderBy} slug="/comics" />
      <CharacterComics.List>{renderComicsList()}</CharacterComics.List>
    </CharacterComics>
  )
}

const CharacterDetailsContent = ({ _character }) => {
  const [character] = _character
  const { id, thumbnail, description, name } = character.node

  return (
    <CharacterDetails>
      <SEO title={name} />
      <Banner bg={thumbnail}>
        <Banner.BackgroundImage bg={thumbnail} />
        <Banner.Image src={thumbnail} alt={name} />
        <Banner.H1>{name}</Banner.H1>
      </Banner>
      <Description>
        <Description.H3>DESCRIPTION</Description.H3>
        <Description.P>
          {description || 'DESCRIPTION UNAVAILABLE'}
        </Description.P>
      </Description>
      <CharacterComicsList charId={id} />
    </CharacterDetails>
  )
}

const CharacterDetailsComponent = ({ location }) => {
  const { data, loading, error } = useCharacter({
    id: extractId(location.pathname)
  })

  return (
    <Layout>
      {loading || error ? (
        <CharacterDetails.PleaseWait
          error={error}
          loading={loading}
          loadingText="loading character..."
        />
      ) : (
        <CharacterDetailsContent _character={data.character.edges} />
      )}
    </Layout>
  )
}

CharacterDetailsComponent.propTypes = {
  state: PropTypes.object
}

export default CharacterDetailsComponent
