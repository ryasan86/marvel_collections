import React, { useState, useEffect } from 'react'
import { Router } from '@reach/router'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import CharactersList from '../styles/CharactersPageStyles'
import Controls from '../components/Controls'
import ItemsList from '../components/ItemsList'
import CharacterDetails from '../components/CharacterDetails'
import { sortMap } from '../components/SortBy'
import { useCharacters, useCharactersByName } from '../graphql/CharactersHooks'

const CharactersInner = ({ slug, orderBy, search, setSearch, setOrderBy }) => {
  const [page, setPage] = useState(1)
  const charactersPromise = search ? useCharactersByName : useCharacters
  const { data, loading, error, refetch } = charactersPromise({
    page,
    orderBy,
    search
  })

  useEffect(() => {
    refetch()
  }, [page, orderBy, search])

  if (loading || error) {
    return (
      <CharactersList.PleaseWait
        loading={loading}
        error={error}
        loadingText="loading characters..."
      />
    )
  }

  const characters = search // prettier-ignore
    ? data.characterNameStartsWith
    : data.characters

  return (
    <CharactersList>
      <CharactersList.Header>COMICS</CharactersList.Header>
      <Controls
        slug={slug}
        total={characters.totalCount}
        setSearch={setSearch}
        setOrderBy={setOrderBy}
      />
      <ItemsList
        data={characters}
        slug={slug}
        error={error}
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
        slug={slug}
        search={search}
        setSearch={setSearch}
        orderBy={orderBy}
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
    <CharacterDetails path="/characters/:id" />
  </Router>
)

export default CharactersPage
