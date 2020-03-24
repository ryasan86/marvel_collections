import React, { useState, useEffect } from 'react'
import { Router } from '@reach/router'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import ItemsList from '../components/ItemsList'
import CharacterDetails from '../components/CharacterDetails'
import SEO from '../components/SEO'
import Controls from '../components/Controls'
import PleaseWait from '../components/PleaseWait'
import { MaxWidth, H4 } from '../components/common'
import { sortMap } from '../components/SortBy'
import { useCharacters, useCharactersByName } from '../graphql/CharactersHooks'

const CharactersList = ({ slug, orderBy, search, setTotalCount }) => {
  const [page, setPage] = useState(1)
  const charactersPromise = search ? useCharactersByName : useCharacters
  const characters = charactersPromise({ page, orderBy, search })
  const { data, loading, error, refetch } = characters

  useEffect(() => {
    refetch()
  }, [page, orderBy, search])

  if (loading || error) {
    return (
      <PleaseWait
        loading={loading}
        error={error}
        loadingText="loading characters"
      />
    )
  }

  const { totalCount, edges } = search
    ? data.characterNameStartsWith
    : data.characters
  setTotalCount(totalCount)

  return (
    <ItemsList
      slug={slug}
      error={error}
      items={edges}
      total={totalCount}
      page={page}
      setPage={setPage}
    />
  )
}

const CharactersMain = ({ path: slug }) => {
  const [orderBy, setOrderBy] = useState(sortMap.characters.ascending_alpha)
  const [totalCount, setTotalCount] = useState(null)
  const [search, setSearch] = useState(null)

  return (
    <Layout>
      <SEO title="Characters" />
      <MaxWidth>
        <H4>CHARACTERS</H4>
        <Controls
          slug={slug}
          total={totalCount}
          setSearch={setSearch}
          setOrderBy={setOrderBy}
        />
        <CharactersList
          orderBy={orderBy}
          search={search}
          slug={slug}
          setTotalCount={setTotalCount}
        />
      </MaxWidth>
    </Layout>
  )
}

CharactersMain.propTypes = {
  slug: PropTypes.string
}

const CharactersPage = () => (
  <Router>
    <CharactersMain path="/characters" />
    <CharacterDetails path="/characters/:name" />
  </Router>
)

export default CharactersPage
