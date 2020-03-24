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
import PleaseWait from './PleaseWait'
import { sortMap } from './SortBy'
import { MaxWidth } from './common'
import { useComicsByCharacter } from '../graphql/ComicsHooks'

const CharacterComicsList = ({ charId, orderBy }) => {
  const [page, setPage] = useState(1)
  const comics = useComicsByCharacter({ page, orderBy, charId })
  let { data, loading, error, refetch } = comics

  useEffect(() => {
    refetch()
  }, [page, orderBy])

  if (loading || error) {
    return <PleaseWait loading={loading} error={error} loadingText="loading comics" />
  }

  const { totalCount, edges } = data.comicsByCharacter

  return (
    <ItemsList
      page={page}
      setPage={setPage}
      total={totalCount}
      items={edges}
      slug="/comics"
    />
  )
}

const CharacterDetailsComponent = ({ location: { state } }) => {
  const [orderBy, setOrderBy] = useState(sortMap.comics.ascending_alpha)
  const { id, name, thumbnail, description } = state

  return (
    <Layout>
      <SEO title={name} />
      <MaxWidth>
        <CharacterDetails>
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
          <CharacterComics>
            <CharacterComics.H3>COMICS</CharacterComics.H3>
            <CharacterComics.SortBy setOrderBy={setOrderBy} slug="/comics" />
            <CharacterComics.List>
              <CharacterComicsList orderBy={orderBy} charId={id} />
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
