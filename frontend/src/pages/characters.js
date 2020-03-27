import React, { useState, useEffect } from 'react'
import { Router } from '@reach/router'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import CharactersList from '../styles/CharactersPageStyles'
import Controls from '../components/Controls'
import ItemsList from '../components/ItemsList'
import CharacterDetails from '../components/CharacterDetails'
import PleaseWait from '../components/PleaseWait'
import { sortMap } from '../components/SortBy'
import { useCharacters, useCharactersByName } from '../graphql/CharactersHooks'

const CharactersInner = ({ slug, orderBy, search, setSearch, setOrderBy }) => {
  const [page, setPage] = useState(1)
  const charactersPromise = search ? useCharactersByName : useCharacters
  const characters = charactersPromise({ page, orderBy, search })
  let { data, loading, error, refetch } = characters

  useEffect(() => {
    refetch()
  }, [page, orderBy, search])

  if (loading || error) {
    return (
      <CharactersList.PleaseWaitContainer>
        <PleaseWait
          loading={loading}
          error={error}
          loadingText="loading characters"
        />
      </CharactersList.PleaseWaitContainer>
    )
  }

  const { totalCount, edges } = search // prettier-ignore
    ? data.characterNameStartsWith
    : data.characters

  return (
    <CharactersList>
      <CharactersList.Header>COMICS</CharactersList.Header>
      <Controls
        slug={slug}
        total={totalCount}
        setSearch={setSearch}
        setOrderBy={setOrderBy}
      />
      <ItemsList
        slug={slug}
        error={error}
        items={edges}
        total={totalCount}
        page={page}
        setPage={setPage}
      />
    </CharactersList>
  )
}

const Characters = ({ path: slug }) => {
  const [orderBy, setOrderBy] = useState(sortMap.characters.ascending_alpha)
  const [search, setSearch] = useState(null)

  return (
    <Layout>
      <SEO title="Characters" />
      <CharactersInner
        orderBy={orderBy}
        search={search}
        slug={slug}
        setSearch={setSearch}
        setOrderBy={setOrderBy}
      />
    </Layout>
  )
}

Characters.propTypes = {
  slug: PropTypes.string
}

const CharactersPage = () => (
  <Router>
    <Characters path="/characters" />
    <CharacterDetails path="/characters/:name" />
  </Router>
)

export default CharactersPage
